import { CircleQuestionMark, FileIcon, Focus, Search, Smartphone } from "lucide-react";
import Nav2 from "/src/components/Navbar/Nav2";
import { useContext, useState } from "react";

import cardImg from "/src/assets/images/index";
import Input from "/src/components/InputField/Input";
import CartContext from "/src/Contexts/CartContext";

export default function Checkout() {
  const [checked, setChecked] = useState(true);
  const [ischecked, setIsCheckeds] = useState(false);
  const [disCode,setDisCode]= useState(null);

  const { cartdata,getTotal } = useContext(CartContext);

  const pyCards = [cardImg.visa, cardImg.mastercard, cardImg.amex];

  const pdFinalPrice = (itm) => {
    let fp = itm.productPrice * itm.qty;
    return Math.floor(fp * 100) / 100;
  };


  const qtyCounter = () =>{
    let count = 0
    for (let i = 0; i < cartdata.length; i++) {
          count = cartdata[i].qty + count;            
    }
    return count;
  }

  // const getTotal = () => {
  //   let total=0;
  //   for(let i= 0; i < cartdata.length; i++){
  //     let price =Number(cartdata[i].productPrice*cartdata[i].qty) 
  //     total= Math.floor((price+total)*100)/100
  //   }
  //   // let grandTotal = Math.floor(Number(total)*100)/100
  //   return total
  // }

  return (
    <div className="h-screen" >
      <div className={` " h-auto "  `}>
        <Nav2 />
      </div>
      <div className=" h-full flex relative " >
        {/* CHECKOUT FORM */}
        <div className="h-full w-3/5 ps-44  pe-10 border-gray-300">
          {/* Payment Options */}
          <div className="flex flex-col items-center gap-3 pt-10 ">
            <span className="text-gray-600 text-sm">Express checkout</span>
            <div className="flex items-center gap-6">
              <div className="h-12 px-15 flex justify-center items-center text-center rounded-lg  bg-indigo-700/95 hover:bg-indigo-700 text-white font-bold text-lg ">
                <span>Shop</span>
              </div>

              <div className="h-12 px-15 flex justify-center items-center text-center rounded-lg  bg-yellow-400 hover:bg-yellow-500 text-white font-extrabold text-xl italic ">
                <span className="text-blue-900 ">Pay</span>
                <span className="text-sky-500">Pal</span>
              </div>

              <div className="h-12 px-15 flex justify-center items-center text-center rounded-lg bg-black text-white font-bold text-xl italic hover:bg-black/80 ">
                <span className="text-white">
                  <i className="ri-google-fill text-green-600"></i>Pay
                </span>
              </div>
            </div>
          </div>
          {/* OR line */}
          <div className="relative pt-10 pb-10">
            <span className="h-px w-full absolute bg-gray-300"></span>
            <span className="absolute top-1/3 left-1/2 text-gray-400 text-sm bg-white p-1">
              OR
            </span>
          </div>

          {/* Details Form */}
          <div className="h-full flex flex-col gap-5 ">
            {/* Contact */}
            <div className="flex flex-col gap-5">
              <label
                htmlFor="contact"
                className="flex justify-between items-center"
              >
                <span className="font-semibold text-2xl">Contact</span>
                <span className="text-sm text-blue-600 underline">Sign in</span>
              </label>
              <input
                type="text"
                placeholder="Email or mobile number"
                className="w-full text-sm  border border-gray-300 rounded-lg p-4"
              />
            </div>
            {/* Delivery */}
            <div className="flex flex-col gap-5">
              <label
                htmlFor="contact"
                className="flex justify-between items-center"
              >
                <span className="font-semibold text-2xl">Delivery</span>
              </label>
              <select
                name="country"
                id="country"
                className="w-full border border-gray-300 rounded-lg p-4"
              >
                <option value=""> Select Country</option>
                <option value="ind"> India</option>
                <option value="us"> United state</option>
                <option value="cn"> Canada</option>
                <option value="uk"> United Kingdom</option>
              </select>

              <div className="flex gap-3">
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 p-4 rounded-lg"
                  placeholder="First name "
                />
                <input
                  type="text"
                  className="w-1/2 border border-gray-300 p-4 rounded-lg"
                  placeholder="Last name "
                />
              </div>

              <div className="flex items-center relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-4 rounded-lg"
                  placeholder="Addresh"
                />
                <Search className="absolute text-gray-400 p-0.5 right-3" />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full border border-gray-300 p-4 rounded-lg"
                />
              </div>

              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="City"
                  className="w-1/3 border border-gray-300 p-4 rounded-lg"
                />
                <select
                  name="state"
                  id="state"
                  className="w-1/3 border border-gray-300 rounded-lg p-4"
                >
                  <option value="jk">state</option>
                  <option value="jk">Gujarat</option>
                  <option value="jk">J&K</option>
                  <option value="hp">HP</option>
                  <option value="pn">Panjab</option>
                  <option value="hr">Hariyana</option>
                  <option value="dl">Delli</option>
                  <option value="dl">Rajasthan</option>
                  <option value="dl">Maharastra</option>
                </select>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="w-1/3 border border-gray-300 rounded-lg p-4"
                />
              </div>
            </div>

            {/* Payment */}
            <div className="">
              <div className="flex flex-col gap-1 mb-3 ">
                <span className="font-semibold text-2xl">Payment</span>
                <span className="text-sm text-gray-500">
                  All transactions are secure and encrypted.
                </span>
              </div>
              <div className="bg-slate-100 border border-slate-400 px-3 rounded-lg shadow-lg ">
                <div className="flex items-center justify-between h-15 mb-2 ">
                  <div className="flex items-center  gap-2">
                    <span
                      className={` " h-6 w-6 border-2 border-gray-400 rounded-full rounded-circle flex justify-center items-center " ${
                        checked ? " bg-blue-600 " : ""
                      } `}
                      onClick={() =>
                        checked ? setChecked(false) : setChecked(true)
                      }
                    >
                      {" "}
                      <span className="h-2 w-2 rounded-full rounded-circle bg-gray-200"></span>
                    </span>
                    <span className="text-sm">Credit card</span>
                  </div>
                  {/* payment cards */}
                  <div className="flex gap-1">
                    {pyCards.map((itm) => (
                      <span className="h-7 bg-white border-2 border-slate-300 rounded p-0.5 ">
                        <img
                          src={itm}
                          alt="card-payment"
                          className="h-full object-fill"
                        />
                      </span>
                    ))}
                    <span className=" flex justify-center items-center px-2 text-blue-700 cursor-pointer h-7 bg-white border-2 border-slate-300 rounded p-0.5 ">
                      <span>+5</span>
                    </span>
                  </div>
                </div>
                <div className="h-60 flex flex-col gap-4">
                  <div>
                    <Input type="text" placeholder="Card Number" w="w-full" />
                  </div>
                  <div className="flex gap-3">
                    <Input
                      type="text"
                      placeholder="Expiration Date (MM/YY)"
                      w="w-1/2"
                    />
                    <Input type="text" placeholder="Security code" w="w-1/2" />
                  </div>
                  <div>
                    <Input type="text" placeholder="Name on Card" w="w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Remember me */}
            <div className="">
              <div>
                <span className="font-semibold text-2xl">Remember me</span>
              </div>

              <div className="flex  items-start flex-col gap-3 w-full border border-gray-400 bg-stone-100 rounded-lg mt-2">
                <div
                  className={`" flex gap-2  border-gray-500 bg-white rounded-t-lg py-4 px-2 w-full " ${
                    ischecked ? "border-b" : "rounded-b-lg"
                  } `}
                >
                  <Input
                    type="checkbox"
                    // checked={ischecked}
                    onClick={() =>
                      ischecked ? setIsCheckeds(false) : setIsCheckeds(true)
                    }
                  />
                  <span>Save my information for faster checkout </span>
                </div>
                {ischecked ? (
                  <div className="w-full flex flex-col gap-3 p-4">
                    <div>
                      <Input type="text" placeholder="Name" w="w-full" />
                    </div>
                    <div className="relative flex items-center">
                      <Input
                        type="text"
                        placeholder="Mobile number"
                        w="w-full ps-9"
                      />
                      <span className="absolute left-2 text-gray-500 ">
                        <Smartphone />
                      </span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Pay Now button */}
            <div>
              <button
                className="w-full text-white bg-blue-600 p-4 rounded-xl font-bold hover:bg-blue-800/95"
                type="button"
              >
                Pay Now
              </button>
            </div>

            {/* text */}
            <div>
              <span className="text-sm text-gray-500 pb-15 border-b border-gray-300">
                Your info will be saved to a Shop account. By continuing, you
                agree to Shop’s Terms of Service and acknowledge the Privacy
                Policy.
              </span>
            </div>

            {/* links */}
            <div className=" flex gap-4 underline text-blue-700 mt-5 text-sm pb-10 pt-4 ">
              <span>Refund police</span>
              <span>Shipping</span>
              <span>Privacy police</span>
              <span>Terms of service</span>
              <span>Connect</span>
            </div>
          </div>
        </div>

        {/* Product showcase */}
        <div  className={` h-full w-2/5 pe-36 ps-10   fixed top-20  right-0  `}>
          <div className="h-2/5 w-full pt-10 flex flex-col gap-6">
            {cartdata.map((itm) => (
              <div key={itm._id} className="grid grid-cols-12  gap-5">
                <div className="h-16 flex gap-4 bg-transparent col-span-9 ">
                  <div className="h-full w-1/4 relative border border-gray-300 shadow-sm shadow-gray-400 p-1 rounded-lg ">
                    <img
                      src={"http://localhost:5000/productImages/" + itm.image}
                      alt="productImg"
                      className="h-full w-full"
                    />
                    <div className="h-5 w-5 p-1 rounded flex justify-center items-center absolute -right-2 -top-2 bg-slate-800 text-white">
                      <span>{itm.qty}</span>
                    </div>
                  </div>
                  <span className="h-auto w-3/4 text-sm font-medium overflow-hidden ">
                    {itm.productName}
                  </span>
                </div>
                <div className="h-15 text-right col-span-3">
                  <span className="font-semibold">${pdFinalPrice(itm)} </span>
                </div>
              </div>
            ))}
            <div className="h-12 grid grid-cols-12 gap-6  ">
              <input
                type="text"
                placeholder="Discount code or gift card"
                className="h-full w-full col-span-9 border bg-white/80 border-gray-300 rounded-lg p-4"
                onChange={(e)=>setDisCode(e.target.value)}
              />
              <button className={` h-full col-span-3  rounded-xl font-medium ${disCode? 'bg-blue-600 text-white':'bg-gray-50 border text-gray-400 ' } `}>
                Apply
              </button>
            </div>

            <div className="text-sm grid gap-3 grid-cols-1 ">
              <div className="flex justify-between">
                <div><span>Subtotal</span> - {qtyCounter()} items </div>
                <span  className="">$ {getTotal()} </span>
              </div>
              <div className="flex justify-between">
                <div className="flex"><span>Shipping</span><CircleQuestionMark className="p-1" /></div>
                <span  className="text-gray-400">Enter shipping address</span>
              </div>
              <div className="flex justify-between font-medium text-xl">
                <span>Total</span>
                <div className="flex items-baseline gap-1">
                  <span className=" text-gray-400 font-normal text-sm">USD</span>
                  <span>${getTotal()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
