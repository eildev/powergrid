import { FaDiamond } from "react-icons/fa6";

const CompanyServicesElement = () => {
  return (
    <div className="flex border-2 border-primary rounded-[5px] h-[80px] justify-between items-center">
      <div className="bg-primary w-1/2 h-full flex justify-center items-center">
        <span className=" w-full h-full flex justify-center items-center text-white text-3xl">
          <FaDiamond />
        </span>
      </div>
      <div className="bg-white w-1/2 h-full flex justify-center items-center rounded-r-[5px]">
        <p className="text-xl">ERC</p>
      </div>
    </div>
  );
};

export default CompanyServicesElement;
