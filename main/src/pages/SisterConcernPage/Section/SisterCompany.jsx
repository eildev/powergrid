import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import SisterCompanyDetails from "../../../element/SisterCompanyDetails";

const SisterCompany = ({ title, companyDetails, detailsExtra }) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="lg:pr-20">
          <ImageBox className="lg:h-[500px] md:h-[300px] w-full rounded-lg" />
        </div>
        <div className="">
          <SisterCompanyDetails
            title={title}
            companyDetails={companyDetails}
            detailsExtra={detailsExtra}
          />
        </div>
      </div>
    </Container>
  );
};

export default SisterCompany;
