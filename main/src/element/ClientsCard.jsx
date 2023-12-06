import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import image1 from "../assets/img/user/user4.jpg";

const ClientsCard = () => {
  return (
    <div className="ml-24">
      <div className="bg-secondary w-[350px] rounded-md relative">
        <div className="absolute top-1/2 -left-[50px] -translate-y-1/2 w-[100px] h-[100px] bg-gray rounded-md overflow-hidden">
          <img src={image1} alt="" />
        </div>

        <div className="py-5 pr-5 pl-16">
          <p className="text-xs leading-4 relative text-justify">
            <span className="text-primary absolute top-0 -left-4">
              <FaQuoteLeft />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            cupiditate, molestiae obcaecati esse vel suscipit quod perferendis
            eligendi deserunt accusamus commodi, nisi assumenda, incidunt
            dolores similique corrupti dolorem voluptatem laboriosam soluta
            recusandae distinctio eum debitis reiciendis? Dolorum natus est,
            commodi sequi lorem,
            <span className="text-primary absolute -bottom-1 right-7">
              <FaQuoteRight />
            </span>
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
