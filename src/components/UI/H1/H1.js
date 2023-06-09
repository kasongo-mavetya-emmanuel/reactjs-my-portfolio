import "aos/dist/aos.css";

const H1 = (props) => {
  return (
    <h1
      data-aos="fade-left"
      data-aos-delay="200"
      style={{
        color: "#303030",
        fontSize: "6.4rem",
        lineHeight: "1.1",
        fontWeight: "bold",
        marginBottom: `${props.marginBottom || 0}`,
      }}
    >
      {props.text}
    </h1>
  );
};

export default H1;
