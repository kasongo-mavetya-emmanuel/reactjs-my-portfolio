const BodySmall = (props) => {
  return (
    <p
      style={{
        color: "#303030",
        fontSize: "1.4rem",
        lineHeight: "1.6",
      }}
    >
      {props.text}
    </p>
  );
};

export default BodySmall;
