function Container(props) {
  return (
    <div
      style={{
        maxWidth: "114rem",
        margin: "0 auto",
        height: props.height,
      }}
    >
      {props.children}
    </div>
  );
}

export default Container;
