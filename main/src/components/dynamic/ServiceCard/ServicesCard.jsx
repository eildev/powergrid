import { FaAtlassian } from "react-icons/fa6";
import servicesImg from "../../../assets/img/about/about1.png";

const ServicesCard = () => {
  return (
    <div className="max-w-[300px]">
      <div>
        <img src={servicesImg} alt="" />
      </div>
      <div>
        <div className="flex gap-3 mt-4 ">
          <span className="w-[80px] h-[80px] border-2 border-[#1FBEF9] rounded-sm text-primary text-2xl flex justify-center items-center">
            <FaAtlassian />
          </span>
          <div>
            <h4 className="text-xl font-karla mb-2">Renewable Energy</h4>
            <p className=" text-xs max-w-[250px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
