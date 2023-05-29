import "aos/dist/aos.css";

const H2 = (props) => {
  return (
    <h2
      data-aos="fade-right"
      style={{
        color: `${props.color || "rgba(0, 0, 0, 0.1)"}`,
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
