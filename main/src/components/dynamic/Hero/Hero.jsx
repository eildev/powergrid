const Hero = ({
  title,
  width,
  width2,
  description,
  img1,
  img2,
  img3,
  description2,
}) => {
  return (
    <div className="grid grid-cols-2 items-center flex-col md:flex-row ">
      <div className={`w-[${width}%]`}>
        <h2 className="text-5xl font-bold text-[#1FBEF9] capitalize font font-karla drop-shadow mb-7">
          {title}
        </h2>
        <p className="text-[#2D2C2C] leading-8">{description}</p>
        <p className="text-[#2D2C2C] leading-8">{description2}</p>
      </div>
      <div className={`w-[${width2}%]`}>
        <div className="flex justify-center items-center gap-3">
          <div className="grid gap-3">
            <img className=" h-[180px]" src={img1} alt="" />
            <img className=" h-[180px]" src={img2} alt="" />
          </div>
          <img src={img3} className=" h-[370px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
