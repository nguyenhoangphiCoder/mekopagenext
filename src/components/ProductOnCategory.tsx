import dynamic from "next/dynamic";

export const ProductOneCategory = dynamic(
  () => import("../app/category/Components/Category")
);
