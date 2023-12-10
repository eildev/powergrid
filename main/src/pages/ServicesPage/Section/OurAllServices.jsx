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

      <div className="grid grid-cols-3 gap-10">
        {cardData.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-10">
        <Header className="text-md font-bold capitalize">
          our more services
        </Header>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

        <Button title="View All" className="bg-primary text-white" />
      </div>
    </Container>
  );
};

export default OurAllServices;
