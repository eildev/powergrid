const Banner = ({ bannerTitle, height, bannerImage }) => {
  return (
    <div
      className={`min-h-[${height}%] flex justify-center items-center bg-no-repeat bg-cover bg-center bg-[url("${bannerImage}")]`}
    >
      <h2>{bannerTitle}</h2>
    </div>
  );
};

export default Banner;
