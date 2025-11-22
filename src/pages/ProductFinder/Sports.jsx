import { useEffect, useState } from "react";
import PageTemp from "../Shop/PageTemp";
import PdSection from "./PdSection";
import Footer from "/src/components/Footer/Footer";

export default function Sports() {
  const [sportPd, setSportPd]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/productdata")
    .then(res=>res.json())
    .then((data)=>{
      let d = data.filter(p=>p.image.includes("product4")
    )
      setSportPd(d);
    })
    .catch((err)=>{
      console.log(err);      
    })
  },[])
  return (
    <div>
      <PageTemp title="Earplugs for Sports" />
      <div className="h-automy-20">
        <PdSection productData={sportPd}/>
      </div>
      <Footer/>
    </div>
  );
}
