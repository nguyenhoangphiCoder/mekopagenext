import { API } from "../constants/api";

export const PostApi = {
  getPostById: (id: any, query = {}) => {
    return new Promise((resolve, reject) => {
      API.get("posts/" + id, {
        params: query,
      })
        .then((json: any) => resolve((json as { data: any }).data))
        .catch((e) => reject(e));
    });
  },
};
