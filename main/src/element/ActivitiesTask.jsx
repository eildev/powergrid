// import { MdOutlineTask } from "react-icons/md";

const ActivitiesTask = ({ tasks }) => {
  const { task, icon, name } = tasks;
  return (
    <div className="relative place-self-center w-[250px] pt-8 pb-5 bg-body text-center">
      <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 h-14 bg-body w-14 rounded-full border grid border-[#E2F3FB] shadow-sm">
        <span className="place-self-center text-primary  text-2xl">{icon}</span>
      </div>
      <h3 className="text-3xl text-primary">{task}+</h3>
      <p>{name}</p>
    </div>
  );
};

export default ActivitiesTask;
