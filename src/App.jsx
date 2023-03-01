import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, toggleLoggedIn } from "./app/features/auth/authSlice";
import { selectCounter } from "./app/features/counter/counterSlice";
import { addToTotal, selectTotal } from "./app/features/total/totalSlice";

function App() {
  const dispatch = useDispatch();
  const { arr } = useSelector(selectTotal);

  const addToTotalHandler = e => dispatch(addToTotal(e.target.innerHTML));
  return (
    <div className="App">
      <h2>Total: {arr.length ? JSON.stringify(arr.map(i => i)) : JSON.stringify([])}</h2>
      <div className="grid-cells">
        {Array.from({ length: 20 }, (_, idx) => (
          <div className="cell" onClick={addToTotalHandler} key={idx}>
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
