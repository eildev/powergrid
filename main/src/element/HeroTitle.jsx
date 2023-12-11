import SectionHeader from "../components/shared/SectionHeader/SectionHeader";
import cn from "../lib/cn";

const HeroTitle = ({
  title,
  description1,
  description2,
  borderBottom,
  headerDescription,
  sectionHeaderContainerClassNames,
  description1ClassName,
  description2ClassName,
  sectionHeaderHeadingClassNames,
}) => {
  return (
    <div>
      <SectionHeader
        borderBottom={borderBottom}
        headerDescription={headerDescription}
        title={title}
        sectionHeaderContainerClassNames={sectionHeaderContainerClassNames}
        sectionHeaderHeadingClassNames={sectionHeaderHeadingClassNames}
      />
      <p className={cn("text-[#2D2C2C] leading-8", description1ClassName)}>
        {description1}
      </p>
      <p className={cn("text-[#2D2C2C] leading-8", description2ClassName)}>
        {description2}
      </p>
    </div>
  );
};

export default HeroTitle;
