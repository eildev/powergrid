import Container from "../../../components/dynamic/Container/Container";
import ServicesCard from "../../../components/dynamic/ServiceCard/ServicesCard";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { servicesCardData } from "../../../data/servicesCardData";
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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {servicesCardData.map((data) => (
          <ServicesCard key={data.id} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default OurServices;
