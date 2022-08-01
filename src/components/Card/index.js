import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "@store/cartSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import tw from "tailwind-styled-components";
const Card = (props) => {

    const {productImg, productName, price, product , addable, isId, id , iconName, title, bottomLabel, ...rest} = props;
    const dispatch = useDispatch()
    console.log(isId , 'act');
    const handleAdd = (product) => {
        setBtnClick(!btnClick)
        dispatch(add(product))
      }
    const [btnClick, setBtnClick] = useState(false) 
    
  return (
    <CardContainer {...rest}>
      <Img src={productImg} alt="" />
      <CardBody>
        <h4>{productName}</h4>
        <p>
          {"CHF"} {price}
        </p>
      </CardBody>
      <CustomButton onClick={() => handleAdd(product)} $isOn = {isId === id && btnClick}>
        {addable ? (isId === id && btnClick ? <RiDeleteBin5Line/> : <IoMdAdd/>) : iconName}
        <Basic>
          <span>{addable ? (isId === id && btnClick ? "1" : "Add") : title}</span> 
        </Basic>
        <HoverText>
          {addable ? (isId === id && btnClick ? <IoMdAdd/> : "to cart") : bottomLabel}
        </HoverText>
      </CustomButton>
    </CardContainer>
  );
};

const CardContainer = tw.div`
border 
border-transparent 
shadow-lg 
rounded-md 
text-center 
w-full 
h-full
relative
`;

const Img = tw.img`
flex 
mb-5
mx-auto 
object-contain 
w-[40%] 
h-[40%] 
`;

const CardBody = tw.div`
mb-3 
text-center 
text-base 
font-semibold 
`;

const CustomButton = tw.button`
${(p) => (p.$isOn ? 'w-full justify-between' : '')}
group
bg-white
shadow-cartBtn 
rounded-[30px]
font-bold 
text-color456 
p-3
flex
items-center
`;

const Basic = tw.span`
flex
items-center
justify-between
lg:text-[14px]
md:text-sm
text-xs
font-[montserrat]
font-semibold
`;

const HoverText = tw.span`
flex
lg:text-[14px]
md:text-sm
text-xs
font-semibold 
pl-[2px]
overflow-hidden 
ease-in-out 
duration-[0.8s] 
tracking-[-2em] 
group-hover:tracking-[0em]
`;
export default Card;
