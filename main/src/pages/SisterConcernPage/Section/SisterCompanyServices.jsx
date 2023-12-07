import Container from "../../../components/dynamic/Container/Container";
import Button from "../../../element/Button";
import CompanyServicesElement from "../../../element/CompanyServicesElement";
import Header from "../../../element/Header";

const SisterCompanyServices = () => {
  return (
    <Container bgColor="bg-secondary">
      <Header className="text-gray text-3xl mb-10">Company Name Here</Header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
        <CompanyServicesElement />
        <CompanyServicesElement />
        <CompanyServicesElement />
        <CompanyServicesElement />
        <CompanyServicesElement />
        <Button title="View all" className="bg-primary text-white text-xl" />
      </div>
    </Container>
  );
};

export default SisterCompanyServices;
