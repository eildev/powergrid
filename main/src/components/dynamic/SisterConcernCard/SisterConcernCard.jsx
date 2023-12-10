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
        <h4 className="text-primary text-2xl font-bold mb-3">{title}</h4>
        <p className="leading-7 mb-7">{description}</p>
        <Button title="Visit here" className="bg-primary text-body" />
      </div>
    </div>
  );
};

export default SisterConcernCard;
