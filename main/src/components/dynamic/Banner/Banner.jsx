const Banner = ({ bannerTitle, bannerImage, bannerText }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerImage})` }}
      className={`min-h-[60vh] flex justify-center items-center bg-no-repeat bg-cover bg-center`}
    >
      <div className="text-center w-1/2  text-white mx-auto">
        <h2 className="font-bold font-karla text-5xl mb-2">{bannerTitle}</h2>
        <p>{bannerText}</p>
      </div>
    </div>
  );
};

export default Banner;
