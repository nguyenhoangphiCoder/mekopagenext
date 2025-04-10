export default function ConsultationRequest() {
  return (
    <div className="flex  justify-center items-center mt-[-150px] top-[1004px] h-[660px]  bg-[#f1f1f1]  mx-auto ">
      <div className="flex h-[511px] w-[1280]  justify-center gap-10 items-center">
        <div className="flex flex-col h-[411px] w-[1180px] ">
          <h2 className="font-fira-sans text-[35px] text-[#00428c]">
            Yêu cầu tư vấn
          </h2>
          <div className="w-[1180px] h-[341] mt-5 ">
            <div className="flex flex-row gap-5 ">
              <input
                type="text"
                placeholder="Họ"
                className="w-[568px] h-[53px] font-fira-sans rounded-[51px] justify-center p-5 bg-[#ffff]  "
              />
              <input
                type="text"
                placeholder="Tên"
                className="w-[568px] h-[53px] rounded-[51px] font-fira-sans justify-center p-5  bg-[#ffff] "
              />
            </div>
            <input
              type="text"
              placeholder="Số điện thoại"
              className="w-[1155px] h-[53px] rounded-[51px] font-fira-sans bg-[#fff] pl-5 mt-5"
            />
            <input
              type="text"
              placeholder="Nội dung"
              className="w-[1155px] h-[113px] font-fira-sans rounded-[20px] bg-[#fff] pl-5 mt-5 pb-15"
            />
            <button className="w-[133px] h-[40px] text-white font-barlow rounded-[51px] bg-[#ec500d] mt-5 text-[16px]">
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
