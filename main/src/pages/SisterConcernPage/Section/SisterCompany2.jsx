import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Container from "../../../components/dynamic/Container/Container";
import SisterCompanyDetails from "../../../element/SisterCompanyDetails";

const SisterCompany2 = ({ title, companyDetails, detailsExtra }) => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="">
          <SisterCompanyDetails
            title={title}
            companyDetails={companyDetails}
            detailsExtra={detailsExtra}
          />
        </div>
        <div className="lg:pl-20">
          <ImageBox className="lg:h-[500px] md:h-[300px] w-full rounded-lg" />
        </div>
      </div>
    </Container>
  );
};

export default SisterCompany2;
