import { useEffect, useState } from "react";
import PageTemp from "../Shop/PageTemp";
import ItemCard from "/src/components/ItemCard/Itemcard";
import Footer from "/src/components/Footer/Footer";

export default function Radio() {
  const [radioproducts, setRadioProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/productdata")
      .then((res) => res.json())
      .then((data) => {
        let d = data.filter(r => r.productName.startsWith("Isolation") 
            || r.productName.startsWith("Awareness")
            || r.productName.startsWith("Custom Moldable")
            || r.productName.includes("Tube")
            
        );
        setRadioProduct(d);
      })
      .catch((err) => {
        console.log("error at radio.jsx", err);
      });
  }, []);

  return (
    <div className="h-screen  ">
      <PageTemp title="Radio & Comms Earpieces + Headsets" />
      <div className="h-auto my-20  ">
        <div className="  w-full px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {radioproducts.map((pd) => (
            <ItemCard
              key={pd._id}
              itmImg={`http://localhost:5000/productImages/${pd.image}`}
              title={pd.productName}
              price={pd.productPrice}
              offer={pd.offer}
              product={pd}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
