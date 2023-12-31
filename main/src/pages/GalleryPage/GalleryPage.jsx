import Banner from "../../components/dynamic/Banner/Banner";
import image from "../../assets/img/banner/bannerimg.png";
import RecentCompletedWork from "./Section/RecentCompletedWork";
import GallerySection from "./Section/GallerySection";

const GalleryPage = () => {
  return (
    <>
      <Banner
        bannerImage={image}
        bannerText=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi.  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, nisi."
        bannerTitle="Gallery"
      />
      <GallerySection />
      <RecentCompletedWork />
    </>
  );
};

export default GalleryPage;
