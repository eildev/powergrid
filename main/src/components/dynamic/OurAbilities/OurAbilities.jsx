import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import Tasks from "../../../element/Tasks";

const OurAbilities = () => {
  return (
    <div>
      <div>
        <SectionHeader
          sectionHeaderContainerClassNames="mb-10"
          sectionHeaderHeadingClassNames="mb-4"
          sectionHeaderParagraphClassName="max-w-[400px]"
          title="Our Abilities"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
          headerDescription={true}
        />
      </div>

      <div>
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </div>
  );
};

export default OurAbilities;
