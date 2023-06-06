import BodyLarge from "../BodyLarge/BodyLarge";

const CustomOutlinedButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        border: "1px solid #303030",
        backgroundColor: "transparent",
        padding: "1.2rem 2rem",
        borderRadius: "0.8rem",
        cursor: "pointer",
      }}
    >
      <BodyLarge text={props.text} />
    </button>
  );
};

export default CustomOutlinedButton;
