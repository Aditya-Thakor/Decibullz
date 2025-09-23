import ItemCard from "/src/components/ItemCard/Itemcard";
// import itm from '/src/assets/images/index'
import { useEffect, useState } from "react";
// import images from "/src/assets/images";

export default function Bestseller(){
    const [productData,setProductData]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/productdata')
        .then((res)=>res.json())
        .then((data)=>{
            console.log('Products data->'+ data);
            setProductData(data);
            
            
            
        })
        .catch((err)=>{
            console.log('Error in fetching data!!' + err);
            
        })
    },[])

    return(
       <div className="h-screen px-10">
            <div className="flex items-center justify-between h-20">
                <span className="text-4xl font-semibold">BEST SELLERS</span>
                <span className="text-gray-600">View all</span>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {
                    productData.map((itm, ind)=>(
                        <ItemCard 
                            key={ind} 
                            itmImg={`http://localhost:5000/productImages/${itm.image}`} 
                            title={itm.productName} 
                            price={itm.productPrice}
                            offer={itm.offer}
                        />
                    ))
                }
               {/* <ItemCard itmImg={itm.product1} title="Everyday Earplugs for Sleep, Sound & Noise Sensitivity, & Focus" price="19.95" /> */}
               {/* <ItemCard itmImg={itm.product2} title="Everyday Earplugs for Sleep, Sound & Noise Sensitivity, & Focus" price="29.99" />
               <ItemCard itmImg={itm.product3} title="Custom Molded High-Fidelity Earplugs for Concerts, Musicians, Events, and Noise Sensitivity" price="39.99" />
               <ItemCard itmImg={itm.product4} title="Custom Molded Professional High-Fidelity Filter Earplugs" price="99.99" /> */}
            </div>
        </div>
    )
}