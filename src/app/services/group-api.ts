import { API } from "../constants/api";

interface GroupQuery {
  [key: string]: any; // Có thể tùy chỉnh kiểu dữ liệu nếu biết cấu trúc cụ thể của query
}

interface Group {
  id: string;
  name: string;
  slug: string;
  // Thêm các thuộc tính khác của Group nếu có
}

export const GroupApi = {
  // Lấy tất cả nhóm
  getAllGroups: (query: GroupQuery = {}): Promise<any> => {
    return API.get("groups", {
      params: query,
    });
  },

  // Lấy nhóm theo ID
  getGroupById: (
    id: string | number,
    query: GroupQuery = {}
  ): Promise<Group | null> => {
    return new Promise((resolve, reject) => {
      API.get("groups", {
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

  // Lấy nhóm theo slug
  getGroupBySlug: (
    slug: string,
    query: GroupQuery = {}
  ): Promise<Group | null> => {
    return new Promise((resolve, reject) => {
      API.get("groups", {
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
