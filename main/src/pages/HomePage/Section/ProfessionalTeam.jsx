import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import Button from "../../../element/Button";

import ProfessionalCard from "../../../element/ProfessionalCard";

const ProfessionalTeam = () => {
  return (
    <Container>
      <div className="mb-14">
        <SectionHeader
          sectionHeaderContainerClassNames="text-center"
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[500px] mx-auto"
          title="Our Professional Team"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
          headerDescription={true}
        />
      </div>

      <div className="grid gap-5 grid-cols-3">
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
      </div>

      <div className="w-full mx-auto text-center mt-10">
        <Button title=" view All" className="bg-primary text-white italic" />
      </div>
    </Container>
  );
};

export default ProfessionalTeam;
