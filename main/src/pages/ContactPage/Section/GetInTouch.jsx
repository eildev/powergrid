import { FaLocationDot } from "react-icons/fa6";
import Container from "../../../components/dynamic/Container/Container";
import Header from "../../../element/Header";
import InputForm from "../../../element/InputForm";

const GetInTouch = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <Header className="text-3xl mb-5">Get In Touch</Header>
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            officia sequi quibusdam quo, atque necessitatibus.
          </p>
          <div className="grid gap-5">
            <div className="flex items-center gap-3">
              <span className="text-primary rounded border-2 text-xl p-3">
                <FaLocationDot />
              </span>
              <p className="text-xl">
                House 00, 2nd Floor, Road 00, Block 0, Florida, USA
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary rounded border-2 text-xl p-3">
                <FaLocationDot />
              </span>
              <p className="text-xl">
                House 00, 2nd Floor, Road 00, Block 0, Florida, USA
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-primary rounded border-2 text-xl p-3">
                <FaLocationDot />
              </span>
              <p className="text-xl">
                House 00, 2nd Floor, Road 00, Block 0, Florida, USA
              </p>
            </div>
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
