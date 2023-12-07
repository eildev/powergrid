import Container from "../../../components/dynamic/Container/Container";
import GalleryCard from "../../../element/GalleryCard";
import Header from "../../../element/Header";

const RecentCompletedWork = () => {
  return (
    <Container>
      <Header className="text-3xl mb-10">Recent Completed Work</Header>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </Container>
  );
};

export default RecentCompletedWork;
