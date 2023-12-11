import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Container from "../../../components/dynamic/Container/Container";

const AllNewsPagination = () => {
  return (
    <Container>
      <div className="text-center text-xl flex sm:justify-normal items-center sm:w-[300px] w-full mx-auto gap-5 justify-between">
        <span className="flex items-center gap-2 cursor-pointer">
          <FaAngleLeft />
          Prev
        </span>
        <span className=" cursor-pointer">1</span>
        <span className="text-primary cursor-pointer">2</span>
        <span className=" cursor-pointer">3</span>
        <span className="flex items-center gap-2 text-primary cursor-pointer">
          Next
          <FaAngleRight />
        </span>
      </div>
    </Container>
  );
};

export default AllNewsPagination;
