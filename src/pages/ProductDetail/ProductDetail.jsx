import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartContext from "/src/Contexts/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const fetchProduct = async () => {
      try {
        const res = await fetch("http://localhost:5000/productdata");
        const data = await res.json();
        // Match the ID. ID can be _id from mongo or a manually set id
        const foundProduct = data.find(p => p._id === id || p.id === id);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <i className="ri-loader-4-line text-4xl text-orange-500 animate-spin mb-4"></i>
        <h2 className="text-xl font-bold text-gray-700">Loading Product Details...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-gray-400 text-6xl mb-6"><i className="ri-error-warning-line"></i></div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md text-center">We couldn't find the product you're looking for. It might have been removed or the link is incorrect.</p>
        <button onClick={() => navigate('/dz/shop')} className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold px-8 py-3 rounded-xl shadow-md">
          Back to Shop
        </button>
      </div>
    );
  }

  // Handle Offer logic (either actual number, or string representation)
  const offerVal = product.offer || product.productOffer; // In case it's named differently
  const hasOffer = offerVal > 0 && offerVal != "0";

  // Handle Image source
  const imageSrc = product.image?.startsWith('http') || product.image?.startsWith('data:') 
    ? product.image 
    : `http://localhost:5000/productImages/${product.image}`;

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 bg-white">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors font-bold group"
      >
        <i className="ri-arrow-left-line text-xl group-hover:-translate-x-1 transition-transform"></i> Back
      </button>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 bg-gray-50/50 rounded-[2rem] p-8 md:p-16 flex items-center justify-center border border-gray-100 shadow-sm relative group">
          {hasOffer && (
            <div className="absolute top-8 left-8 bg-red-500 text-white font-black px-5 py-2 rounded-full tracking-widest shadow-lg shadow-red-500/30 z-10 text-sm">
              SALE
            </div>
          )}
          <img 
            src={imageSrc} 
            alt={product.productName} 
            className="w-full max-w-md object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 flex flex-col h-full">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
            {product.category || "Premium Audio"}
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            {product.productName}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            {hasOffer ? (
              <>
                <span className="text-5xl font-black text-orange-600">${offerVal}</span>
                <span className="text-2xl text-gray-400 line-through font-bold">${product.productPrice}</span>
              </>
            ) : (
              <span className="text-5xl font-black text-gray-900">${product.productPrice}</span>
            )}
          </div>

          <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
            <p>{product.description || "Experience the perfect blend of performance, comfort, and style. Designed for those who demand the very best in everyday functionality and extreme scenarios. Built with premium materials to ensure longevity and ultimate satisfaction."}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 text-lg shadow-sm"
            >
              <i className="ri-shopping-cart-2-line text-2xl"></i> Add to Cart
            </button>
            <button 
              onClick={() => alert("Proceeding to secure checkout...")}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
            >
              <i className="ri-flashlight-fill text-2xl"></i> Buy Now
            </button>
          </div>
          
          {/* Guarantees / Badges */}
          <div className="grid grid-cols-2 gap-6 mt-12 pt-10 border-t border-gray-100">
            <div className="flex items-center gap-4 text-gray-800 font-bold">
              <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <i className="ri-truck-line text-2xl"></i>
              </div>
              Free Shipping
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-bold">
              <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              1 Year Warranty
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-bold">
              <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <i className="ri-arrow-go-back-line text-2xl"></i>
              </div>
              30-Day Returns
            </div>
            <div className="flex items-center gap-4 text-gray-800 font-bold">
              <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                <i className="ri-customer-service-2-line text-2xl"></i>
              </div>
              24/7 Support
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
