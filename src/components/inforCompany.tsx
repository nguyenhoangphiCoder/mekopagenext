import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
export default function InforCompany({ settings }: any) {
  return (
    <div className="h-[508px] w-[306px] flex flex-col  gap-[24px]">
      <div className="h-[153px] w-[306px] rounded-[10px] flex justify-center items-center bg-[#fafafa]">
        <ul className="flex flex-col gap-[10px] justify-center items-center">
          <li className="w-[42px] h-[42px] bg-[#ffff] rounded-[100px] flex justify-center items-center">
            <MdPhone className="text-2xl text-[#ec500d]" />
          </li>
          <li className="font-fira-sans  font-[600] text-[14px] uppercase text-[#ec500d]">
            số điện thoại
          </li>
          <li className="whitespace-pre-line font-fira-sans text-[14px] text-center font-[500]">
            {settings?.company_phone}
          </li>
        </ul>
      </div>
      <div className="h-[153px] w-[306px] rounded-[10px] flex justify-center items-center bg-[#fafafa]">
        <ul className="flex flex-col gap-[10px] justify-center items-center">
          <li className="w-[42px] h-[42px] bg-[#ffff] rounded-[100px] flex justify-center items-center">
            <MdEmail className="text-2xl text-[#ec500d]" />
          </li>
          <li className="font-fira-sans font-[600] text-[14px] uppercase text-[#ec500d]">
            Email
          </li>
          <li className="whitespace-pre-line font-fira-sans text-[14px] text-center font-[500]">
            {settings?.company_email}
          </li>
        </ul>
      </div>
      <div className="h-[153px] w-[306px] rounded-[10px] flex justify-center items-center bg-[#fafafa]">
        <ul className="flex flex-col gap-[10px] justify-center items-center">
          <li className="w-[42px] h-[42px] bg-[#ffff] rounded-[100px] flex justify-center items-center">
            <MdLocationOn className="text-2xl text-[#ec500d]" />
          </li>
          <li className="font-fira-sans text-[14px] uppercase font-[600] text-[#ec500d]">
            địa chỉ
          </li>
          <li
            className="whitespace-pre-line font-fira-sans text-[14px] text-center font-[500]"
            dangerouslySetInnerHTML={{
              __html: settings?.company_address || "",
            }}
          ></li>
        </ul>
      </div>
    </div>
  );
}
