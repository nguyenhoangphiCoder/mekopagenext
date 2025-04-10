import { API } from "../constants/api";

// Interface mô tả cấu trúc của đối tượng query (có thể mở rộng hoặc thay đổi tùy theo yêu cầu)
interface TypeQuery {
  [key: string]: any;
}

// Interface mô tả cấu trúc của đối tượng Type
interface Type {
  id: string;
  name: string;
  slug: string;
  // Thêm các thuộc tính khác của Type nếu có
}

export const TypeApi = {
  // Lấy tất cả các loại
  getAllTypes: (query: TypeQuery = {}): Promise<any> => {
    return API.get("types", {
      params: query,
    });
  },

  // Lấy loại theo ID
  getTypeById: (
    id: string | number,
    query: TypeQuery = {}
  ): Promise<Type | null> => {
    return new Promise((resolve, reject) => {
      API.get("types", {
        params: {
          ...query,
          id,
        },
      })
        .then((json: any) => {
          const data = json.data?.length ? json.data[0] : null;
          resolve(data);
        })
        .catch((e: any) => reject(e));
    });
  },

  // Lấy loại theo slug
  getTypeBySlug: (
    slug: string,
    query: TypeQuery = {}
  ): Promise<Type | null> => {
    return new Promise((resolve, reject) => {
      API.get("types", {
        params: {
          ...query,
          slug,
        },
      })
        .then((json: any) => {
          const data = json.data?.length ? json.data[0] : null;
          resolve(data);
        })
        .catch((e: any) => reject(e));
    });
  },
};
