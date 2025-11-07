import { useEffect, useState } from "react";
import PageTemp from "./PageTemp"; 
import ItemCard from "/src/components/ItemCard/Itemcard";
import Footer from "/src/components/Footer/Footer";

export default function Shop(){
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/productdata')
        .then(res=>res.json())
        .then((data)=>{
            setProducts(data)
        })
        .catch((err)=>{
            console.log(err); 
        })
    },[])
    return(
        <div className="h-screen">
          <PageTemp title="All Products"/>
          <div className="h-auto mb-10">
                <div className="h-full grid grid-cols-4 gap-10">
                    {
                        products.map((pd)=>(
                            <ItemCard
                                key={pd._id}
                                itmImg={`http://localhost:5000/productImages/${pd.image}`}
                                title={pd.productName} 
                                price={pd.productPrice}
                                offer={pd.offer}
                                product={pd}
                            />
                        ))
                    }
                </div>
          </div>
          <Footer/>
        </div>
    )
}