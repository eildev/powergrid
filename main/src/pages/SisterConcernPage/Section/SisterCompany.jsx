import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import SisterCompanyDetails from "../../../element/SisterCompanyDetails";

const SisterCompany = ({ title, companyDetails }) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="pr-20">
          <ImageBox className="h-[500px] w-full rounded-lg" />
        </div>
        <div className="">
          <SisterCompanyDetails title={title} companyDetails={companyDetails} />
        </div>
      </div>
    </Container>
  );
};

export default SisterCompany;
