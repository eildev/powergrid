import Button from "../../../element/Button";

const SmallHero = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center gap-10 md:w-1/2 w-full">
      <div className="h-[200px] w-[300px] rounded bg-gray"></div>
      <div>
        <h2 className="text-primary text-xl font-bold mb-5">{title}</h2>
        <p className="mb-5">{description}</p>
        <Button title="Read More" className="bg-primary text-white" />
      </div>
    </div>
  );
};

export default SmallHero;
