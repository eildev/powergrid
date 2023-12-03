import image from "../../../assets/img/banner/bannerimg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";

// import { EffectCreative } from 'swiper/modules';

const Slider = () => {
  return (
    <section className="min-h-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h2 className="text-[101px] text-[#fff]">Power Grid</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h2 className="text-[101px] text-[#fff]">Power Grid</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <h2 className="lg:text-[101px] md:text-3xl text-2xl text-[#fff]">
              Power Grid
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
