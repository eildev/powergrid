const ServicesCard = ({ data }) => {
  const { img, icon, title, description } = data;
  return (
    <div className="w-full">
      <div className="w-full">
        <img src={img} className="w-full" alt="" />
      </div>
      <div>
        <div className="flex gap-3 mt-4 ">
          <span className="w-[80px] h-[70px] border-2 border-[#1FBEF9] rounded-sm text-primary text-2xl flex justify-center items-center p-3">
            <img src={icon} className="h-[40px] w-[50px]" alt="" />
          </span>
          <div>
            <h4 className="text-xl font-karla mb-2">{title}</h4>
            <p className=" text-xs max-w-[250px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
