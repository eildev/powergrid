import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { AiTwotoneLike } from "react-icons/ai";
import Button from "../../../element/Button";
import { FaEye } from "react-icons/fa6";

import IconStatus from "../../../element/IconStatus";
import NewsDate from "../../../element/NewsDate";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";

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

      <div className="flex lg:justify-between flex-col lg:flex-row items-start gap-5 ">
        <div className="h-[450px] lg:w-[45%] w-full relative">
          <div className="relative h-[70%]">
            <ImageBoxWithPlayButton className="w-full h-full relative">
              <IconStatus>
                <span className="flex items-center gap-1 text-lg">
                  <FaEye /> 200298
                </span>

                <span className="flex items-center gap-1 text-lg ">
                  <AiTwotoneLike /> 2020
                </span>
              </IconStatus>
            </ImageBoxWithPlayButton>
          </div>
          <div className="grid items-center grid-cols-3 gap-3 my-3 h-[30%]">
            <div>
              <div className="mb-2 h-[80%]">
                <ImageBox className="w-full h-[100px]"></ImageBox>
              </div>
              <div className="h-[20%]">
                <Button
                  className="bg-primary text-white text-[12px]"
                  title="view all"
                />
              </div>
            </div>
            <div className="h-full w-full">
              <ImageBox className="w-full h-full"></ImageBox>
            </div>
            <div className="h-full w-full">
              <ImageBox className="w-full h-full"></ImageBox>
            </div>
          </div>
        </div>
        <div className="w-[55%] flex lg:justify-between flex-col lg:flex-row items-start gap-5 h-[430px]">
          <div className="lg:w-1/2 w-full h-full">
            <div className="w-full h-[70%]">
              <ImageBox className="w-full h-full"></ImageBox>
            </div>

            <div className="px-5">
              <NewsDate />
              <h3 className="my-3 text-2xl font-bold text-primary capitalize">
                Head line latest news
              </h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, recusandae!
              </p>
            </div>
          </div>

          <div className=" lg:w-1/2 w-full h-full">
            <h3 className="mb-3 text-2xl font-bold text-primary capitalize">
              Head line latest news
            </h3>
            <div className="w-full h-[70%]">
              <ImageBox className="w-full h-full"></ImageBox>
            </div>
            <div className="px-5">
              <NewsDate />

              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, recusandae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LatestNews;
