import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Accordion = ({ title, description }) => {
  const [accordionActive, setAccordionActive] = useState(false);
  return (
    <div className="w-full border-b border-primary py-5">
      <button
        onClick={() => setAccordionActive(!accordionActive)}
        className="flex justify-between items-center w-full mb-5"
      >
        <span
          className={`text-xl font-bold  ${
            accordionActive ? "text-primary" : ""
          }`}
        >
          {title}
        </span>
        {accordionActive ? (
          <span
            className={`text-xl font-bold  ${
              accordionActive ? "text-primary" : ""
            }`}
          >
            <FaChevronUp />
          </span>
        ) : (
          <span
            className={`text-xl font-bold  ${
              accordionActive ? "text-primary" : ""
            }`}
          >
            <FaChevronDown />
          </span>
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out
      ${accordionActive ? "block mb-5" : "hidden"}
      `}
      >
        <div className="transition-all duration-300 ease-in-out">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
