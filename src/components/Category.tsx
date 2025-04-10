"use server";

import { CategoryApi } from "../app/services/category-api"; // Adjust the path as needed

import { headers as nextHeader } from "next/headers";
import { SeoApi } from "@/app/services/seo-api";
import { generateMeta } from "@/app/helpers/server";
import { GroupApi } from "@/app/services/group-api";
import { TypeApi } from "@/app/services/type-api";
import CategoryBody from "./CategoryBody";
interface Category {
  id: number;
  name: string;
  image: string;
  title: string; // Ensure this property is included
  slug: string; // Make this property non-optional to match CategoryBodyProps
}
export async function generateMetadata() {
  const headers = await nextHeader();

  const pathname = headers.get("x-pathname") ?? "/";
  const dataSeo = await SeoApi.getSeoInfo(pathname);

  return generateMeta(dataSeo?.seo, dataSeo?.setting);
}

export default async function Category() {
  const type = await TypeApi.getTypeById(1);
  const categories = type
    ? (await CategoryApi.getAllCategories({ type_id: type.id })).data.map(
        (category: any) => ({
          ...category,
          title: category.title || "Default Title", // Ensure title is present
        })
      )
    : [];
  const trademarks = type
    ? await GroupApi.getAllGroups({
        type_id: type.id,
        style: "trademark",
      })
    : [];
  const group = await GroupApi.getGroupById(2, { include: "posts" });
  // const menuHeader = await MenuApi.getMenuInfo(MENU.HEADER);
  return (
    <div className="flex justify-center items-center h-[757px] mt-[-50px] w-full flex-col mx-auto">
      <h1 className="text-[35px] font-fira-sans text-[#00428c] mb-5">
        Danh Mục
      </h1>
      <CategoryBody
        type={type ?? { slug: "" }}
        category={categories}
        // trademarks={trademarks}
        // group={group}
      />
    </div>
  );
}
