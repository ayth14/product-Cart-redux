import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { FaSort } from "react-icons/fa";
import { RiCloseFill, RiDeleteBin5Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "@store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.cart);

  const handleQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="mx-6">
      <h3 className="text-2xl">Cart</h3>

      <table className="table-auto w-full text-left">
        <thead>
          <th colSpan={2} className="flex items-center">
            Product
            <FaSort />
          </th>
          <th>Price</th>
          <th>Category</th>
          <th>Action</th>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} id={product.id}>
              <td className="flex items-center">
                <div className="bg-slate-100 py-2 w-20 h-20 flex justify-center">
                  <img src={product.image} alt="" />
                </div>
                <span className="font-semibold pl-3">{product.title}</span>
              </td>
              <td>
                <span className="lg:text-sm text-xs font-bold">
                  {"CHF"} {product.price}
                </span>
              </td>
              <td>
                <span className="lg:text-sm text-xs font-medium">
                  {product.category}
                </span>
              </td>
              <td>
                <CustomButton>
                  <RiDeleteBin5Line size={16} onClick={handleQuantity} />
                  <span>{quantity}</span>
                  <IoMdAdd size={16} />
                </CustomButton>
              </td>
              <td>
                <RiCloseFill
                  className="cursor-pointer"
                  onClick={() => {
                    handleRemove(product.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CustomButton = tw.button`
flex
items-center
justify-between
w-full
bg-white
shadow-cartBtn
rounded-[30px]
font-bold
`;

export default Cart;
