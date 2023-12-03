import Hero from "../../components/dynamic/Hero/Hero";
import Slider from "../../components/dynamic/Slider/Slider";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="bg-[#E2F3FB]">
        <div className="container mx-auto py-20">
          <Hero
            title="About our company"
            width={70}
            width2={30}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam expedita nulla totam, sit odit magni sequi hic quasi, vero rerum dicta esse. Neque, dolore!"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
