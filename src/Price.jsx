export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  return (
    <div>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={{ fontWeight: "bold", color: "hotpink" }}>{newPrice}</span>
    </div>
  );
}
