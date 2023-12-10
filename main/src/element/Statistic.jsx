import cn from "../lib/cn";

const Statistic = ({ className }) => {
  return (
    <div className={cn("flex justify-between items-center mt-10", className)}>
      <div>
        <span className="text-primary font-bold text-3xl">10k++</span>
        <p>Subscriber</p>
      </div>
      <div>
        <span className="text-primary font-bold text-3xl">50++</span>
        <p>Client</p>
      </div>
      <div>
        <span className="text-primary font-bold text-3xl">98%</span>
        <p>Success</p>
      </div>
    </div>
  );
};

export default Statistic;
