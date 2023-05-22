function Container(props) {
  return (
    <div
      style={{
        maxWidth: "114",
        margin: "0 auto",
      }}
    >
      {props.children}
    </div>
  );
}

export default Container;
