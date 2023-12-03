const Hero = ({ title, width, width2, description, img1, img2, img3 }) => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row">
      <div className={`w-[${width}%]`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={`w-[${width2}%]`}>
        <div>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
