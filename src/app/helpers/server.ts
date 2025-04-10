"use server";
import { cookies, headers as nextHeader } from "next/headers";

/**
 * Tạo dữ liệu thẻ head
 *
 * @param seo - Dữ liệu nhận từ API
 * @param setting - Dữ liệu nhận từ API
 * @param data - Dữ liệu theo trang hiện tại (mặc định: null)
 * @returns Dữ liệu meta cho trang
 */
export async function generateMeta(
  seo: Record<string, any>,
  setting: Record<string, any>,
  data: Record<string, any> | null = null
) {
  const headers = await nextHeader();
  const url = headers.get("x-url") || "";
  const host = headers.get("x-domain") || setting?.site_url || null;

  const title = seo?.title || data?.title || setting?.site_name || "";
  const type = seo?.type || "website";
  const description =
    seo?.description || data?.description || setting?.site_description || "";
  const image = seo?.image || data?.image || setting?.site_logo || "";
  const keyword = seo?.keyword || data?.keyword || setting?.site_keyword || "";
  const author = data?.author || "Satek";
  const copyright = data?.copyright || setting?.site_name;
  const robot = data?.robot === false ? false : true;

  return {
    metadataBase: host ? new URL(host) : null,
    title,
    keywords: keyword.split(","),
    description,
    openGraph: {
      title,
      siteName: setting?.site_name || title,
      description,
      type,
      images: [image],
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      type,
      images: [image],
      url,
    },
    robots: {
      index: robot,
      follow: robot,
      googleBot: {
        index: robot,
        follow: robot,
      },
    },
    alternates: {
      canonical: url,
    },

    other: {
      author,
      copyright,
    },
  };
}

/**
 * Lấy dữ liệu Cookie
 *
 * @param name - Tên cookie cần lấy
 * @returns Giá trị cookie hoặc null
 */
export async function getCookie(name: string): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value ?? null;
}

/**
 * Lưu Cookie
 *
 * @param name - Tên cookie
 * @param value - Dữ liệu
 * @param expiry - Thời gian hết hạn (Đơn vị: giây. Mặc định: không hết hạn)
 */
export async function setCookie(
  name: string,
  value: string,
  expiry: number = 0
): Promise<void> {
  const headers = new Headers();
  const cookieOptions = [`${name}=${value}`, "Path=/", "HttpOnly", "Secure"];
  if (expiry) {
    const expiryDate = new Date(Date.now() + expiry * 1000).toUTCString();
    cookieOptions.push(`Expires=${expiryDate}`);
  }
  headers.append("Set-Cookie", cookieOptions.join("; "));
  // Note: This function assumes you will use the headers in a server response.
  console.warn(
    "Ensure to include the returned headers in your server response for the cookie to be set."
  );
}

/**
 * Xóa Cookie
 *
 * @param name - Tên cookie
 */
export async function deleteCookie(name: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(name, "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0), // Set to a past date to delete the cookie
    path: "/",
  });
}

/**
 * Dịch ngôn ngữ



/**
 * Lấy module của loại bài đăng
 *
 * @param type - Dữ liệu nhận từ API
 * @param name - Tên module (Mặc định: "Type")
 * @returns Module hoặc null nếu không tìm thấy
 */
export async function getModule(
  type: Record<string, any>,
  name: string = "Type"
): Promise<any | null> {
  const keys = [type.slug, `${type.style}-${type.id}`, type.style];
  for (const key of keys) {
    try {
      const module = await import(`../modules/${key}/${name}`);
      console.log("Module loaded:", module);
      return module.default;
    } catch (error) {
      console.warn(`Module not found: ${key}/${name}`);
    }
  }

  return null;
}
