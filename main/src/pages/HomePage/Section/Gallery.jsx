import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import Button from "../../../element/Button";
import GalleryCard from "../../../element/GalleryCard";

const Gallery = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto">
        <div className="mb-5">
          <SectionHeader
            sectionHeaderContainerClassNames="text-center"
            sectionHeaderHeadingClassNames="mb-2"
            sectionHeaderParagraphClassName="max-w-[500px] mx-auto"
            title="Gallery"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
            headerDescription={true}
            sectionHeaderSpanClassName="w-[100px] mx-auto bg-primary mb-2"
            borderBottom={true}
          />
        </div>

        <div className="flex justify-center items-center gap-10 mb-5">
          <Button
            title="Solar"
            className="bg-transparent text-primary border border-primary"
          />
          <Button
            title="Energy"
            className="bg-transparent  border border-primary"
          />
          <Button
            title="power plant"
            className="bg-transparent  border border-primary"
          />
          <Button
            title="All"
            className="bg-transparent  border border-primary"
          />
        </div>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
