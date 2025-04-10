/**
 * Tạo link chi tiết loại bài đăng
 *
 * @param type - Loại bài đăng
 * @returns Đường dẫn chi tiết của loại bài đăng
 */
export function createLinkType(type: { slug: string }): string {
  return `/${type.slug}`;
}

/**
 * Tạo link chi tiết danh mục
 *
 * @param category - Danh mục
 * @param typeSlug - Slug của loại bài đăng chứa danh mục
 * @returns Đường dẫn chi tiết của danh mục
 */
export function createLinkCategory(
  category: { slug: string },
  typeSlug: string
): string {
  return `/${typeSlug}/${category.slug}`;
}

/**
 * Tạo link chi tiết nhóm
 *
 * @param group - Nhóm dữ liệu
 * @param typeSlug - Slug của loại bài đăng chứa nhóm dữ liệu
 * @returns Đường dẫn chi tiết của nhóm dữ liệu
 */
export function createLinkGroup(
  group: { slug: string },
  typeSlug: string
): string {
  return `/${typeSlug}/g/${group.slug}`;
}

/**
 * Tạo link chi tiết thương hiệu
 *
 * @param trademark - Thương hiệu
 * @param typeSlug - Slug của loại bài đăng chứa thương hiệu
 * @returns Đường dẫn chi tiết của thương hiệu
 */
export function createLinkTrademark(
  trademark: { slug: string },
  typeSlug: string
): string {
  return `/${typeSlug}/t/${trademark.slug}`;
}

/**
 * Tạo link chi tiết bài đăng (bài viết|sản phẩm)
 *
 * @param post - Bài đăng
 * @param typeSlug - Slug của loại bài đăng chứa bài đăng
 * @returns Đường dẫn chi tiết của bài đăng
 */
export function createLinkDetail(
  post: { slug: string; id: number },
  typeSlug: string
): string {
  return `/${typeSlug}/${post.slug}-${post.id}.html`;
}

/**
 * Định dạng số có dấu phân cách
 *
 * @param number - Giá trị cần định dạng
 * @returns Chuỗi số đã định dạng
 */
export function formatNumber(number: number): string {
  return new Intl.NumberFormat("vi-VI", {
    maximumSignificantDigits: 3,
  }).format(number);
}

/**
 * Định dạng số thành dạng tiền tệ
 *
 * @param money - Giá trị cần định dạng
 * @param currency - Loại tiền tệ (mặc định: "VND")
 * @returns Chuỗi tiền tệ đã định dạng
 */
export function formatMoney(money: number, currency: string = "VND"): string {
  return new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency,
  }).format(money);
}

/**
 * Định dạng số điện thoại
 *
 * @param phoneNumber - Số điện thoại
 * @returns Chuỗi số điện thoại đã định dạng
 */
export const formatNumberPhone = (phoneNumber: string): string => {
  return phoneNumber.replace(/(\d{3})(\d{3})(\d{2})(\d{2,})/, "$1 $2 $3 $4");
};

/**
 * Kiểm tra giá trị thuộc mảng hay không
 *
 * @param val - Giá trị cần kiểm tra
 * @param arr - Mảng cần kiểm tra
 * @returns `true` nếu giá trị tồn tại trong mảng, ngược lại trả về `false`
 */
export function inArray<T>(val: T, arr: T[]): boolean {
  return arr.includes(val);
}

/**
 * Lấy thông báo lỗi
 *
 * @param err - Lỗi nhận được
 * @returns Chuỗi thông báo lỗi
 */
export function getMessageError(err: any): string {
  return err?.data?.message || err?.message || "Error";
}
