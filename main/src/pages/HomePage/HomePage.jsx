import Hero from "../../components/dynamic/Hero/Hero";
import Slider from "../../components/dynamic/Slider/Slider";

import about1 from "../../assets/img/about/about1.png";
import about2 from "../../assets/img/about/about2.png";
import about3 from "../../assets/img/about/about3.png";
import Activities from "./Section/Activities";
import WhyChooseUs from "./Section/WhyChooseUs";
import MessageFormChairman from "./Section/MessageFormChairman";
import OurServices from "./Section/OurServices";
import OurSisterConcern from "./Section/OurSisterConcern";
import ProfessionalTeam from "./Section/ProfessionalTeam";
import Gallery from "./Section/Gallery";
import GetAQuote from "./Section/GetAQuote";

const HomePage = () => {
  return (
    <>
      <Slider />
      <div className="py-32">
        <div className="container mx-auto">
          <Hero
            title="About our company"
            width={50}
            width2={50}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
            description2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
            img1={about1}
            img2={about2}
            img3={about3}
          />
        </div>
      </div>
      <Activities />
      <WhyChooseUs />
      <MessageFormChairman />
      <OurServices />
      <OurSisterConcern />
      <ProfessionalTeam />
      <Gallery />
      <GetAQuote />
    </>
  );
};

export default HomePage;
