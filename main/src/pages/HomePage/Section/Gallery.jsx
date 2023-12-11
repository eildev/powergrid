import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { galleryCardData } from "../../../data/galleryCardData";
import Button from "../../../element/Button";
import GalleryCard from "../../../element/GalleryCard";

const Gallery = () => {
  return (
    <Container>
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

      <div className="sm:flex sm:justify-center items-center sm:gap-10 mb-10 gap-3 grid grid-cols-2">
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
        <Button title="All" className="bg-transparent  border border-primary" />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10  gap-5">
        {galleryCardData.map((data) => (
          <GalleryCard data={data} key={data.id} />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
