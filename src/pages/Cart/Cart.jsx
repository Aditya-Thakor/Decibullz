import { useContext } from "react";
import Navbar from "/src/components/Navbar/Navbar";
import { ChevronLeft, LockKeyhole, Minus, Plus, Trash2 } from "lucide-react";
import CartContext from "/src/Contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navlink = useNavigate();
  const { cartdata, updateCart, removeCart, getTotal } = useContext(CartContext);

  const getActivePrice = (itm) => {
    return (itm.offer > 0 && itm.offer != "0") ? Number(itm.offer) : Number(itm.productPrice);
  };

  const getSubtotal = () => {
    let sub = 0;
    for (let i = 0; i < cartdata.length; i++) {
      let price = getActivePrice(cartdata[i]) * cartdata[i].qty;
      sub += price;
    }
    return Math.floor(sub * 100) / 100;
  };

  const getItemTotal = (itm) => {
    let finalPrice = getActivePrice(itm) * itm.qty;
    return Math.floor(finalPrice * 100) / 100;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar bg={true} />
      
      <div className="pt-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          className="font-bold flex items-center text-gray-500 hover:text-orange-500 transition-colors mb-8 group" 
          onClick={() => navlink(-1)}
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Continue Shopping
        </button>

        {/* Main Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">Your Cart</h1>
          <p className="text-gray-500 font-medium">
            {cartdata.length > 0 ? "You are eligible for free shipping." : "Your cart is currently empty."}
          </p>
        </div>

        {cartdata.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <i className="ri-shopping-cart-2-line text-8xl text-gray-200 mb-6"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Looks like you haven't added anything yet.</h2>
            <button 
              onClick={() => navlink('/dz/shop')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-md"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 font-bold text-gray-500 uppercase tracking-wider text-sm">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-100">
                {cartdata.map((itm) => (
                  <div key={itm._id || itm.id} className="py-6 flex flex-col md:grid md:grid-cols-12 gap-6 items-center">
                    {/* Product Info */}
                    <div className="col-span-6 w-full flex items-center gap-6">
                      <div className="h-24 w-24 bg-gray-50 rounded-2xl p-2 flex-shrink-0 border border-gray-100">
                        <img
                          className="h-full w-full object-contain mix-blend-multiply"
                          src={
                            itm.image?.startsWith("http") || itm.image?.startsWith("data:")
                              ? itm.image
                              : `http://localhost:5000/productImages/${itm.image}`
                          }
                          alt={itm.productName}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 
                          className="font-bold text-gray-900 text-lg hover:text-orange-500 cursor-pointer transition-colors line-clamp-2"
                          onClick={() => navlink(`/dz/product/${itm._id || itm.id}`)}
                        >
                          {itm.productName}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          {(itm.offer > 0 && itm.offer != "0") ? (
                            <>
                              <span className="font-extrabold text-orange-600">${itm.offer}</span>
                              <span className="line-through text-gray-400 text-sm font-medium">${itm.productPrice}</span>
                            </>
                          ) : (
                            <span className="font-extrabold text-gray-600">${itm.productPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="col-span-3 w-full flex md:justify-center items-center justify-between mt-4 md:mt-0">
                      <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200">
                        <button
                          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:bg-gray-100 rounded-l-xl transition-colors"
                          onClick={() => updateCart(itm._id || itm.id, itm.qty - 1)}
                        >
                          <Minus size={18} />
                        </button>
                        <span className="w-12 text-center font-bold text-gray-900">{itm.qty}</span>
                        <button
                          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:bg-gray-100 rounded-r-xl transition-colors"
                          onClick={() => updateCart(itm._id || itm.id, itm.qty + 1)}
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                      <button 
                        className="md:hidden text-gray-400 hover:text-red-500 transition-colors p-2"
                        onClick={() => removeCart(itm._id || itm.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="col-span-3 w-full flex justify-between md:justify-end items-center mt-2 md:mt-0">
                      <span className="md:hidden font-bold text-gray-500 uppercase text-sm">Total:</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-black text-gray-900">
                          ${getItemTotal(itm)}
                        </span>
                        <button 
                          className="hidden md:flex text-gray-300 hover:text-red-500 transition-colors p-2"
                          onClick={() => removeCart(itm._id || itm.id)}
                          title="Remove item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkout Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-36">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Order Summary</h3>
                
                <div className="flex flex-col gap-4 text-gray-600 font-medium mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">${getSubtotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-bold text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <div className="text-right">
                      <span className="text-3xl font-black text-gray-900 block">${getTotal()}</span>
                      <span className="text-xs text-gray-400 font-bold">USD</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="w-full bg-gray-900 text-white hover:bg-orange-500 py-4 rounded-xl flex justify-center items-center gap-3 text-lg font-bold transition-colors shadow-md"
                  onClick={() => navlink('/checkout')}
                >
                  <LockKeyhole size={20} />
                  Secure Checkout
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-4 text-gray-400">
                   <i className="ri-visa-line text-3xl"></i>
                   <i className="ri-mastercard-fill text-3xl"></i>
                   <i className="ri-paypal-fill text-3xl"></i>
                   <i className="ri-apple-fill text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
