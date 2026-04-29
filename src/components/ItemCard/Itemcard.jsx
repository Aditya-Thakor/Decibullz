import CartContext from "/src/Contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ itmImg, title, price, offer, btnWorking, product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate using product id
    const productId = product?._id || product?.id;
    if (productId) {
      navigate(`/dz/product/${productId}`);
    }
  };

  return (
    <div className="group relative flex flex-col h-full w-full bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden m-1">
      
      {/* Image Container */}
      <div 
        className="relative h-48 sm:h-56 w-full p-4 flex items-center justify-center bg-gray-50/50 cursor-pointer"
        onClick={handleCardClick}
      >
        <img 
          src={itmImg} 
          alt={title} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Sale Badge */}
        {(offer > 0 && offer != "0") && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm tracking-wider">
            SALE
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-5">
        <h3 
          className="font-bold text-gray-900 text-sm sm:text-lg mb-2 line-clamp-2 leading-tight group-hover:text-orange-600 transition-colors cursor-pointer"
          onClick={handleCardClick}
        >
          {title}
        </h3>
        
        <div className="mt-auto pt-3">
          {/* Price Section */}
          <div className="flex items-end gap-2 mb-4">
            {offer == 0 || !offer ? (
              <span className="font-extrabold text-gray-900 text-xl sm:text-2xl">${price}</span>
            ) : (
              <>
                <span className="font-extrabold text-orange-600 text-xl sm:text-2xl">${offer}</span>
                <span className="line-through text-gray-400 text-sm sm:text-base font-medium mb-1">${price}</span>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-bold py-2 sm:py-2.5 rounded-xl transition-colors text-xs sm:text-sm flex justify-center items-center gap-1 shadow-sm"
            >
              <i className="ri-shopping-cart-2-line text-lg"></i> Add
            </button>
            <button
              onClick={() => {
                btnWorking ? alert("Redirecting to checkout...") : alert("Button not working currently.");
              }}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-2.5 rounded-xl transition-colors text-xs sm:text-sm flex justify-center items-center gap-1 shadow-md shadow-orange-500/30"
            >
              <i className="ri-flashlight-fill text-lg"></i> Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
