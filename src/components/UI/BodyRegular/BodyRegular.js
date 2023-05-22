const BodyRegular = (props) => {
  return (
    <p
      style={{
        color: "#303030",
        fontSize: "1.6rem",
        lineHeight: "1.5",
        fontWeight: "400",
      }}
    >
      {props.text}
    </p>
  );
};

export default BodyRegular;
