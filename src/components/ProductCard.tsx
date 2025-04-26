import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { Fira_Sans } from "next/font/google";
const firaSans = Fira_Sans({ subsets: ["latin"], weight: ["400", "600"] });
export default function ProductCard({ posts }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 w-full">
      {posts?.map((post: any) => (
        <div
          key={post.id}
          className="bg-white p-5 flex flex-col rounded-2xl shadow w-[370px] h-[245px] hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col gap-5 ">
            <h1 className={`text-[24px] ${firaSans.className} font-[700] `}>
              {post.title}
            </h1>
            <p className="line-clamp-2 font-roboto text-[16px] font-[400]">
              {post.description}
            </p>
          </div>
          <div className="flex flex-row">
            <a
              href={`/productdetail?slug=${post.id}`}
              className="font-firaSans font-[700] mt-5 text-[#ec500d] text-[15px]  flex-row flex"
            >
              <p
                className={`flex flex-row ${firaSans.className} font-[700] text-[15px]`}
              >
                Xem ngay <FaChevronRight className="text-[14px] m-1" />
              </p>
            </a>
            <Image
              width={500}
              height={500}
              src={post.image}
              alt={post.title || "Product image"}
              className="h-[140px] w-[160px] ml-20 mt-[-15px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
