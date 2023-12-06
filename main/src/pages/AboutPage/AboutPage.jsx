import Banner from "../../components/dynamic/Banner/Banner";

import bannerImage from "../../assets/img/banner/bannerimg.png";
import Container from "../../components/dynamic/Container/Container";
import Hero from "../../components/dynamic/Hero/Hero";

import image1 from "../../assets/img/about/about1.png";
import image2 from "../../assets/img/about/about2.png";
import image3 from "../../assets/img/about/about3.png";
import OurVision from "./Section/OurVision";
import OurMission from "./Section/OurMission";
import CompanyHistory from "./Section/CompanyHistory";
import Achievement from "./Section/Achievement";

const AboutPage = () => {
  return (
    <div>
      <Banner
        bannerTitle="About Us"
        bannerImage={bannerImage}
        bannerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      />
      <Container>
        <Hero
          title="About our company"
          width={50}
          width2={50}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
          description2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
          img1={image1}
          img2={image2}
          img3={image3}
        />
      </Container>
      <OurVision />
      <OurMission />
      <CompanyHistory />
      <Achievement />
    </div>
  );
};

export default AboutPage;
