import { FaCheck } from "react-icons/fa6";
import Container from "../../../components/dynamic/Container/Container";
import SmallHero from "../../../components/dynamic/SmallHero/SmallHero";

const OurMission = () => {
  return (
    <Container>
      <div className="flex justify-between items-center  gap-40">
        <div className="md:w-1/2 w-full">
          <h2 className="text-primary font-bold text-xl mb-5 flex items-center gap-5">
            <span className="bg-primary text-white p-3 text-xl rounded-full ">
              <FaCheck />
            </span>
            Qualified IT Experts
          </h2>
          <div className="flex justify-between items-center mt-10">
            <div>
              <span className="text-primary font-bold text-3xl">10k++</span>
              <p>Subscriber</p>
            </div>
            <div>
              <span className="text-primary font-bold text-3xl">10k++</span>
              <p>Subscriber</p>
            </div>
            <div>
              <span className="text-primary font-bold text-3xl">10k++</span>
              <p>Subscriber</p>
            </div>
          </div>
        </div>
        <SmallHero
          title="Our Vision"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Provident, nisi."
        />
      </div>
    </Container>
  );
};

export default OurMission;
