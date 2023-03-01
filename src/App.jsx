import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, toggleLoggedIn } from "./app/features/auth/authSlice";
import { selectCounter } from "./app/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { num } = useSelector(selectCounter);
  const { isLoggedIn } = useSelector(selectAuth);

  const toggleLoggedInHandler = () => dispatch(toggleLoggedIn());

  // ** Action type => Slice Name + Action (Function)
  return (
    <div className="App">
      <h1>Redux Toolkit ✅❤😎</h1>
      <h1>{isLoggedIn ? "Welcome back" : "Please, sign in"}</h1>
      <button onClick={toggleLoggedInHandler}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default App;
