import "aos/dist/aos.css";

const Paragraph = (props) => {
  return (
    <p
      data-aos="fade-right"
      data-aos-delay="200"
      style={{
        color: "#303030",
        fontSize: "1.6rem",
        lineHeight: "1.7",
      }}
    >
      {props.children}
    </p>
  );
};

export default Paragraph;
