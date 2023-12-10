const CompanyServicesElement = ({ data }) => {
  const { icon, title } = data;
  return (
    <div className="flex border-2 border-primary rounded-[5px] h-[80px] justify-between items-center">
      <div className="bg-primary w-1/2 h-full flex justify-center items-center">
        <span className=" w-full h-full flex justify-center items-center text-white text-3xl">
          <img className="h-[50px]" src={icon} alt="" />
        </span>
      </div>
      <div className="bg-white w-1/2 h-full flex justify-center items-center rounded-r-[5px]">
        <p className="text-xl">{title}</p>
      </div>
    </div>
  );
};

export default CompanyServicesElement;
