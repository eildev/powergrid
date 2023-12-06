import Container from "../../../components/dynamic/Container/Container";
import SmallHero from "../../../components/dynamic/SmallHero/SmallHero";

const OurVision = () => {
  return (
    <Container bgColor="bg-secondary">
      <div className="flex justify-between items-center  gap-40">
        <div className="md:w-1/2 w-full">
          <h2 className="text-primary font-bold text-2xl mb-5">
            We Have Been Certified & Trusted By More Than 50+ Clients
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            ipsum iusto vitae eius inventore tempora eaque cumque voluptatibus
            dicta dolores.
          </p>
        </div>
        <SmallHero
          title="Our Vision"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Provident, nisi."
        />
      </div>
    </Container>
  );
};

export default OurVision;
