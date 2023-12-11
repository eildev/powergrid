import Container from "../../../components/dynamic/Container/Container";
import Header from "../../../element/Header";
import InputForm from "../../../element/InputForm";
import { contactsData } from "../../../data/contactsData";
import ContactElement from "../../../element/ContactElement";

const GetInTouch = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <Header className="text-3xl mb-5">Get In Touch</Header>
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            officia sequi quibusdam quo, atque necessitatibus.
          </p>
          <div className="grid gap-5">
            {contactsData.map((data) => (
              <ContactElement key={data.id} data={data} />
            ))}
          </div>
        </div>

        <div>
          <InputForm />
        </div>
      </div>
    </Container>
  );
};

export default GetInTouch;
