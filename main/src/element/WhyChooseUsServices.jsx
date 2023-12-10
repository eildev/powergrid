const WhyChooseUsServices = ({ whyChooseUs }) => {
  const { icon, title, description } = whyChooseUs;
  return (
    <div className="flex gap-3">
      <span className="w-[80px] h-[80px] border-2 border-[#1FBEF9] rounded-sm text-primary text-2xl flex justify-center items-center">
        {icon}
      </span>
      <div>
        <h4 className="text-xl font-karla mb-2 capitalize">{title}</h4>
        <p className=" text-xs">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsServices;
