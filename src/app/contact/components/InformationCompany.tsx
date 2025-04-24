import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useSetting } from "@/app/helpers/hooks";

export default function InformationCompany({ settings }: any) {
  return (
    <div className="flex flex-col gap-6 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xl mx-auto">
      <ul className="space-y-5">
        <li className="flex items-center text-base sm:text-lg font-medium text-[#00428c]">
          <MdEmail className="text-2xl mr-3 text-blue-600" />
          <span>{settings?.company_email}</span>
        </li>

        <li className="flex items-center text-base sm:text-lg font-medium text-[#00428c]">
          <MdPhone className="text-2xl mr-3 text-blue-600" />
          <span>{settings?.company_phone}</span>
        </li>

        <li className="flex items-start text-base sm:text-lg font-medium text-[#00428c]">
          <MdLocationOn className="text-2xl mr-3 text-blue-600 mt-1" />
          <span
            dangerouslySetInnerHTML={{
              __html: settings?.company_address || "",
            }}
          />
        </li>
      </ul>

      {/* Map */}
      {settings?.company_map && (
        <div className="mt-4 rounded-lg overflow-hidden border border-blue-400">
          <div
            className="w-full h-[300px]"
            dangerouslySetInnerHTML={{ __html: settings.company_map }}
          />
        </div>
      )}
    </div>
  );
}
