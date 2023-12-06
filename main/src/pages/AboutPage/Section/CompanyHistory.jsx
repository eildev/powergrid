import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";

const CompanyHistory = () => {
  return (
    <Container bgColor="bg-secondary">
      <SectionHeader
        borderBottom={true}
        title={"Our Company History"}
        sectionHeaderContainerClassNames={"text-center mb-10"}
        sectionHeaderSpanClassName={"mx-auto my-3 w-[150px]"}
      />

      <div className="text-center">
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
          ducimus dignissimos. Doloremque omnis, culpa quae blanditiis at hic
          nam velit et impedit nostrum laudantium sunt itaque maxime accusantium
          recusandae ut atque, aliquam amet id voluptatem sint perspiciatis.
          Natus, suscipit omnis.
        </p>

        <br />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa
          omnis beatae ratione, illum accusamus non voluptatem, distinctio
          recusandae dignissimos blanditiis dolor libero fugiat voluptas eos qui
          eum tempore quos.
        </p>
      </div>
    </Container>
  );
};

export default CompanyHistory;
