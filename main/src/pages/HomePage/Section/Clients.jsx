import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import ClientsCard from "../../../element/ClientsCard";

const Clients = () => {
  return (
    <Container bgColor="bg-secondary my-10">
      <SectionHeader
        sectionHeaderContainerClassNames="text-center mb-10"
        sectionHeaderHeadingClassNames="text-white drop-shadow-md"
        sectionHeaderSpanClassName="bg-primary mx-auto my-3"
        sectionHeaderParagraphClassName=""
        title="Clients Feedbacks"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
        borderBottom={true}
        headerDescription={true}
      />

      <div className="lg:px-24  py-20 bg-white rounded">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper relative pb-20"
        >
          <SwiperSlide>
            <ClientsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsCard />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
    </Container>
  );
};

export default Clients;
