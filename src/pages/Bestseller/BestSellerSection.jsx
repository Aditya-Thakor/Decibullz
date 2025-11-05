import { useNavigate } from "react-router-dom";
import ItemCard from "/src/components/ItemCard/Itemcard";
import { useEffect, useState } from "react";

export default function BestSellerSection() {

  const [bestSeller, setBestSeller] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/productdata")
      .then((res) => res.json())
      .then((data) => {
        if (data.length >= 4) {
          let newData = data.slice(0, 4);
          setBestSeller(newData);
        }
      })
      .catch((error) => console.log("error at bestsellerSection ", error));
  }, []);

  return (
    <div className="h-screen mt-28 px-10">
      <div className="flex items-center justify-between h-20">
        <span className="text-4xl font-semibold">BEST SELLERS</span>
        <span 
            className="text-gray-600 cursor-pointer"
            onClick={()=>navigate('/bestseller')}
        >View all</span>
      </div>

      <div className="h-full">
        <div className="grid grid-cols-4 gap-4 h-auto">
          {bestSeller.map((itm, ind) => (
            <ItemCard
              key={ind}
              itmImg={`http://localhost:5000/productImages/${itm.image}`}
              title={itm.productName}
              price={itm.productPrice}
              offer={itm.offer}
              product={itm}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
