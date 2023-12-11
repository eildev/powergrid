import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Button from "../../../element/Button";

const GallerySection = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-3">
        <div className="col-span-2">
          <ImageBox className="w-full lg:h-[400px] md:h-[300px]"></ImageBox>
        </div>
        <div>
          <ImageBox className="w-full lg:h-[400px] md:h-[300px]"></ImageBox>
        </div>
        <div>
          <ImageBox className="w-full lg:h-[400px] md:h-[300px]"></ImageBox>
        </div>
        <div className="hidden sm:block">
          <ImageBox className="w-full lg:h-[400px] md:h-[300px]"></ImageBox>
        </div>
        <div className="hidden sm:block">
          <ImageBox className="w-full lg:h-[400px] md:h-[300px]"></ImageBox>
        </div>
        <div className="hidden lg:block">
          <ImageBox className="w-full lg:h-[400px] md:h-[300px]"></ImageBox>
        </div>
        <div className="col-span-2 hidden lg:block">
          <ImageBox className="w-full lg:h-[400px] md:h-[300px]"></ImageBox>
        </div>
      </div>

      <div className="mt-5 text-center sm:hidden">
        <Button title="View all" className="bg-primary text-white"></Button>
      </div>
    </Container>
  );
};

export default GallerySection;
