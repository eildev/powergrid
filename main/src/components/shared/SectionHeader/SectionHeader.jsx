import cn from "../../../lib/cn";

const SectionHeader = ({
  sectionHeaderContainerClassNames,
  sectionHeaderHeadingClassNames,
  sectionHeaderSpanClassName,
  sectionHeaderParagraphClassName,
  title,
  description,
  borderBottom,
  headerDescription,
}) => {
  return (
    <div className={cn("my-5", sectionHeaderContainerClassNames)}>
      <h2
        className={cn(
          "md:text-3xl text-xl font-bold text-[#1FBEF9] capitalize font font-karla drop-shadow",
          sectionHeaderHeadingClassNames
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          borderBottom ? "h-[2px] w-[200px] bg-gray" : "hidden",
          sectionHeaderSpanClassName
        )}
      ></div>

      <p
        className={cn(
          headerDescription ? "" : "hidden",
          sectionHeaderParagraphClassName
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
