import Container from "../../../components/dynamic/Container/Container";
import { galleryCardData } from "../../../data/galleryCardData";
import GalleryCard from "../../../element/GalleryCard";
import Header from "../../../element/Header";

const RecentCompletedWork = () => {
  return (
    <Container>
      <Header className="text-3xl mb-10">Recent Completed Work</Header>
      <div className="grid lg:grid-cols-3 md:grid-col-2 md:gap-10  gap-5">
        {galleryCardData.map((data) => (
          <GalleryCard data={data} key={data.id} />
        ))}
      </div>
    </Container>
  );
};

export default RecentCompletedWork;
