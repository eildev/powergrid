import { MdOutlineTask } from "react-icons/md";

const Activities = () => {
  return (
    <div className="py-32 bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 ">
          <div className="relative place-self-center px-20 py-10 bg-body">
            <div className="h-10 w-10 rounded-full border grid ">
              <span className="place-self-center text-primary">
                <MdOutlineTask />
              </span>
            </div>
            <h3>70+</h3>
            <p>Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
