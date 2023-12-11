import { FaStar } from "react-icons/fa6";
import Container from "../../../components/dynamic/Container/Container";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import icon from "../../../assets/icons/main/award.svg";

const Achievement = () => {
  return (
    <Container>
      <div className="flex lg:justify-between lg:flex-row flex-col items-start lg:gap-20 gap-10">
        <div className="lg:w-[45%] lg:px-10 w-full">
          <ImageBoxWithPlayButton className="h-[500px] w-full relative rounded-md" />
        </div>

        <div className="lg:w-[55%] lg:px-10 w-full grid">
          <h2 className="text-primary font-bold text-2xl mb-5">
            We Have Several Achievement In Engineering Sector
          </h2>
          <p className="lg:mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            ipsum iusto vitae eius inventore tempora eaque cumque voluptatibus
            dicta dolores.
          </p>

          <div className="bg-secondary rounded-md w-full p-10 flex justify-between sm:flex-row flex-col items-start lg:mt-20 mt-10 gap-3">
            <div>
              <span className="flex gap-2 items-center text-primary text-lg font-bold mb-5">
                <img src={icon} className="h-[30px]" alt="" /> Award
              </span>
              <h4 className="text-primary font-bold text-xl mb-2">
                Best Company
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi, saepe.
              </p>
            </div>
            <div>
              <div className="flex gap-3 items-center sm:mb-5 mb-2">
                <span className="flex gap-2 items-center text-[#ECBE26]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span>(5020 Reviews)</span>
              </div>
              <h4 className="text-primary font-bold text-xl mb-2">
                High Rating reviews
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Achievement;
