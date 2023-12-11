import Container from "../../../components/dynamic/Container/Container";
import ActivitiesData from "../../../data/ActivitiesData";
import ActivitiesTask from "../../../element/ActivitiesTask";

const Activities = () => {
  return (
    <Container bgColor="bg-secondary">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14 font-karla">
        {ActivitiesData.map((tasks) => (
          <ActivitiesTask key={tasks.id} tasks={tasks} />
        ))}
      </div>
    </Container>
  );
};

export default Activities;
