import { useEffect, useState } from "react";
import PageTemp from "../Shop/PageTemp";
import PdSection from "./PdSection";

export default function Hunting(){
    const [huntingProducts, setHuntingProducts]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/productdata")
        .then(res=>res.json())
        .then((data)=>{
            let d = data.filter(p=>p.productName.includes("Custom Molded ") && p.image.endsWith('.png')
        ) 
            setHuntingProducts(d.filter(p=> !p.productName.includes("Custom Molded High-Fidelity")));
        })
        .catch((err)=>{
            console.log('error at hunting page', err);            
        })
    },[])
    return(
        <div>
           <PageTemp title="Earplugs For Shooting & Hunting" />
           <div className="h-auto my-20">
                <PdSection productData={huntingProducts} />
           </div>
        </div>
    )
}