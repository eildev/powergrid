import cn from "../../../lib/cn";

const Container = ({ children, bgColor }) => {
  return (
    <div className={cn(bgColor, "py-24")}>
      <div className="container mx-auto md:px-10 px-5">{children}</div>
    </div>
  );
};

export default Container;
