import { API } from "../constants/api";

/**
 * Kiểu dữ liệu cho query tìm kiếm
 */
interface SearchQuery {
  [key: string]: any; // Tuỳ chỉnh theo yêu cầu
}

/**
 * Kiểu dữ liệu của phản hồi API
 */
interface ApiResponse<T = any> {
  data: T;
  meta?: {
    pagination?: {
      total: number;
      page: number;
      per_page: number;
    };
  };
}

export const SearchApi = {
  /**
   * Gọi API tìm kiếm bài viết hoặc sản phẩm
   *
   * @param query - Điều kiện tìm kiếm
   * @param locale - Ngôn ngữ (mặc định là null)
   * @param accessToken - Token xác thực (mặc định là null)
   * @returns {Promise<ApiResponse>} - Dữ liệu tìm kiếm
   */
  search: async (query: SearchQuery = {}): Promise<ApiResponse> => {
    return API.get<ApiResponse>("search", { params: query });
  },
};
