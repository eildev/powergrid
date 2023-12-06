import cn from "../lib/cn";

const Button = ({ title, className }) => {
  return (
    <button
      className={cn(
        "px-7 py-2 font-bold text-sm uppercase font-karla rounded",
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
