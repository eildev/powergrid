import { FaAward, FaStar } from "react-icons/fa6";
import Container from "../../../components/dynamic/Container/Container";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";

const Achievement = () => {
  return (
    <Container>
      <div className="flex justify-between items-start gap-20">
        <div className="w-[45%] px-10">
          <ImageBoxWithPlayButton className="h-[500px] w-full relative rounded-md" />
        </div>

        <div className="w-[55%] px-10 grid">
          <h2 className="text-primary font-bold text-2xl mb-5">
            We Have Several Achievement In Engineering Sector
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            ipsum iusto vitae eius inventore tempora eaque cumque voluptatibus
            dicta dolores.
          </p>

          <div className="bg-secondary rounded-md w-full p-10 flex justify-between items-start mt-32">
            <div>
              <span className="flex gap-2 items-center text-primary text-lg font-bold mb-5">
                <FaAward /> Award
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
              <div className="flex gap-3 items-center mb-5">
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
