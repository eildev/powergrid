import cn from "../lib/cn";

const Button = ({ title, className }) => {
  return (
    <button
      className={cn(
        className,
        "px-7 py-2 font-bold uppercase font-karla rounded"
      )}
    >
      {title}
    </button>
  );
};

export default Button;
