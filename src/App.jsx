import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import AppLayout from "./layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Products />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
