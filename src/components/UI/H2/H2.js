const H2 = (props) => {
  return (
    <h2
      style={{
        color: `${props.color || "rgba(0, 0, 0, 0.18)"}`,
        fontSize: `${props.fontSize || "9.6rem"}`,
        lineHeight: "1.1",
        fontWeight: "500",
      }}
    >
      {props.text}
    </h2>
  );
};

export default H2;
