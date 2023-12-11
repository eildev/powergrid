import Hero from "../../components/dynamic/Hero/Hero";
import Slider from "../../components/dynamic/Slider/Slider";

import Activities from "./Section/Activities";
import WhyChooseUs from "./Section/WhyChooseUs";
import MessageFormChairman from "./Section/MessageFormChairman";
import OurServices from "./Section/OurServices";
import OurSisterConcern from "./Section/OurSisterConcern";
import ProfessionalTeam from "./Section/ProfessionalTeam";
import Gallery from "./Section/Gallery";
import GetAQuote from "./Section/GetAQuote";
import LatestNews from "./Section/LatestNews";
import Clients from "./Section/Clients";
import Container from "../../components/dynamic/Container/Container";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Container>
        <Hero
          title="About our company"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
          description2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis, architecto cupiditate delectus eum sunt, tempora voluptas illo molestias perferendis accusantium? !"
        />
      </Container>
      <div className="block sm:hidden lg:block">
        <Activities />
      </div>
      <WhyChooseUs />
      <div className="hidden lg:hidden sm:block">
        <Activities />
      </div>
      <MessageFormChairman />
      <OurServices />
      <OurSisterConcern />
      <div className="hidden sm:block">
        <ProfessionalTeam />
      </div>
      <Gallery />
      <div className="hidden lg:hidden sm:block">
        <LatestNews />
      </div>
      <GetAQuote />
      <div className="block sm:hidden lg:block">
        <LatestNews />
      </div>
      <Clients />
    </>
  );
};

export default HomePage;
