import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/bannerimg.png";
import BenefitsWithOurService from "./Section/BenefitsWithOurService";
const ServicesPage = () => {
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi."
        bannerTitle="Our Services"
      />
      <BenefitsWithOurService />
    </>
  );
};

export default ServicesPage;
