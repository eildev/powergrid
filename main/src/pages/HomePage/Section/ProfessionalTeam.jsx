import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import Button from "../../../element/Button";

import ProfessionalCard from "../../../element/ProfessionalCard";

const ProfessionalTeam = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto">
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
      </div>
    </div>
  );
};

export default ProfessionalTeam;
