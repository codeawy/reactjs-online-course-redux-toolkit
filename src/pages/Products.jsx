import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (() => {
      axios
        .get("https://dummyjson.com/products")
        .then(res => setProductsList(res.data.products))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    })();
  }, []);

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      <div className="m-10 grid grid-cols-grid-layout gap-4">
        {productsList.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
