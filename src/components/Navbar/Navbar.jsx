import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/src/assets/images/index.js";
import { useContext, useEffect, useState } from "react";
import CartContext from "/src/Contexts/CartContext";
// import { CartContext } from "/src/Contexts/CartContext";
export default function Navbar({bg}) {
   const navigate = useNavigate();

   const {cartdata}=useContext(CartContext);
  // console.log('cart-',cart[0]);
  // console.log('cart', cart[0]? cart[0].qty : "null");
  
   const ln =cartdata.length ;
  //  const ln =1;
  // console.log(ln); 
  
  const [scroll, setScroll] = useState(false)

  const handleScroll = () =>{
    if(window.scrollY>200){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <div
      className={` h-28 z-50 fixed top-0 w-full text-slate-950 px-10 flex items-center justify-between 
        ${scroll && bg? 
          " bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg transition ease-in-out " 
          : " bg-transparent text-white "
        } 
        ${!bg ? "bg-slate-600 text-white" : ""}
      `}
      
      // style={{ background: "#ffffffd1" }}
    >
      <div className="h-20 w-60">
        <img 
          className={` h-full w-full invert ${scroll? "invert" : " invert-0"} `}
          src={logo.logo} 
          alt="logo" 
          onClick={()=>navigate('/')}
        />
      </div>
      <div className="flex gap-6">
        <NavLink
          className="font-bold  text-md hover:text-orange-500"
          to="/bestseller"
        >
          SHOP
        </NavLink>

        <NavLink to='/productfinder' className="font-bold text-md hover:text-orange-500">
          PRODUCT FINDER
        </NavLink>

        <NavLink
          className="font-bold  text-md hover:text-orange-500"
          to="/bestseller"
        >
          BEST SELLERS
        </NavLink>
        
        <NavLink to='/support' className="font-bold  text-md hover:text-orange-500">
          SUPPORT
        </NavLink>
        {/* <NavLink
          to="/uploadItem/uploadItemForm"
          className="font-semibold text-slate-700 text-md"
          target="_blank"
        >
          UploadItem
        </NavLink> */}
        {/* <NavLink
          to="/admin/admindashboard"
          className="font-semibold text-slate-700 text-md"
          target="_blank"
        >
          Admin
        </NavLink> */}
      </div>
      <div className="flex gap-4  text-xl ">
        {/* search */}
        <i 
          className="ri-search-line hover:text-orange-500"
          
        ></i>
        {/* user */}
        <i 
          className="ri-user-line hover:text-orange-500"
          onClick={()=>navigate('/login')} 
        ></i>
        {/* Cart */}
        <Link
          to='/cart'
        >
          <i 
            className="ri-shopping-cart-line hover:text-orange-500 relative">
            {ln? <div className=" absolute bottom-5 left-7 flex justify-center items-center">
            <span className=" absolute bg-gray-800 h-3.5 w-3.5  rounded-full "></span>
            <span className="absolute text-xs font-bold text-orange-500">{ln}</span>
            </div>:""}
            
            </i>
        </Link>
      </div>
    </div>
  );
}
