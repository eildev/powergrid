import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import image1 from "../assets/img/about/about1.png";

const ClientsCard = () => {
  return (
    <div className="lg:ml-24 sm:ml-14 ml-14">
      <div className="bg-secondary lg:w-[350px] sm:w-[250px] w-[250px] rounded-md relative">
        <div className="absolute top-1/2 lg:-left-[50px] -left-[35px] -translate-y-1/2 lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] rounded-md overflow-hidden">
          <img src={image1} className="h-full w-full object-cover" alt="" />
        </div>

        <div className="py-5 pr-5 pl-16">
          <p className="text-xs leading-4 relative text-justify">
            <span className="text-primary absolute top-0 -left-4">
              <FaQuoteLeft />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            cupiditate, molestiae{" "}
            <span className="hidden sm:block">
              obcaecati esse vel suscipit quod perferendis eligendi deserunt
              accusamus commodi, nisi assumenda, incidunt dolores
            </span>
            <span className="hidden lg:block">
              similique corrupti dolorem voluptatem laboriosam soluta recusandae
              distinctio eum debitis reiciendis? Dolorum natus est, commodi
              sequi lorem,
            </span>
            <p className="text-primary text-right">
              <FaQuoteRight />
            </p>
          </p>

          <h3 className="text-primary font-semibold text-xl mt-1">
            John Doe
            <span className="text-[9px] ml-1 text-gray">CEO-ATC-LTD</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;
