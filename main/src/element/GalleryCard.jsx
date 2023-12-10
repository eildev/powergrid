const GalleryCard = ({ data }) => {
  const { img, title } = data;
  return (
    <div className=" place-self-center">
      <div className="mb-2">
        <img src={img} className="rounded" alt="" />
      </div>
      <div>
        <h2 className="font-titillium font-bold text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default GalleryCard;
