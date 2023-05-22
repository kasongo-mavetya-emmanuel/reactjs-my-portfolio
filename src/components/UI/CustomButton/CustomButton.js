const CustomButton = (props) => {
  return (
    <button
      style={{
        backgroundColor: "#303030",
        color: "#fff",
      }}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
