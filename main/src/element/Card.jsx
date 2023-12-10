import Button from "./Button";

const Card = ({ data }) => {
  const { icon, title, description } = data;
  return (
    <div className="border-2 border-primary p-7 rounded-md">
      <div className="h-[150px] bg-primary w-full rounded-md flex justify-center items-center mb-5">
        <span className="text-white">
          <img src={icon} className="h-[80px]" alt="" />
        </span>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-5">{title}</h4>
        <p className="mb-5">{description}</p>
        <Button title="Learn More" className="bg-primary text-white" />
      </div>
    </div>
  );
};

export default Card;
