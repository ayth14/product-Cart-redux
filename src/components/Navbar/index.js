import React from "react";
import tw from 'tailwind-styled-components'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const item = useSelector((state) => state.cart);

  return (
    <nav className="bg-green-400 text-white font-semibold h-10 flex items-center justify-between">
      <span className="px-4 text-3xl">Redux Store</span>

      <div className="flex items-center">
        <Link to={"/"} className="px-4">
          Home
        </Link>

        <Link to={"/cart"} className="px-4 relative flex">
          <FiShoppingCart size={18} />
          <BadgeVal>{item.length}</BadgeVal>
        </Link>
      </div>
    </nav>
  );
};

const BadgeVal = tw.p`
flex
items-center
justify-center
text-[10px]
bg-black
text-white
rounded-full
w-4
h-4
absolute
right-2
-top-2
`

export default Navbar;
