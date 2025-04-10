export default function FormContact() {
  return (
    <div className="flex flex-col gap-5 ">
      <input
        type="text"
        placeholder="Họ"
        className="w-[568px] h-[53px] font-fira-sans rounded-[51px] justify-center p-5 bg-gray-300  "
      />
      <input
        type="text"
        placeholder="Tên"
        className="w-[568px] h-[53px] rounded-[51px] font-fira-sans justify-center p-5  bg-gray-300 "
      />
      <input
        type="text"
        placeholder="Số điện thoại"
        className="w-[568px] h-[53px] rounded-[51px] font-fira-sans justify-center p-5  bg-gray-300 "
      />
      <div className="flex flex-col w-[568px]">
        <textarea
          placeholder="Nội dung"
          className="h-[150px] rounded-[20px] font-fira-sans p-5 bg-gray-300 resize-none"
        ></textarea>
      </div>
    </div>
  );
}
