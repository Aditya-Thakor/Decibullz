import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "/src/assets/images/index.js";
import { useContext, useEffect, useState } from "react";
import CartContext from "/src/Contexts/CartContext";
import { ChevronRight, Menu, Search, X } from "lucide-react";

export default function Navbar({ bg }) {
  const navigate = useNavigate();
  const { cartdata } = useContext(CartContext);
  const ln = cartdata.length;

  const [scroll, setScroll] = useState(false);
  const [isMenuOn, setIsMenuOn] = useState(false);

  // Search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch products when search opens
  useEffect(() => {
    if (isSearchOpen && allProducts.length === 0) {
      fetch("http://localhost:5000/productdata")
        .then((res) => res.json())
        .then((data) => setAllProducts(data))
        .catch((error) => console.error("Error fetching products for search:", error));
    }
  }, [isSearchOpen, allProducts.length]);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const results = allProducts.filter(
        (p) =>
          p.productName?.toLowerCase().includes(lowerQuery) ||
          p.category?.toLowerCase().includes(lowerQuery)
      );
      setSearchResults(results.slice(0, 6)); // Show top 6 results
    }
  }, [searchQuery, allProducts]);

  const links = [
    { to: "/shop", name: "SHOP" },
    { to: "/productfinder", name: "PRODUCT FINDER" },
    { to: "/bestseller", name: "BEST SELLERS" },
    { to: "/support", name: "SUPPORT" },
  ];

  return (
    <>
      <div
        className={`h-28 z-40 fixed top-0 w-screen px-5 sm:px-10 flex items-center justify-between transition-all duration-300
          ${
            scroll
              ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm text-gray-900"
              : bg ? "bg-transparent text-gray-900" : "bg-transparent text-white"
          }
        `}
      >
        <div className="flex items-center gap-5 lg:hidden">
          <Menu
            className="size-6 cursor-pointer"
            onClick={() => {
              setIsMenuOn(true);
            }}
          />
          <Search 
            className="size-5 sm:hidden cursor-pointer hover:text-orange-500" 
            onClick={() => setIsSearchOpen(true)}
          />
        </div>
        
        <div className="h-16 w-32 sm:h-20 sm:w-48 flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img
            className={`w-full object-contain transition-all duration-300 ${scroll || bg ? "brightness-0" : "brightness-0 invert"}`}
            src={logo.logo}
            alt="logo"
          />
        </div>

        <div className="hidden lg:flex gap-8">
          {links.map((l, ind) => (
            <NavLink
              key={ind}
              to={`/dz${l.to}`}
              end
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : (scroll || bg ? "text-gray-900" : "text-white")} font-bold text-sm tracking-wider hover:text-orange-500 transition-colors`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-6 text-xl">
          {/* Search */}
          <button
            className="hidden sm:block hover:text-orange-500 transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <i className="ri-search-line"></i>
          </button>
          {/* User */}
          <button
            className="hidden sm:block hover:text-orange-500 transition-colors"
            onClick={() => navigate("/login")}
          >
            <i className="ri-user-line"></i>
          </button>
          {/* Cart */}
          <Link to="/cart" className="relative hover:text-orange-500 transition-colors">
            <i className="ri-shopping-cart-line"></i>
            {ln > 0 && (
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {ln}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed h-screen w-full sm:w-[350px] bg-white z-50 left-0 top-0 p-6 shadow-2xl transition-transform duration-500 ease-in-out ${
            isMenuOn ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-gray-900">Menu</h2>
            <button
              onClick={() => setIsMenuOn(false)}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-900"
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {links.map((l, ind) => (
              <NavLink
                key={ind}
                to={`/dz${l.to}`}
                onClick={() => setIsMenuOn(false)}
                className="flex justify-between items-center text-xl font-bold text-gray-900 hover:text-orange-500 transition-colors pb-4 border-b border-gray-100"
              >
                <span>{l.name}</span>
                <ChevronRight className="text-gray-400" />
              </NavLink>
            ))}
            <div className="flex justify-between items-center text-xl font-bold text-gray-900 hover:text-orange-500 transition-colors pb-4 mt-4" onClick={() => { setIsMenuOn(false); navigate("/login"); }}>
              <span>Login / Account</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex justify-center items-start pt-20 px-4 sm:px-10 animate-fade-in">
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            
            {/* Search Input Area */}
            <div className="flex items-center p-4 border-b border-gray-100">
              <Search className="text-gray-400 ml-4 size-6" />
              <input
                type="text"
                autoFocus
                placeholder="Search products by name or category..."
                className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-xl text-gray-900 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-gray-900 mr-2"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Search Results Area */}
            <div className="overflow-y-auto flex-1 bg-gray-50/50">
              {searchQuery.trim() === "" ? (
                <div className="py-20 text-center text-gray-400">
                  <i className="ri-search-eye-line text-6xl mb-4 opacity-50 block"></i>
                  <p className="text-lg">Start typing to find products...</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="py-20 text-center text-gray-500">
                  <p className="text-lg font-medium">No products found matching "{searchQuery}"</p>
                </div>
              ) : (
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {searchResults.map((product) => (
                    <div
                      key={product._id || product.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigate(`/dz/product/${product._id || product.id}`);
                      }}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 cursor-pointer transition-all group"
                    >
                      <div className="h-16 w-16 bg-gray-50 rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                        <img
                          src={
                            product.image?.startsWith("http") || product.image?.startsWith("data:")
                              ? product.image
                              : `http://localhost:5000/productImages/${product.image}`
                          }
                          alt={product.productName}
                          className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h4 className="font-bold text-gray-900 truncate group-hover:text-orange-600 transition-colors">
                          {product.productName}
                        </h4>
                        <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
                          {product.category || "Audio"}
                        </p>
                        <div className="font-extrabold text-gray-900">
                          ${(product.offer > 0 && product.offer != "0") ? product.offer : product.productPrice}
                        </div>
                      </div>
                      <div className="text-gray-300 group-hover:text-orange-500 pr-2 transition-colors">
                        <i className="ri-arrow-right-up-line text-xl"></i>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Search Footer */}
            {searchResults.length > 0 && (
              <div className="p-4 border-t border-gray-100 text-center bg-white">
                <p className="text-sm text-gray-500">Showing top {searchResults.length} results</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
