import ImageBox from "../components/dynamic/ImageBox/ImageBox";
import PlayButton from "../components/dynamic/PlayButton/PlayButton";
import cn from "../lib/cn";

const ImageBoxWithPlayButton = ({ className }) => {
  return (
    <ImageBox className={cn("relative", className)}>
      <PlayButton />
    </ImageBox>
  );
};

export default ImageBoxWithPlayButton;
