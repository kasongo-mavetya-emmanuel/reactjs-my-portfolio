const H1 = (props) => {
  return (
    <h1
      style={{
        color: "#303030",
        fontSize: "6.4rem",
        lineHeight: "1.1",
        fontWeight: "bold",
      }}
    >
      {props.text}
    </h1>
  );
};

export default H1;
