import { useContext, useEffect, useState } from "react";
import Navbar from "/src/components/Navbar/Navbar";
import { ChevronLeft, LockKeyhole, Minus, Plus } from "lucide-react";
import CartContext from "/src/Contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  // const [cartItem,setCartItem] = useState([]);
  // const [newCartItm, setNewCartItm]= useState([]);


  const navlink = useNavigate();

  const { cartdata,updateCart,removeCart, getTotal } = useContext(CartContext);
  // console.log(cartdata);
  // setCartItem(cartdata)
  
  // useEffect(()=>{
  //     fetch('http://localhost:5000/productdata')
  //     .then((res)=>res.json())
  //     .then((data)=>{
  //         // setCartItem(data)
  //         if(data.length>=4){
  //            let list = data.slice(0,3)
  //             setCartItem(list)
  //         }
  //     })
  //     .catch((err)=>{
  //         console.log('error at fetching the product data - ' , err);
  //     })
  // },[])

  // if(cartItem.length>=4){
  //     const newCart = cartItem.slice(0,3);
  //     setNewCartItm(newCart);
  // }

  // console.log(cartItem);

  let subTotal =0;
    console.log("total",cartdata);
    for (let i = 0; i < cartdata.length; i++) {
      let price = Number(cartdata[i].productPrice * cartdata[i].qty) 
      subTotal = Math.floor(
        (price + subTotal) *100
        // Number(cartdata[i].productPrice * cartdata[i].qty  ) + subTotal 
      )/100
    }
    
  const pd = (itm)=>{
      let finalPrice = itm.productPrice * itm.qty ;
      let p= Math.floor( finalPrice * 100)/100
    // setpdTotal(p)
    return p
  }

  

  return (
    <div className="h-screen">
      {/* <Navbar bg={false} /> */}
      <div className="inline-block cursor-pointer ms-10">
        <span 
          className="font-bold flex items-center hover:text-orange-500/95 hover:underline" 
          onClick={()=>navlink('/')}
        > <ChevronLeft /> Back</span>
      </div>
      <div className="h-full mt-36 mx-12">
        {/* Main text */}
        <div className="h-1/5 text-[#1a1a1a] flex flex-col justify-around items-center">
          <h1 className="text-4xl font-bold">Cart</h1>
          <span className="font-normal">
            You are eligible for free shipping.
          </span>
          <div className="w-96 h-1 rounded bg-[#1a1a1a]"></div>
        </div>

        {/* Cart/checkout  */}
        <div className="h-4/5 flex gap-7">
          {/* cart */}
          <div className="h-full  w-2/3   ">
            {" "}
            {/* add overflow-y-scroll when needed*/}
            <table className="w-full text-left">
              <thead>
                <tr className="border-b" style={{ height: "80px" }}>
                  <th className="w-3/5">Product</th>
                  <th className="w-2/5">Quantity</th>
                  <th className="w-1/12">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartdata?.map((itm) => (
                  <tr key={itm._id} className="">
                    <td className="">
                      <div className="h-full w-full flex gap-5">
                        <div className="h-full  ">
                          <img
                            className="h-32 w-32"
                            src={
                              "http://localhost:5000/productImages/" + itm.image
                            }
                            alt="productImage"
                          />
                        </div>
                        <div className="h-full w-3/5 flex flex-col gap-2">
                          <span className="font-bold text-[#1a1a1a] hover:underline ">
                            {itm.productName}
                          </span>
                          <span className="text-gray-500">
                            ${itm.productPrice}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-gray-500 flex flex-col">
                      <div className="flex w-1/4 h-full gap-3 justify-center item-center">
                       {/* - */}
                        <span
                          className="hover:text-red-600 cursor-pointer"
                          onClick={()=>updateCart(itm._id,itm.qty-1)} // decrease qty
                        >
                          {" "}
                          <Minus />{" "}
                        </span>
                        {/* qty */}
                        <span className="text-xl">{itm.qty}</span>
                        {/* + */}
                        <span
                          className="hover:text-green-600 cursor-pointer"
                          onClick={()=>updateCart(itm._id,itm.qty+1)} // increase qty 
                        >
                          {" "}
                          <Plus />{" "}
                        </span>
                      </div>
                      <span 
                        className="text-xs underline cursor-pointer mt-4 ms-6 hover:text-slate-950 hover:font-semibold "
                        onClick={()=>removeCart(itm._id)} // removing the carted item
                        >
                        Remove
                      </span>
                    </td>
                    <td className="text-gray-500 text-lg">
                      {/* ${itm.productPrice * itm.qty} */}
                      ${pd(itm)}
                    </td>
                  </tr>
                ))}

                {/* <tr className="h-32 border" >
                            <td>Product-1</td>
                            <td>1</td>
                            <td>$99.99</td>
                        </tr> */}
              </tbody>
            </table>
          </div>
          {/* checkout */}
          <div className="h-full w-1/3 flex flex-col gap-3 border p-10">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>${subTotal} </span>
            </div>
            <div className="text-2xl font-bold flex justify-between  ">
              <span>Total</span>
              <span>${getTotal()} USD</span>
            </div>
            <button 
              className="bg-slate-950 p-5 text-white flex justify-center items-center gap-2 text-xl hover:bg-orange-600 hover:font-bold  "
              onClick={()=>cartdata.length>0? navlink('/checkout'): alert('add some item in cart')}
            >
              <LockKeyhole />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
