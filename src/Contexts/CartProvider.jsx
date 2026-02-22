import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) =>{
    const [cartdata,setCart]= useState([]);
    // console.log('cartdata- ', cartdata);
    
    const addToCart = (prd) =>{
        
        setCart((prev) => {
            const existItem = prev.find(t => t._id===prd._id);
            if(existItem)
            {
                return prev.map(i=>i._id===prd._id? {...i,qty:i.qty+1} : i);
            }
            return [...prev,{...prd,qty:1}];
        });
        console.log(cartdata);
    }

    const updateCart = (id,qty)=>{
       if(qty===0)
       {
        setCart((prev) => prev.filter(item=>item._id!==id));
       }
        else{
            setCart((prev) => {
                return prev.map(i=>i._id===id? {...i,qty:qty} : i);
        });
        }
        console.log(cartdata);
    }

    const removeCart = (id)=>{
      
        setCart((prev) => prev.filter(item=>item._id!==id));
      
    }

    const getTotal = () => {
        let total=0;
        for(let i= 0; i < cartdata.length; i++){
        let price =Number(cartdata[i].productPrice*cartdata[i].qty) 
        total= Math.floor((price+total)*100)/100
        }
        return total
    }

    return(
       <CartContext.Provider value={{cartdata,addToCart,updateCart,removeCart, getTotal}}>
        {children}
       </CartContext.Provider>
    );
}

export default CartProvider;