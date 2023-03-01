import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./app/features/counter/counterSlice";
import { changeTheme } from "./app/features/theme/themeSlice";

function App() {
  const dispatch = useDispatch();
  const { num, maxNum } = useSelector(({ counter }) => counter); // ** Object
  const { theme } = useSelector(({ theme }) => theme);

  const inCrementHandler = () => dispatch(increment());
  const deCrementHandler = () => dispatch(decrement());
  const toggleTheme = () => dispatch(changeTheme());

  // ** Action type => Slice Name + Action (Function)
  return (
    <div className="App">
      <h1>Redux Toolkit ✅❤😎</h1>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* <h3>Counter: {num}</h3>
      <button onClick={inCrementHandler}>Increment</button>
      <button onClick={deCrementHandler}>Decrement</button>
      <h3>Max Number: {maxNum}</h3> */}
    </div>
  );
}

export default App;
