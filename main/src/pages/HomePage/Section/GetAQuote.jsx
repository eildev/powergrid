import Container from "../../../components/dynamic/Container/Container";
import OurAbilities from "../../../components/dynamic/OurAbilities/OurAbilities";
import Quote from "../../../components/dynamic/Quote/Quote";

const GetAQuote = () => {
  return (
    <Container bgColor="bg-white">
      <div className="grid gap-10 grid-cols-2">
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
