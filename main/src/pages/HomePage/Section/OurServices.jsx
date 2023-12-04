import ServicesCard from "../../../components/dynamic/ServiceCard/ServicesCard";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import Button from "../../../element/Button";

const OurServices = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto">
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

        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2  mt-5">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
