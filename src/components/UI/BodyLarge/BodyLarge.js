const BodyLarge = (props) => {
  return (
    <p
      style={{
        color: `${props.color || "#303030"}`,
        fontSize: "1.8rem",
        lineHeight: "1.4",
        fontWeight: "400",
      }}
    >
      {props.text}
    </p>
  );
};

export default BodyLarge;
