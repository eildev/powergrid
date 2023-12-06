import Container from "../../../components/dynamic/Container/Container";
import ServicesCard from "../../../components/dynamic/ServiceCard/ServicesCard";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import Button from "../../../element/Button";

const OurServices = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mb-10">
        <SectionHeader
          title="Our Services"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[500px]"
          headerDescription={true}
        />
        <div>
          <Button title="more" className="text-body bg-primary" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-10 gap-10">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </Container>
  );
};

export default OurServices;
