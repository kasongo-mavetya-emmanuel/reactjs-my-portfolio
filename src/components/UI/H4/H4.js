const H4 = (props) => {
  return (
    <h4
      style={{
        color: "#303030",
        fontSize: "4rem",
        lineHeight: "1.2",
        fontWeight: "500",
        marginBottom: `${props.marginBottom || 0}`,
      }}
    >
      {props.text}
    </h4>
  );
};

export default H4;
