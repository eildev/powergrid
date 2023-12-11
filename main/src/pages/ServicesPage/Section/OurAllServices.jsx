import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { cardData } from "../../../data/cardData";
import Button from "../../../element/Button";
import Card from "../../../element/Card";
import Header from "../../../element/Header";

const OurAllServices = () => {
  return (
    <Container bgColor="bg-secondary">
      <SectionHeader
        sectionHeaderContainerClassNames="text-center mb-10"
        sectionHeaderParagraphClassName=""
        title="Our all Services"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
        headerDescription={true}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      <div className="flex sm:justify-between justify-center items-center mt-10">
        <Header className="text-md font-bold capitalize hidden sm:block">
          our more services
        </Header>
        <p className="hidden lg:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <Button title="View All" className="bg-primary text-white" />
      </div>
    </Container>
  );
};

export default OurAllServices;
