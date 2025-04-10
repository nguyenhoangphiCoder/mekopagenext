import { ProductOneCategory } from "@/components/ProductOnCategory";
import { CategoryApi } from "../../services/category-api";
import { SearchApi } from "../../services/search-api";

export default async function Category({ type, category }: any) {
  const categoryRes = await CategoryApi.getAllCategories({
    type_id: type.id,
  });

  const postRes = await SearchApi.search({
    cat: category.id,
  });

  return (
    <ProductOneCategory
      type={type}
      category={category}
      categories={categoryRes.data}
      posts={postRes.data}
    />
  );
}
