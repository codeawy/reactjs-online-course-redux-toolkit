import { removeFromCart, resetCart, selectCart } from "../app/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const { productsCart } = useSelector(selectCart);

  const removeFromCartHandler = e => dispatch(removeFromCart(e.target.id));
  const resetCartHandler = () => dispatch(resetCart());

  return (
    <div>
      <h3 className="text-3xl text-center my-10">Cart ({productsCart.length})</h3>
      {productsCart.length ? (
        <button
          type="button"
          className="block mx-auto mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          onClick={resetCartHandler}
        >
          Reset
        </button>
      ) : null}

      <div className="m-10 grid grid-cols-grid-layout gap-4">
        {productsCart.map(({ id, thumbnail, title, quantity }) => (
          <div
            key={id}
            className="flex flex-col items-center border-2 border-indigo-600  rounded-md p-5  text-sm"
          >
            <p className="mb-1 text-sm">
              <span className="font-semibold">ID: {id}</span>
            </p>
            <p className="mb-1 text-sm">
              <span className="font-semibold">Title: {title}</span>
            </p>
            <p className="mb-1 text-sm">
              <span className="font-semibold">Quantity: {quantity}</span>
            </p>
            <img src={thumbnail} alt="" className="w-32 h-32 rounded-full " />
            <button
              type="button"
              className="mt-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
              id={id}
              onClick={removeFromCartHandler}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
