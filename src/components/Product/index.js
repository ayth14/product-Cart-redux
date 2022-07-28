import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();



      setProducts(data);
    };
    fetchProducts();
}, []);



  return (
    <div className="grid grid-cols-4 gap-7 m-7">
      {products.map((product) => (
        <div className="border border-transparent shadow-lg rounded-md text-center w-full h-full" key={product.id}>
          <img src={product.image} alt="" className="flex mx-auto object-contain w-[40%] mb-5"/>
          <div className="mb-3 text-center text-base font-semibold  ">
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
          <button className="bg-green-400 shadow-lg rounded-lg font-bold text-white p-3">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
