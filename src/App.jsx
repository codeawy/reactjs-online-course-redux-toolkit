import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./app/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { num, maxNum } = useSelector(({ counter }) => counter); // ** Object

  const inCrementHandler = () => dispatch(increment());
  const deCrementHandler = () => dispatch(decrement());

  // ** Action type => Slice Name + Action (Function)
  return (
    <div className="App">
      <h1>Redux Toolkit ✅❤😎</h1>
      <h3>Counter: {num}</h3>
      <button onClick={inCrementHandler}>Increment</button>
      <button onClick={deCrementHandler}>Decrement</button>
      <h3>Max Number: {maxNum}</h3>
    </div>
  );
}

export default App;
