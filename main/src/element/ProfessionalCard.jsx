import userImage from "../assets/img/user/user2.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const ProfessionalCard = () => {
  return (
    <div className="max-w-[300px] p-10 rounded-t-full border-2 bg-white border-primary place-self-center">
      <div className="w-[220px] h-[220px] rounded-full flex justify-center items-center overflow-hidden mx-auto">
        <img src={userImage} alt="" />
      </div>
      <div className="text-center my-5">
        <h4 className="text-primary font-bold text-2xl mb-2">Name Here</h4>
        <p className="">Position Here</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <span className="bg-primary text-white p-2 rounded">
          <FaFacebook />
        </span>
        <span className="bg-primary text-white p-2 rounded">
          <FaInstagram />
        </span>
        <span className="bg-primary text-white p-2 rounded">
          <FaTwitter />
        </span>
      </div>
    </div>
  );
};

export default ProfessionalCard;
