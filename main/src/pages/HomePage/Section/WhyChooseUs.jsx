import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { whyChooseUsData } from "../../../data/WhyChooseUsData";
import WhyChooseUsServices from "../../../element/WhyChooseUsServices";

const WhyChooseUs = () => {
  return (
    <Container>
      <SectionHeader
        borderBottom={true}
        headerDescription={true}
        title={"Why Choose Us"}
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        sectionHeaderContainerClassNames={"text-center mb-10"}
        sectionHeaderSpanClassName={"mx-auto my-3 w-[150px]"}
        sectionHeaderParagraphClassName={"mx-auto my-3 max-w-[560px]"}
      />
      <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2">
        {whyChooseUsData.map((whyChooseUs) => (
          <WhyChooseUsServices key={whyChooseUs.id} whyChooseUs={whyChooseUs} />
        ))}
      </div>
    </Container>
  );
};

export default WhyChooseUs;
