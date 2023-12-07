import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { AiTwotoneLike } from "react-icons/ai";
import Button from "../../../element/Button";
import { FaEye } from "react-icons/fa6";

// image import
import image1 from "../../../assets/img/about/about1.png";
import image2 from "../../../assets/img/about/about3.png";
import PlayButton from "../../../components/dynamic/PlayButton/PlayButton";
import IconStatus from "../../../element/IconStatus";
import NewsDate from "../../../element/NewsDate";

const LatestNews = () => {
  return (
    <Container bgColor="bg-secondary">
      <SectionHeader
        sectionHeaderContainerClassNames="text-center mb-10"
        sectionHeaderHeadingClassNames=""
        sectionHeaderSpanClassName="bg-primary mx-auto my-3"
        sectionHeaderParagraphClassName=""
        title="Latest News"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
        borderBottom={true}
        headerDescription={true}
      />

      <div className="flex justify-between items-start gap-5 ">
        <div className="h-[450px] w-[45%] relative">
          <div className="relative h-[70%]">
            <img
              className="rounded w-full h-full object-cover relative"
              src={image1}
              alt=""
            />
            <PlayButton />
            <IconStatus>
              <span className="flex items-center gap-1">
                <FaEye /> 200298
              </span>

              <span className="flex items-center gap-1">
                <AiTwotoneLike /> 2020
              </span>
            </IconStatus>
          </div>
          <div className="grid items-center grid-cols-3 gap-3 my-3 h-[30%]">
            <div>
              <div className="mb-2 h-[80%]">
                <img
                  className=" w-full h-full rounded object-cover"
                  src={image1}
                  alt=""
                />
              </div>
              <div className="h-[20%]">
                <Button
                  className="bg-primary text-white text-[12px]"
                  title="view all"
                />
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="h-full w-full rounded object-cover"
                src={image1}
                alt=""
              />
            </div>
            <div className="h-full w-full">
              <img
                className="h-full w-full rounded object-cover"
                src={image1}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[55%] flex justify-between items-start gap-5 h-[430px] overflow-hidden">
          <div className="">
            <div className="w-full h-[70%]">
              <img
                className="w-full h-full object-cover rounded"
                src={image2}
                alt=""
              />
            </div>

            <NewsDate />
            <div>
              <h3 className="my-3 text-2xl font-bold text-primary capitalize">
                Head line latest news
              </h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, recusandae!
              </p>
            </div>
          </div>

          <div className="min-h-[450px] overflow-hidden">
            <div className="w-full">
              <img className="w-full rounded" src={image2} alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LatestNews;
