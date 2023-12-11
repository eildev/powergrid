import ImageBox from "../ImageBox/ImageBox";

const Hero = ({ title, description, description2 }) => {
  return (
    <div className="grid lg:grid-cols-2 items-center flex-col md:flex-row gap-10">
      <div>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-[#1FBEF9] capitalize font font-karla drop-shadow mb-7">
          {title}
        </h2>
        <p className="text-[#2D2C2C] leading-8">{description}</p>
        <p className="text-[#2D2C2C] leading-8">{description2}</p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <ImageBox className="h-[380px] w-full col-span-2 rounded sm:hidden block"></ImageBox>
        <ImageBox className=" h-[180px] w-full  rounded"></ImageBox>
        <ImageBox className="h-[380px] w-full row-span-2 rounded hidden sm:block"></ImageBox>
        <ImageBox className=" h-[180px] w-full rounded"></ImageBox>
      </div>
    </div>
  );
};

export default Hero;
