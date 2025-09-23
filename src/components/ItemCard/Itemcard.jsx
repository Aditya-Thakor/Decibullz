export default function ItemCard({itmImg , title, price,offer, btnWorking}) {
  return (
    // remover width of below div (w-1/4)
    <div className="h-auto border-0 shadow-md rounded-lg overflow-hidden bg-white">
      <div className="p-4">
        <div className="w-full flex justify-center">
          <img src={itmImg} alt="p1" className="w-full h-auto object-contain" />
        </div>
        <div className="mt-3 font-bold text-lg">{title}</div>
        <div className="text-gray-700 text-base">
          {/* ${price} */}
          {offer==0? 
           <span className="text-xl">${price}</span>
          :
          <div className="flex items-center gap-2">
            <span className="line-through">${price} </span>
            <span className="font-semibold text-xl"> ${offer} </span>
            </div>
          
          }
        </div>
      </div>

      <div className="flex gap-3 p-4 bg-transparent border-t-0">
        <button
          className="bg-gray-900 text-white text-center rounded-none font-semibold px-4 py-2 hover:bg-gray-700"
          onClick={() => {
            btnWorking? alert("item added to cart!"): alert('is not working!')
          }}
        >
          + Add to Cart
        </button>
        <button className="whitespace-nowrap bg-orange-600 hover:bg-orange-500 text-white text-center rounded-none font-bold px-4 py-2 flex items-center gap-2"
          onClick={()=>{
             btnWorking? alert("buy item now!"): alert('is not working!')
          }}
        >
          <i className="ri-shopping-cart-line text-2xl"></i> Buy Now!
        </button>
      </div>
    </div>
  );
}
