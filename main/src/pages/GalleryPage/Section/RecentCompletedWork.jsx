import Container from "../../../components/dynamic/Container/Container";
import { galleryCardData } from "../../../data/galleryCardData";
import Button from "../../../element/Button";
import GalleryCard from "../../../element/GalleryCard";
import Header from "../../../element/Header";

const RecentCompletedWork = () => {
  return (
    <Container>
      <Header className="text-3xl mb-10">Recent Completed Work</Header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10  gap-5">
        {galleryCardData.map((data) => (
          <GalleryCard data={data} key={data.id} />
        ))}
      </div>
      <div className="mt-5 text-center sm:hidden">
        <Button title="View all" className="bg-primary text-white"></Button>
      </div>
    </Container>
  );
};

export default RecentCompletedWork;
