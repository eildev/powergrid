import Container from "../../../components/dynamic/Container/Container";
import AllNewsCard from "../../../element/AllNewsCard";

const AllNews = () => {
  return (
    <Container bgColor="bg-secondary">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5">
        <AllNewsCard />
        <AllNewsCard />
        <AllNewsCard />
        <AllNewsCard />
        <AllNewsCard />
        <AllNewsCard />
      </div>
    </Container>
  );
};

export default AllNews;
