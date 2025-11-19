import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/src/assets/images/index.js";
import { useContext, useEffect, useState } from "react";
import CartContext from "/src/Contexts/CartContext";
import { ChevronRight, ChevronRightCircle, HamburgerIcon, Menu, Search, X, XCircle } from "lucide-react";
// import { CartContext } from "/src/Contexts/CartContext";
export default function Navbar({bg, }) {
   const navigate = useNavigate();

   const {cartdata}=useContext(CartContext);
  // console.log('cart-',cart[0]);
  // console.log('cart', cart[0]? cart[0].qty : "null");
  
   const ln =cartdata.length ;
  //  const ln =1;
  // console.log(ln); 
  
  const [scroll, setScroll] = useState(false)  
  const [isMenuOn, setIsMenuOn] = useState(false);

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
//add && bg in scroll ternary
  return (
    <div
      className={` h-28 z-50 fixed top-0 w-screen text-slate-950 px-5 sm:px-10 flex items-center justify-between 
        ${scroll  ?  
          " bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg transition ease-in-out " 
          : " bg-transparent text-white "
        } 
        ${bg ? "text-black" : ""}
      `}
      
      // style={{ background: "#ffffffd1" }}
    >
      <div className="flex items-center gap-5 lg:hidden ">
        <Menu 
          className="size-5"
          onClick={()=>{setIsMenuOn(true)}}
        />
        <Search className="size-5 sm:hidden"/>
      </div>
      <div className="h-20 w-40 sm:h-20 sm:w-60">
        <img 
          className={` h-full w-full invert ${scroll? "invert" : " invert-0"} `}
          src={logo.logo} 
          alt="logo" 
          onClick={()=>navigate('/')}
        />
      </div>
      <div className="hidden lg:flex gap-6">
        <NavLink
          className="font-bold  text-md hover:text-orange-500"
          to="/shop"
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
          className="ri-search-line hidden sm:block hover:text-orange-500"
          
        ></i>
        {/* user */}
        <i 
          className="ri-user-line hidden sm:block hover:text-orange-500"
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
      <div className={` h-screen w-full sm:w-1/2 bg-transparent  lg:hidden absolute left-0 top-0 p-2  transition-transform duration-500 ease-in-out ${isMenuOn? "  translate-x-0   " : " -translate-x-full "}`}>
             <div className={` h-full w-full flex flex-col gap-10 p-7 bg-white  `}>
              <div className={`transition-opacity duration-1000  ease-in-out `}>
                <X 
                  className="size-10 p-2 border border-gray-400 rounded-full "
                  onClick={()=>{
                    setIsMenuOn(!isMenuOn)
                  }}
                />
              </div>
              <div className={` flex flex-col gap-4 transition-opacity duration-1000 translate-y-3 ease-in-out  `}> {/*${isMenuOn? "opacity-100 translate-y-0": "opacity-0 translate-y-7 pointer-events-none"} for animations*/}
                <span className="flex justify-between items-center text-2xl font-bold"><span> Earplugs</span> <ChevronRight className="bg-gray-300 rounded-full p-1.5 font-bold"/></span>
                <span className="flex justify-between items-center text-2xl font-bold"><span> Radio & Comms </span> <ChevronRight className="bg-gray-300 rounded-full p-1.5 font-bold"/></span>
                <span className="flex justify-between items-center text-2xl font-bold"><span> Accessories</span> <ChevronRight className="bg-gray-300 rounded-full p-1.5 font-bold"/></span>
                <span className="flex justify-between items-center text-2xl font-bold">
                  <span> Bestsellers</span> 
                  {/* <ChevronRight className="bg-gray-300 rounded-full p-1.5 font-bold"/> */}
                  </span>
                <span className="flex justify-between items-center text-2xl font-bold">
                  <span> Support</span>
                   {/* <ChevronRight className="bg-gray-300 rounded-full p-1.5 font-bold"/> */}
                </span>
              </div>
             </div>
      </div>
    </div>
  );
}
