import { useEffect, useState } from "react";
import PageTemp from "../Shop/PageTemp";
import PdSection from "./PdSection";
import Footer from "/src/components/Footer/Footer";

export default function Events() {
  const [eventPd, setEventPd]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/productdata")
    .then(res=>res.json())
    .then((data)=>{
      let d = data.filter(p=>p.productName.includes("High-Fidelity") 
      || p.image.includes("product4")
    )
      setEventPd(d);
    })
    .catch((err)=>{
      console.log(err);      
    })
  },[])
  return (
    <div>
      <PageTemp title="Earplugs for Music & Events" />
      <div className="h-auto my-20">
          <PdSection productData={eventPd}/>
      </div>
      <Footer/>
    </div>
  );
}
