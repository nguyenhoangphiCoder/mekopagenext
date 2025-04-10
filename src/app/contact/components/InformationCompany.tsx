import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useSetting } from "@/app/helpers/hooks";

export default function InformationCompany({ settings }: any) {
  return (
    <div className="flex flex-col gap-5 mb-5 p-4">
      <ul className="space-y-4">
        <li className="flex items-center text-xl font-barlow text-[#00428c]">
          <MdEmail className="text-2xl mr-3 text-blue-700" />
          {settings?.company_email}
        </li>

        <li className="flex items-center text-xl font-barlow text-[#00428c]">
          <MdPhone className="text-2xl mr-3 text-blue-700" />
          {settings?.company_phone}
        </li>

        <li className="flex items-start text-xl font-barlow text-[#00428c]">
          <MdLocationOn className="text-2xl mr-3 text-blue-700 mt-1" />
          <span
            dangerouslySetInnerHTML={{
              __html: settings?.company_address || "",
            }}
          />
        </li>
      </ul>

      {/* Map */}
      {settings?.company_map && (
        <div className="mt-5 border-2 rounded-md border-blue-500 overflow-hidden">
          <div
            className="w-full h-[300px]"
            dangerouslySetInnerHTML={{ __html: settings.company_map }}
          />
        </div>
      )}
    </div>
  );
}
