import cn from "../../../lib/cn";

const ImageBox = ({ className, children }) => {
  return (
    <div className={cn("h-[200px] w-[300px] rounded bg-gray", className)}>
      {children}
    </div>
  );
};

export default ImageBox;
