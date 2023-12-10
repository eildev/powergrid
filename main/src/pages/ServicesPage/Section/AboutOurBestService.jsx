import Container from "../../../components/dynamic/Container/Container";
import Header from "../../../element/Header";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import Statistic from "../../../element/Statistic";

const AboutOurBestService = () => {
  return (
    <Container bgColor="bg-secondary my-10">
      <div className="flex lg:justify-between flex-col lg:flex-row gap-5 items-center  lg:gap-10">
        <div className="w-[50%]">
          <Header className="pb-10 mb-5 border-b border-primary">
            About Our Best Services
          </Header>

          <p className="leading-8 pb-10 mb-5 border-b border-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut
            eligendi quaerat laborum aperiam, et esse amet at pariatur doloribus
            quas maiores libero assumenda illum? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Sed, repudiandae! Ullam, repellat
            ducimus. Optio, eaque?
          </p>
          <Statistic />
        </div>
        <div className="w-[50%]">
          <ImageBoxWithPlayButton className="rounded-md h-[500px] w-full" />
        </div>
      </div>
    </Container>
  );
};

export default AboutOurBestService;
