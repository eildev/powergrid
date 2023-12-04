import SisterConcernCard from "../../../components/dynamic/SisterConcernCard/SisterConcernCard";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";

const OurSisterConcern = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto">
        <div>
          <SectionHeader
            sectionHeaderContainerClassNames="text-center mb-10"
            sectionHeaderHeadingClassNames="mb-4"
            sectionHeaderParagraphClassName="max-w-[500px] mx-auto"
            title="Our Sister Concerns"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
            headerDescription={true}
          />
        </div>

        <div className="grid  grid-cols-3 gap-10">
          <SisterConcernCard />
          <SisterConcernCard />
          <SisterConcernCard />
        </div>
      </div>
    </div>
  );
};

export default OurSisterConcern;
