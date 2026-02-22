import { useEffect, useState } from "react";
import PageTemp from "../Shop/PageTemp";
import ItemCard from "/src/components/ItemCard/Itemcard";
import Footer from "/src/components/Footer/Footer";

export default function BestSellerMain(){

    const [bestSeller, setBestSeller]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/productdata')
        .then(res=>res.json())
        .then((data)=>{
            if (data.length>6) {
                let bs = data.slice(0,6)
                setBestSeller(bs);
            }
        })
        .catch((error)=>{
            console.log(error);            
        })
    },[])

    return(
        <div className="h-auto">
            <PageTemp title="BestSeller"/>
            <div className="h-auto mb-10">
                <div className="h-full grid grid-cols-4 gap-5">
                    {
                        bestSeller.map((bs)=>(
                           <ItemCard
                                key={bs._id}
                                itmImg={`http://localhost:5000/productImages/${bs.image}`}
                                title={bs.productName} 
                                price={bs.productPrice}
                                offer={bs.offer}
                                product={bs}
                           /> 
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}