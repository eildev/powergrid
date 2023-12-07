import { FaGears } from "react-icons/fa6";
import Button from "./Button";

const Card = () => {
  return (
    <div className="border-2 border-primary p-7 rounded-md">
      <div className="h-[150px] bg-primary w-full rounded-md flex justify-center items-center mb-5">
        <span className="text-white text-[100px]">
          <FaGears />
        </span>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-5">Operation and Maintenance</h4>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.
        </p>
        <Button title="Learn More" className="bg-primary text-white" />
      </div>
    </div>
  );
};

export default Card;
