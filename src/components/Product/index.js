import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, STATUSES } from "@store/productSlice";
import { RiseLoader } from "react-spinners";
import Card from "@components/Card";

const Product = () => {
  const dispatch = useDispatch();
  
  const {data : products , status} = useSelector(state => state.products)

  const [activeId, setActiveId] = useState();
  

  const handleClick = (productId) => {
    setActiveId(productId)
  }
  
  useEffect(() => {  
    dispatch(fetchProducts())
    // const fetchProducts = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");

    //   const data = await response.json();

    //   setProducts(data);
    // };
    // fetchProducts();
    
}, []);
  

  if(status === STATUSES.LOADING){
    return (
      <div className="flex items-center justify-center">
      <RiseLoader color="rgb(239 39 40)"/>
      </div>
    )
  }

  if(status === STATUSES.ERROR){
    return (
      <span className="text-4xl text-red-600 flex items-center justify-center">{"Something went Wrong!"}</span>
    )
  }
  return (
    <div className="grid grid-cols-4 gap-7 m-7">
      {products.map((product) => (
        <div key={product.id}>
        <Card
          id={product.id}
          className={'bg-red'}
          product = {product}
          productImg = {product.image}
          productName = {product.title}
          price = {product.price}
          addable = {true}
          isId = {activeId}
          onClick={() => handleClick(product.id)}
          />
        </div>
      ))}
    </div>
  );
};


export default Product;
