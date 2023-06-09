import BodyLarge from "../BodyLarge/BodyLarge";

const CustomButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundColor: "#303030",
        color: "#fff",
        border: "none",
        padding: "1.2rem 2rem",
        borderRadius: "0.8rem",
        cursor: "pointer",
      }}
    >
      <BodyLarge text={props.text} color={"#ffff"} />
    </button>
  );
};

export default CustomButton;
