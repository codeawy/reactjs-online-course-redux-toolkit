import Product from "../components/Product";
import { getProductList, selectProducts } from "../app/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      <div className="m-10 grid grid-cols-grid-layout gap-4">
        {data?.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
