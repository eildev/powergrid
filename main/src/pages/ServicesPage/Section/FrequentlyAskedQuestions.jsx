import Accordion from "../../../components/dynamic/Accordion/Accordion";
import Container from "../../../components/dynamic/Container/Container";
import Header from "../../../element/Header";

const FrequentlyAskedQuestions = () => {
  return (
    <Container>
      <Header className="text-center text-3xl">
        Frequently Asked Questions
      </Header>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nihil
        optio sed animi officia consequuntur.
      </p>
      <div className="text-center w-[300px] mx-auto mt-7 h-[2px] bg-primary"></div>

      <Accordion
        title="Questions Subject "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante. Sed vitae molestie mauris. Suspendisse rutrum enim nec turpis lacinia, sit amet volutpat mi hendrerit. Integer magna nibh, varius at dapibus in, elementum vel diam. Maecenas porttitor in turpis ac suscipit. Donec vel rutrum orci. Phasellus dapibus, mi vitae tincidunt pellentesque, lacus magna molestie felis, nec porta ex eros quis felis. "
      />
      <Accordion
        title="Questions Subject "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante. Sed vitae molestie mauris. Suspendisse rutrum enim nec turpis lacinia, sit amet volutpat mi hendrerit. Integer magna nibh, varius at dapibus in, elementum vel diam. Maecenas porttitor in turpis ac suscipit. Donec vel rutrum orci. Phasellus dapibus, mi vitae tincidunt pellentesque, lacus magna molestie felis, nec porta ex eros quis felis. "
      />
      <Accordion
        title="Questions Subject "
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec aliquet ante. Sed vitae molestie mauris. Suspendisse rutrum enim nec turpis lacinia, sit amet volutpat mi hendrerit. Integer magna nibh, varius at dapibus in, elementum vel diam. Maecenas porttitor in turpis ac suscipit. Donec vel rutrum orci. Phasellus dapibus, mi vitae tincidunt pellentesque, lacus magna molestie felis, nec porta ex eros quis felis. "
      />
    </Container>
  );
};

export default FrequentlyAskedQuestions;
