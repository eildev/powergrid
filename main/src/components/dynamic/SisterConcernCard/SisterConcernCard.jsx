import Button from "../../../element/Button";

const SisterConcernCard = ({ data }) => {
  const { image, title, description } = data;
  return (
    <div className="bg-white border-2 border-primary rounded-sm">
      <div className="mb-2 grid">
        <div>
          <img src={image} className="w-full" alt="" />
        </div>
        <div className="grid gap-1 my-4">
          <div className="relative w-1/2 h-[2px] bg-primary mx-auto"></div>
          <div className="relative w-2/3 h-[2px] bg-primary mx-auto"></div>
          <div className="relative w-1/2 h-[2px] bg-primary mx-auto"></div>
        </div>
      </div>
      <div className="px-5 text-center pb-7">
        <h4 className="text-primary md:text-2xl text-lg font-bold mb-3">
          {title}
        </h4>
        <p className="leading-5 md:leading-6 md:mb-7 mb-4 text-xs md:text-sm">
          {description}
        </p>
        <Button title="Visit here" className="bg-primary text-body" />
      </div>
    </div>
  );
};

export default SisterConcernCard;
