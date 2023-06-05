const H3 = (props) => {
  return (
    <h3
      style={{
        color: `${props.color || "#303030"}`,
        fontSize: "4.8rem",
        lineHeight: "1.2",
        fontWeight: "500",
      }}
    >
      {props.text}
    </h3>
  );
};

export default H3;
