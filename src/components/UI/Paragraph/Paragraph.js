const Paragraph = (props) => {
  return (
    <p
      style={{
        color: "#303030",
        fontSize: "1.6rem",
        lineHeight: "1.7",
      }}
    >
      {props.text}
    </p>
  );
};

export default Paragraph;
