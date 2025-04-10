import { API } from "../constants/api";

export const MenuApi = {
  getMenuInfo: (key: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      API.get("menus/info", {
        params: { key },
      })
        .then((json: any) => resolve(json.data))
        .catch((e: any) => reject(e));
    });
  },
};
