import Button from "./Button";
import Header from "./Header";

const SisterCompanyDetails = ({ title, companyDetails }) => {
  return (
    <>
      <Header className="text-3xl mb-10">{title}</Header>
      <p className="mb-5 leading-8">{companyDetails}</p>
      <Button title="Visit Here" className="bg-primary text-white"></Button>
    </>
  );
};

export default SisterCompanyDetails;
