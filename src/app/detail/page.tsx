import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { PostApi, SeoApi } from "../services";
import { generateMeta, getModule } from "../helpers/server";

// ---------------------
// Interface Definitions
// ---------------------
interface PageProps {
  searchParams: {
    id: string;
    slug: string;
    type: string;
  };
}

interface PostType {
  id: string;
  title: string;
  description?: string;
  slug: string;
  seo_title?: string;
  seo_description?: string;
  seo_image?: string;
  seo_keyword?: string;
  image?: string;
  type: {
    data: {
      slug: string;
      config?: {
        sitemap?: boolean;
      };
    };
  };
  fields?: any;
}

// ---------------------
// Metadata Generation
// ---------------------
export async function generateMetadata({ searchParams }: PageProps) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") || "/default-path";

  if (!pathname) {
    throw new Error("x-pathname header is missing");
  }

  const [post, dataSeo] = await Promise.all([
    PostApi.getPostById(searchParams.id, {
      include: "type",
    }) as Promise<PostType>,
    SeoApi.getSeoInfo(pathname),
  ]);

  if (!post) {
    return {}; // fallback metadata if post not found
  }

  return generateMeta(dataSeo?.seo, dataSeo?.setting, {
    title: post.seo_title || post.title,
    description: post.seo_description || post.description,
    image: post.seo_image || post.image,
    keyword: post.seo_keyword,
    robot: post.type?.data?.config?.sitemap !== false,
  });
}

// ---------------------
// Page Component
// ---------------------
export default async function DetailPage({ searchParams }: PageProps) {
  const post = (await PostApi.getPostById(searchParams.id, {
    include: "type,fields",
  })) as PostType;

  if (
    !post ||
    post.slug !== searchParams.slug ||
    post.type?.data?.slug !== searchParams.type
  ) {
    notFound();
  }

  const type = post.type.data;
  const Detail = await getModule(type, "Detail");

  return <Detail type={type} post={post} />;
}
