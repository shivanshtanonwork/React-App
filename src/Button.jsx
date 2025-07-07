function handleOnClick(event) {
  console.log(event);
  console.log("Hello");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleOnClick}>Click me</button>
    </div>
  );
}
