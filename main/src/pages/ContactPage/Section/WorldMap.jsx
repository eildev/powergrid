import Container from "../../../components/dynamic/Container/Container";
import map from "../../../assets/img/map/map.png";

const WorldMap = () => {
  return (
    <Container bgColor="bg-white">
      <div className="w-full h-full">
        <img src={map} className="object-cover h-full" alt="" />
      </div>
    </Container>
  );
};

export default WorldMap;
