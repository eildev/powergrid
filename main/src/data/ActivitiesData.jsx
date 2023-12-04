import { MdOutlineTask } from "react-icons/md";
import { FaCheckToSlot, FaPeopleGroup } from "react-icons/fa6";

const ActivitiesData = [
  {
    id: 1,
    task: 70,
    name: "Completed Projects",
    icon: <MdOutlineTask />,
  },
  {
    id: 2,
    task: 10,
    name: "Active Projects",
    icon: <FaCheckToSlot />,
  },
  {
    id: 3,
    task: 50,
    name: "Employees",
    icon: <FaPeopleGroup />,
  },
];

export default ActivitiesData;
