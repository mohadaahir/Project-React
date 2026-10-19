// Attempting to use a variable to manage state
const Counter = () => {
  let count = 0;

  const increment = () => {
    count += 1;
    console.log(count);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
};
export default Counter
// This will not work as expected—the displayed count won't update.
