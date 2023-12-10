const ContactElement = ({ data }) => {
  const { icon, details } = data;
  return (
    <div className="flex items-center gap-3">
      <span className="text-primary rounded border-2 text-xl p-3">
        <img src={icon} alt="" />
      </span>
      <p className="text-xl">{details}</p>
    </div>
  );
};

export default ContactElement;
