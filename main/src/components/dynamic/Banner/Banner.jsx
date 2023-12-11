const Banner = ({ bannerTitle, bannerImage, bannerText }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className={`min-h-[60vh] flex justify-center items-center bg-no-repeat bg-cover bg-center`}
    >
      <div className="text-center md:w-1/2 w-full text-white mx-auto">
        <h2 className="font-bold font-karla lg:text-5xl md:text-3xl text-2xl mb-2">
          {bannerTitle}
        </h2>
        <p>{bannerText}</p>
      </div>
    </div>
  );
};

export default Banner;
