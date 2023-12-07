import Button from "./Button";
import Header from "./Header";
import NewsDate from "./NewsDate";

const AllNewsCard = () => {
  return (
    <div className="rounded bg-white">
      <div className="h-[200px] bg-gray rounded"></div>
      <div className="p-5">
        <NewsDate />
        <Header className="text-lg my-4">Head Line Latest News</Header>
        <Button
          title="Read more"
          className="bg-primary text-white font-medium"
        />
      </div>
    </div>
  );
};

export default AllNewsCard;
