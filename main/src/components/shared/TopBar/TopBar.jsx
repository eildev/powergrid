import Logo from "../Navbar/Logo";
import ISOCertified from "./ISOCertified";
import Language from "./Language";
import SocialIcon from "./SocialIcon";

const TopBar = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-2 h-[80px] items-center px-2 sm:px-3">
        <div>
          <Logo />
        </div>
        <div className="flex justify-between items-center text-[#707070] font-karla">
          <ISOCertified />
          <SocialIcon />
          <Language />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
