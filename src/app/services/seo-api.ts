import { API } from "../constants/api";

// Define the structure of the response from the API
interface SeoInfoResponse {
  setting(
    seo: (
      seo: any,
      setting: any,
      arg2: { title: any; description: any; image: any }
    ) => unknown,
    setting: any,
    arg2: { title: any; description: any; image: any }
  ): unknown;
  seo(
    seo: any,
    setting: any,
    arg2: { title: any; description: any; image: any }
  ): unknown;
  data: {
    seo: {
      title: string;
      description: string;
      image: string;
    };
    setting: Record<string, unknown>;
  };
}

export const SeoApi = {
  getSeoInfo: (url: string): Promise<SeoInfoResponse> => {
    return new Promise((resolve, reject) => {
      API.get("seos/info", {
        params: { url },
      })
        .then((json) => resolve((json as { data: SeoInfoResponse }).data))
        .catch((e: Error) => reject(e));
    });
  },
};
