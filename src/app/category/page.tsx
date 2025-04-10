import { headers as nextHeaders } from "next/headers";
import { CategoryApi } from "../services/category-api";
import { notFound } from "next/navigation";
import { generateMeta, getModule } from "../helpers/server";
import { SeoApi } from "../services/seo-api";

export async function generateMetadata({ searchParams }: any) {
  const headers = await nextHeaders();
  const pathname = headers.get("x-pathname") || "/default-path"; // Fallback to a default path

  if (!pathname) {
    throw new Error("x-pathname header is missing");
  }

  const resolvedSearchParams = await searchParams; // Await searchParams
  const categorySlug = resolvedSearchParams?.category;
  const dataSeo = await SeoApi.getSeoInfo(pathname);
  const category = await CategoryApi.getCategoryBySlug(categorySlug);

  if (!category) {
    throw new Error("Category not found");
  }

  return generateMeta(dataSeo?.seo, dataSeo?.setting, {
    title: category.title,
    description: category.description,
    image: category.image,
  });
}

export default async function CategoryPage({ searchParams }: any) {
  const resolvedSearchParams = await searchParams;
  console.log(resolvedSearchParams); // Await searchParams
  const categorySlug = resolvedSearchParams?.category;
  const category = await CategoryApi.getCategoryBySlug(categorySlug, {
    include: "type",
  });

  if (
    !category ||
    !category.type ||
    category.type.data.slug !== resolvedSearchParams.type
  ) {
    notFound();
  }

  const type = category.type.data;
  console.log("Category type", type);
  const Category = await getModule(type, "Category");
  console.log("Category", Category);
  if (!Category) {
    return <div>Error: Category component not found</div>;
  }

  return <Category type={type} category={category} />;
}
