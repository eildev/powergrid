import Container from "../../../components/dynamic/Container/Container";
import OurAbilities from "../../../components/dynamic/OurAbilities/OurAbilities";
import Quote from "../../../components/dynamic/Quote/Quote";

const GetAQuote = () => {
  return (
    <Container bgColor="bg-white">
      <div className="grid md:gap-20 md:grid-cols-2 gap-5">
        <div>
          <Quote />
        </div>
        <div>
          <OurAbilities />
        </div>
      </div>
    </Container>
  );
};

export default GetAQuote;
