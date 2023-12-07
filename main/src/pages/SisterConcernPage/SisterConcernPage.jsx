import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/bannerimg.png";
import SisterCompany from "./Section/SisterCompany";
import SisterCompanyServices from "./Section/SisterCompanyServices";
import SisterCompany2 from "./Section/SisterCompany2";

const SisterConcernPage = () => {
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi."
        bannerTitle="Sister Concern"
      />
      <SisterCompany />
      <SisterCompanyServices />
      <SisterCompany2 />
      <SisterCompanyServices />
      <SisterCompany />
      <SisterCompanyServices />
    </>
  );
};

export default SisterConcernPage;
