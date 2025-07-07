function handleFormSubmit(event) {
  console.log("Form Submitted");
  console.log(event);
  event.preventDefault();
}

export default function Forms() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="write something" />
      <button>Submit</button>
    </form>
  );
}
