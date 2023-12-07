import cn from "../lib/cn";

const Header = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "text-primary font-bold text-2xl my-3 font-karla",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Header;
