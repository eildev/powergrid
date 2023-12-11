import Button from "../../../element/Button";
import ImageBox from "../ImageBox/ImageBox";

const SmallHero = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center md:gap-10 lg:w-1/2 gap-5 w-full">
      <ImageBox />
      <div>
        <h2 className="text-primary text-xl font-bold mb-5">{title}</h2>
        <p className="mb-5">{description}</p>
        <Button title="Read More" className="bg-primary text-white" />
      </div>
    </div>
  );
};

export default SmallHero;
