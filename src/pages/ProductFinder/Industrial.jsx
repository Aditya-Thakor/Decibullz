import { useEffect, useState } from "react";
import PageTemp from "../Shop/PageTemp";
import PdSection from "./PdSection";
import Footer from "/src/components/Footer/Footer";

export default function Industrial() {
  const [diyPd, setDiyPd]=useState([]);
  useEffect(()=>{
     fetch("http://localhost:5000/productdata")
    .then(res=>res.json())
    .then((data)=>{
      let d = data.filter(p=>p.productName.includes("Custom Molded Earplugs 31dB NRR")
      || p.productName.includes("Custom Molded Earplug Lanyard")
      || p.productName.includes("Premium Earplug and Earphone Carrying Case")
    )
      setDiyPd(d);
    })
    .catch((err)=>{
      console.log(err);      
    })
  },[])
  return (
    <div>
      <PageTemp title="DIY, Industrial and Manufacturing" />
      <div className="h-auto my-20">
        <PdSection productData={diyPd}/>
      </div>
      <Footer/>
    </div>
  );
}
