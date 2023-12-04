import OurAbilities from "../../../components/dynamic/OurAbilities/OurAbilities";
import Quote from "../../../components/dynamic/Quote/Quote";

const GetAQuote = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid gap-10 grid-cols-2">
          <div>
            <Quote />
          </div>
          <div>
            <OurAbilities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
