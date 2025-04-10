import Image from "next/image";
import iconAbout from "../../public/img/iconAbout.png";
export default function AboutUs() {
  // Tạo mảng data
  const data = [
    {
      title: "Chất lượng xuất khẩu",
      description:
        "Sản phẩm đạt chất lượng xuất khẩu sang các thị trường khó tính như Singapore, Nhật Bản...",
    },
    {
      title: "Sản phẩm đạt chuẩn",
      description:
        "Sản phẩm mang đậm nét văn hoá ẩm thực Việt, hương vị đậm đà, đặc trưng, gợi nhớ những ký ức quen thuộc.",
    },
    {
      title: "Hương vị truyền thống",
      description:
        "Chất lượng sản phẩm được các khách hàng và tổ chức quốc tế trên thế giới đến kiểm định và cấp chứng chỉ.",
    },
    {
      title: "30 năm kinh nghiệm",
      description:
        "Luôn không ngừng hoàn thiện và phát triển, đáp ứng mọi nhu cầu và kỳ vọng của khách hàng.",
    },
  ];

  return (
    <div className="max-w-[600px] mx-auto my-10 mt-[20px]">
      {data.map((item, index) => (
        <div key={index} className="flex flex-row items-start mb-6">
          <Image
            src={iconAbout}
            alt="Icon"
            width={50}
            height={50}
            className="w-[50px] mr-4 h-[50px]"
          />
          <div className="mt-2">
            {/* Phần tiêu đề và mô tả */}
            <h2 className="text-xl font-barlow text-[#00428c] mb-1">
              {item.title}
            </h2>
            <p className="text-[#464646] font-barlow">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
