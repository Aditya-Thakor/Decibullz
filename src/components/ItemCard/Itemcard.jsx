// import { CartContext } from "../../Contexts/CartContext";
import CartContext from "/src/Contexts/CartContext";
import { useContext } from "react";
import { React } from "react";
import { useEffect, useState } from "react";

export default function ItemCard({itmImg , title, price,offer, btnWorking,product}) {
//
  const [products,setProducts] = useState([]);
  // const [carted,setCarted] = useState([]);
  //const [cart,setCart]=useState(0);
  //const {cart,addToCart} = React.useContext(require("../../Contexts/CartContext").de);
  const {addToCart} = useContext(CartContext)
  // useEffect(()=>{
  //   fetch('http://localhost:5000/productdata')
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setProducts(data)
  //   })
  //   .catch((error)=>console.log('error at cartting',error)
  //   )
  // },{products})

  // console.log(cart? console.log(cart): 'empty cart' );
  

  // HANDLE CART 🛒
  // const handleCart = () =>{
  //  var crt = localStorage.getItem("cartItem");
  //  console.log(crt);
  //  if(crt==null)
  //  {
  //   setCart(1);
  //   localStorage.setItem("cartItem",cart)
  //  }
  //  else{
  //   setCart(cart+1);
  //   localStorage.setItem("cartItem",cart);
  //   //alert(crt.length);
  //  }
   
  //}
  // const testCart = (p) => {
  //   console.log(p)
  // }

  return (
    // remover width of below div (w-1/4)
    <div className="h-full w-full border-0 drop-shadow-lg rounded-lg overflow-hidden bg-white m-1">
      <div className=" w-full px-4 md:p-4">
        <div className="h-30 sm:h-40 w-full flex justify-center">
          <img src={itmImg} alt="p1" className="w-full h-full object-contain" />
        </div>
        <div className="mt-3 font-bold text-xs sm:text-xl">{title}</div>
        <div className="text-gray-700 text-base">
          {/* ${price} */}
          {offer==0? 
           <span className=" text-sm sm:text-xl">${price}</span>
          :
          <div className="flex items-center gap-2">
            <span className="line-through text-sm sm:text-xl">${price} </span>
            <span className="font-semibold text-sm sm:text-xl"> ${offer} </span>
            </div>
          
          }
        </div>
      </div>

      <div className="flex flex-col sm:justify-between sm:flex-row gap-1 sm:gap-5 p-4 text-white text-center bg-transparent  ">
        <button
          className="bg-gray-900  rounded-none font-semibold px-1 py-1 sm:px-4 sm:py-2 hover:bg-gray-700"
          onClick={()=>addToCart(product)}
        >
          + Add to Cart
        </button>
        <button className="  bg-orange-600 hover:bg-orange-500 rounded-none font-bold px-2 py-2  lg:px-4 lg:py-2 flex items-center gap-2  "
          onClick={()=>{
             btnWorking? alert("buy item now!"): alert('is not working!')
          }}
        >
          <i className="ri-shopping-cart-line text-sm sm:text-2xl"></i> Buy Now!
        </button>
      </div>

    </div>
  );
}
