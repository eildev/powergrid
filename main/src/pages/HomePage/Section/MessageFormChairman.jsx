import HeroTitle from "../../../element/HeroTitle";
// import userImage from "../../../assets/img/user/user2.jpg";
import Button from "../../../element/Button";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";

const MessageFormChairman = () => {
  return (
    <div className="bg-secondary md:my-24 my-10">
      <div className="container mx-auto md:px-10 px-5">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="py-10 me-10">
            <HeroTitle
              title="message from The chairman"
              sectionHeaderHeadingClassNames="text-white md:text-primary"
              description1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        quam expedita nulla totam, sit odit magni sequi hic quasi, vero
        rerum dicta esse. Neque, dolore! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aperiam, nobis, architecto
        cupiditate delectus eum sunt, tempora voluptas illo molestias
        perferendis accusantium? ! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt quam expedita nulla totam, sit odit
        magni sequi hic quasi, vero rerum dicta esse. Neque, dolore! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis,
        architecto cupiditate delectus eum sunt, tempora voluptas illo
        molestias perferendis accusantium? !"
            />
            <div className="mt-7 hidden lg:block">
              <Button title="more" className="bg-body text-primary italic" />
            </div>
          </div>
          <div className="lg:min-h-[550px] h-[550px] pb-20 md:overflow-hidden">
            <ImageBox className="h-full w-full"></ImageBox>
            <div className="mt-7 lg:hidden block text-center">
              <Button title="more" className="bg-primary text-white italic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageFormChairman;
