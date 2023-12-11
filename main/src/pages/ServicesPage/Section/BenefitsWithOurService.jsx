import Accordion from "../../../components/dynamic/Accordion/Accordion";
import Container from "../../../components/dynamic/Container/Container";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";

const BenefitsWithOurService = () => {
  return (
    <Container>
      <div className="flex lg:justify-between lg:flex-row flex-col-reverse items-center gap-10">
        <div className="lg:w-[40%] w-full">
          <ImageBoxWithPlayButton className="border-[20px] rounded-md h-[500px] w-full border-[#fff]" />
        </div>
        <div className="lg:w-[60%] w-full lg:px-10">
          <h2 className="font-bold text-primary text-3xl lg:mb-20 mb-10">
            Benefits With Our Service
          </h2>
          <Accordion
            title="Our services details "
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus mattis urna nec convallis. Vestibulum at fermentum magna. Suspendisse pretium faucibus velit vitae iaculis. Ut enim neque"
          />
          <Accordion
            title="Service catalog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus mattis urna nec convallis. Vestibulum at fermentum magna. Suspendisse pretium faucibus velit vitae iaculis. Ut enim neque"
          />
          <Accordion
            title="Service catalog"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus mattis urna nec convallis. Vestibulum at fermentum magna. Suspendisse pretium faucibus velit vitae iaculis. Ut enim neque"
          />
        </div>
      </div>
    </Container>
  );
};

export default BenefitsWithOurService;
