import facebookIcon from "../assets/icons/social/facebook-f-brands.svg";
import instagramIcon from "../assets/icons/social/instagram-brands.svg";
import twitterIcon from "../assets/icons/social/twitter-brands.svg";

const ProfessionalCard = ({ data }) => {
  const { img, name, designation, facebookLink, instagramLink, twitterLink } =
    data;
  return (
    <div className="max-w-[300px] p-10 rounded-t-full border-2 bg-white border-primary place-self-center">
      <div className="w-[220px] h-[220px] rounded-full flex justify-center items-center overflow-hidden mx-auto">
        <img src={img} className="h-full object-cover" alt="" />
      </div>
      <div className="text-center my-5">
        <h4 className="text-primary font-bold text-2xl mb-2">{name}</h4>
        <p className="">{designation}</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <a
          href={facebookLink}
          className="bg-primary text-white w-9 h-8 flex justify-center items-center rounded"
        >
          <img src={facebookIcon} alt="" />
        </a>
        <a
          href={instagramLink}
          className="bg-primary text-white w-9 h-8 flex justify-center items-center rounded"
        >
          <img src={instagramIcon} alt="" />
        </a>
        <a
          href={twitterLink}
          className="bg-primary text-white w-9 h-8 flex justify-center items-center rounded"
        >
          <img src={twitterIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ProfessionalCard;
