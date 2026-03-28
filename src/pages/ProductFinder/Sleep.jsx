import { useEffect, useState } from "react";
import PageTemp from "../Shop/PageTemp";
import PdSection from "./PdSection";
import Footer from "/src/components/Footer/Footer";

export default function Sleep() {
  const [sleepPd, setSleepPd] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/productdata")
    .then(res=>res.json())
    .then((data)=>{
      let d = data.filter(p=>p.productName.includes("Sleep")
    )
      setSleepPd(d);
    })
    .catch((err)=>{
      console.log(err);      
    })
  },[])
  return (
    <div>
      <PageTemp title="Sleep, Sensory Relief, Focus" />
      <div className="h-auto my-20">
        <PdSection productData={sleepPd}/>
      </div>
      <Footer/>
    </div>
  );
}
