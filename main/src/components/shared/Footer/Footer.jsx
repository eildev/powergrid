import Logo from "../Navbar/Logo";
import { BsFillPlayFill } from "react-icons/bs";
import SocialIcon from "../TopBar/SocialIcon";
import FooterHeading from "./FooterHeading";

const services = [
  {
    id: 1,
    title: "operation & Maintenance",
  },
  {
    id: 2,
    title: "Renewable Energy",
  },
  {
    id: 3,
    title: "Energy Efficiency",
  },
  {
    id: 4,
    title: "Logistic Services",
  },
  {
    id: 5,
    title: "Engineering Consulting",
  },
  {
    id: 6,
    title: "Supply/Trading",
  },
];

const contacts = [
  {
    id: 1,
    title: "+7792 - 088277",
  },
  {
    id: 2,
    title: "example@example.com",
  },
  {
    id: 3,
    title: "New York, USA",
  },
];

const Footer = () => {
  return (
    <footer className=" border-t-4 border-[#1FBEF9] ">
      <div className="container mx-auto md:px-10 px-5">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 items-start py-[50px]">
          <div>
            <Logo />
            <p className="text-[#707070] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              aperiam aspernatur autem, odit modi aut provident quis saepe sit,
              dolorum quia. Voluptatem,
            </p>
          </div>
          <div>
            <div className="mb-5">
              <FooterHeading heading={"Our Services"} />
            </div>
            <ul className="grid gap-2">
              {services.map((service) => (
                <li key={service.id} className="flex items-center gap-1">
                  <span className="text-[#1FBEF9] text-xl">
                    <BsFillPlayFill />
                  </span>{" "}
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-5">
              <FooterHeading heading={"Contact Us"} />
            </div>
            <ul className="grid gap-2">
              {contacts.map((contact) => (
                <li key={contact.id} className="flex items-center gap-1">
                  <span className="text-[#1FBEF9] text-xl">
                    <BsFillPlayFill />
                  </span>{" "}
                  {contact.title}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <SocialIcon />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <FooterHeading heading={"Get in Touch"} />
            </div>
            <div className="grid w-[200px] gap-3">
              <div className="border-2 border-[#1FBEF9] px-2 py-1 rounded-md">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="border-none outline-none bg-transparent "
                />
              </div>
              <div>
                <button className="px-12 py-2 rounded-md uppercase text-white text-semibold bg-[#1FBEF9]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
