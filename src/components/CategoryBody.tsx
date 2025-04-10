import { createLinkCategory } from "@/app/helpers/utils";
import Link from "next/link";
import Image from "next/image";

interface CategoryBodyProps {
  type: {
    slug: string;
  };
  category: {
    id: string;
    image?: string;
    name?: string;
    title: string;
    slug: string;
  }[];
}

export default function CategoryBody({ type, category }: CategoryBodyProps) {
  return (
    <div className="py-8 mb-10 px-4">
      <div className="flex gap-6 overflow-x-auto w-full max-w-screen-xl mx-auto scrollbar-hide">
        {category?.map((item) => (
          <Link
            key={item.id}
            href={createLinkCategory(item, type.slug)}
            className="min-w-[250px] max-w-[250px] bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex-shrink-0"
          >
            <div className="flex flex-col items-center p-4">
              <Image
                width={250}
                height={200}
                src={item.image || "/img/default.png"}
                alt={item.name || "No Image"}
                className="rounded-lg w-full h-[160px] object-cover mb-3 transition-transform duration-300 hover:scale-105"
              />
              <p className="text-center text-base font-medium text-gray-800 line-clamp-2">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
