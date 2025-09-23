import { useEffect, useState } from "react";

import slide from "/src/assets/images/index.js";
export default function Test1() {
    const images=[
        slide.slide1,
        slide.slide2,
        slide.slide3,
        slide.slide4
    ]
    const extendedImgs =[...images,images[0]];

    const [currentIndex, setCurrentIndex]= useState(0);
    const [isAnimating,setIsAnimting]=useState(true);

    const handlePrev =()=>{
        if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
    }
    const handleNext =()=>{
        if (currentIndex === extendedImgs.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
    };
    useEffect(() => {
    if (currentIndex === extendedImgs.length - 1) {
      const timeout = setTimeout(() => {
        setIsAnimting(false);
        setCurrentIndex(0);
      }, 700); // same duration as transition
      return () => clearTimeout(timeout);
    } else {
      setIsAnimting(true);
    }
  }, [currentIndex]);
  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
 
        <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {
                images.map((itm,index)=>(
                    <img 
                        src={itm} 
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0" 
                    />
                ))
            }
        </div>

        <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <i class="ri-arrow-left-s-line w-6 h-6"></i>
      </button>
       <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <i class="ri-arrow-right-s-line w-6 h-6"></i>
      </button>
    </div>
  );
}
