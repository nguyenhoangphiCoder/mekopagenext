import dynamic from "next/dynamic";
export const ProductOneDetail = dynamic(
  () => import("../app/detail/Components/Detail")
);
