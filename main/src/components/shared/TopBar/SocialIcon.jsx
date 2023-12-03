import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

// const icons = [
//   {
//     id: 1,
//     icon: AiFillFacebook,
//   },
//   {
//     id: 2,
//     icon: AiFillLinkedin,
//   },
// ];

const SocialIcon = () => {
  return (
    <div className="flex gap-5">
      <span className="text-4xl text-[#1FBEF9] cursor-pointer">
        <AiFillFacebook />
      </span>
      <span className="text-4xl text-[#1FBEF9] cursor-pointer">
        <AiFillLinkedin />
      </span>
    </div>
  );
};

export default SocialIcon;
