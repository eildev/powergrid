import image from "../assets/img/gallery/gallery.png";

const GalleryCard = () => {
  return (
    <div className=" place-self-center">
      <div className="mb-2">
        <img src={image} className="rounded" alt="" />
      </div>
      <div>
        <h2 className="font-titillium font-bold text-lg">Projects Name</h2>
      </div>
    </div>
  );
};

export default GalleryCard;
