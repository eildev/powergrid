import Container from "../../../components/dynamic/Container/Container";
import SisterConcernCard from "../../../components/dynamic/SisterConcernCard/SisterConcernCard";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { sisterConcernCardData } from "../../../data/sisterConcernCardData";

const OurSisterConcern = () => {
  return (
    <Container>
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

      <div className="grid  lg:grid-cols-3 md:grid-col-2 gap-10">
        {sisterConcernCardData.map((data) => (
          <SisterConcernCard key={data.id} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default OurSisterConcern;
