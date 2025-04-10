import { API } from "../constants/api";

type QueryParams = Record<string, any>;

type Category = {
  id: number;
  name: string;
  slug: string;
  [key: string]: any;
};

export const CategoryApi = {
  async getAllCategories(
    query: QueryParams = {}
  ): Promise<{ data: Category[] }> {
    return API.get("categories", { params: query });
  },

  async getCategoryById(
    id: number,
    query: QueryParams = {}
  ): Promise<Category | null> {
    try {
      const json = await API.get<{ data: Category[] }>("categories", {
        params: { ...query, id },
      });
      return json.data.length ? json.data[0] : null;
    } catch (e) {
      throw e;
    }
  },

  async getCategoryBySlug(
    slug: string,
    query: QueryParams = {}
  ): Promise<Category | null> {
    try {
      const json = await API.get<{ data: Category[] }>("categories", {
        params: { ...query, slug },
      });
      return json.data.length ? json.data[0] : null;
    } catch (e) {
      throw e;
    }
  },
};
