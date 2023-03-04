import { useDispatch } from "react-redux";
import { addToCart } from "../app/features/cart/cartSlice";

const Product = ({ product }) => {
  const { id, title, thumbnail } = product;

  const dispatch = useDispatch();

  const addToCartHandler = () => dispatch(addToCart(product));

  return (
    <div className="flex flex-col items-center border-2 border-indigo-600  rounded-md p-5  text-sm">
      <p className="mb-1 text-sm">
        <span className="font-semibold">ID: {id}</span>
      </p>
      <p className="mb-1 text-sm">
        <span className="font-semibold">Title: {title}</span>
      </p>
      <img src={thumbnail} alt="" className="w-32 h-32 rounded-full " />
      <button
        type="button"
        className="mt-5 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
        onClick={addToCartHandler}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
