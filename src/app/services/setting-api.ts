import { API } from "../constants/api";

export const SettingApi = {
  getSetting: () => {
    return new Promise((resolve, reject) => {
      API.get("settings")
        .then((json: any) => {
          resolve(json.data);
        })
        .catch((err) => reject(err));
    });
  },
};
