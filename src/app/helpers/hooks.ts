"use client";
import useSWR from "swr";
import { SearchApi } from "../services/search-api";
import { CategoryApi } from "../services/category-api";
import { API } from "../constants/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SettingApi } from "../services/setting-api";
/**
 * Kiểu dữ liệu cho query tìm kiếm
 */
interface SearchQuery {
  [key: string]: any; // Có thể mở rộng theo nhu cầu tìm kiếm
}

/**
 * Kiểu dữ liệu của một bài đăng/sản phẩm
 */
interface Post {
  id: number;
  title: string;
  slug: string;
  [key: string]: any;
}

/**
 * Kiểu dữ liệu của phản hồi API
 */
interface ApiResponse {
  data: Post[];
  meta?: {
    pagination?: {
      total: number;
      page: number;
      per_page: number;
    };
  };
}
type Category = {
  id: number;
  name: string;
  slug: string;
  [key: string]: any;
};

/**
 * Hook lấy danh sách bài viết hoặc sản phẩm
 *
 * @param query - Điều kiện tìm kiếm
 * @returns Danh sách bài viết, trạng thái tải và lỗi
 */
export function usePosts(query: SearchQuery = {}) {
  const { data, error, isLoading } = useSWR<ApiResponse>(
    ["get-posts", query],
    async () => {
      return await SearchApi.search(query);
    },
    {
      dedupingInterval: 60000,
    }
  );

  return {
    error,
    loading: isLoading,
    posts: data?.data || [],
    pagination: data?.meta?.pagination || null,
  };
}

/**
 * Lấy thông tin danh mục
 *
 * @param {number | string} key Category ID hoặc Category Slug
 * @param {string | null} include Các dữ liệu liên quan cần lấy kèm
 * @returns {{ error: any; loading: boolean; category: Category | null }}
 */
export function useCategoryInfo(
  key: number | string,
  include: string | null = null
) {
  const { data, error, isLoading } = useSWR<Category | null>(
    ["get-category-info", key, include],
    async () => {
      const method = async (
        key: string | number,
        options: { include: string | null }
      ): Promise<Category | null> => {
        if (typeof key === "string") {
          return CategoryApi.getCategoryBySlug(key, {
            include: options.include,
          });
        } else {
          return CategoryApi.getCategoryById(key, { include: options.include });
        }
      };
      return method(key, { include });
    },
    {
      dedupingInterval: 60000,
    }
  );

  return { error, loading: isLoading, category: data };
} // Cập nhật đường dẫn nếu cần
// /**
//  * Lấy kích thước hiện tại của màn hình
//  *
//  * @param {Function} callback
//  * @returns {Number}
//  */
// export function useWindowWidth(callback = null) {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     setWidth(window.innerWidth);

//     const resize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", resize);

//     return () => {
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   useEffect(() => {
//     if (callback) {
//       callback(width);
//     }
//   }, [width]);

//   return width;
// }
// export function useBreakpoint(callback = null) {
//   const width = useWindowWidth();
//   const [data, setData] = useState({
//     breakpoint: "",
//     isXS: false,
//     isSM: false,
//     isMD: false,
//     isLG: false,
//     isXL: false,
//     maxSM: false,
//     maxMD: false,
//     maxLG: false,
//   });

//   useEffect(() => {
//     const data = {
//       breakpoint: "",
//       isXS: false,
//       isSM: false,
//       isMD: false,
//       isLG: false,
//       isXL: false,
//       maxSM: false,
//       maxMD: false,
//       maxLG: false,
//     };

//     if (width >= CONFIG.BREAKPOINT["sm"]) {
//       data.breakpoint = "sm";
//       data.isSM = true;
//     } else {
//       data.breakpoint = "xs";
//       data.isXS = true;
//     }

//     if (width < CONFIG.BREAKPOINT["md"]) {
//       data.maxSM = true;
//     } else {
//       data.breakpoint = "md";
//       data.isMD = true;
//     }

//     if (width < CONFIG.BREAKPOINT["lg"]) {
//       data.maxMD = true;
//     } else {
//       data.breakpoint = "lg";
//       data.isLG = true;
//     }

//     if (width < CONFIG.BREAKPOINT["xl"]) {
//       data.maxLG = true;
//     } else {
//       data.breakpoint = "xl";
//       data.isXL = true;
//     }

//     setData(data);

//     if (callback) {
//       callback(data);
//     }
//   }, [width]);

//   return data;
// }

export const useSetting = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    SettingApi.getSetting()
      .then((data: any) => {
        setSettings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { settings, loading, error };
};
