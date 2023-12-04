import ActivitiesData from "../../../data/ActivitiesData";
import ActivitiesTask from "../../../element/ActivitiesTask";

const Activities = () => {
  return (
    <div className=" py-28 bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 font-karla">
          {ActivitiesData.map((tasks) => (
            <ActivitiesTask key={tasks.id} tasks={tasks} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
