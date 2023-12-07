import AccordionExample from "../../../components/dynamic/AccordionExample/AccordionExample";
import Container from "../../../components/dynamic/Container/Container";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";

const BenefitsWithOurService = () => {
  return (
    <Container>
      <div className="flex justify-between items-center gap-10">
        <div className="w-[40%]">
          <ImageBoxWithPlayButton className="border-[20px] rounded-md h-[500px] w-full border-[#fff]" />
        </div>
        <div className="w-[60%] px-10">
          <h2 className="font-bold text-primary text-3xl mb-20">
            Benefits With Our Service
          </h2>
          <AccordionExample />
        </div>
      </div>
    </Container>
  );
};

export default BenefitsWithOurService;
