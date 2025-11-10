import { motion, useMotionValue, useSpring } from "framer-motion";
import "react-slideshow-image/dist/styles.css";
import slides from "/src/assets/images/index.js";
import { Slide } from "react-slideshow-image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

const SPRING = {
  mass: 0.1,
  damping: 100,
  stiffness: 3000,
};

const images = [slides.slide1, slides.slide2, slides.slide3, slides.slide4];
const slidesData = [
  {
    img:slides.slide1,
    tagline:"Custom Comfort. PRO Protection.",
    para:"Powerful noise reduction with all-day wearability and a perfect fit.",
    btnText: "SHOP CUSTOM EARPLUGS",
    btnColor:"bg-[#ef7929]"
  },
  {
    img:slides.slide2,
    tagline:"Instant Defense. PRO Protection.",
    para:"Blocks sudden gunshots while letting safe sounds in, no batteries needed.",
    btnText: "SHOP PERCUSSIVE FILTERS",
    btnColor:"bg-[#ef7929]"
  },
  {
    img:slides.slide3,
    tagline:"True-to-Life Sound. PRO Protection.",
    para:"Reduces volume evenly without distortion, perfect for concerts, DJs, and musicians.",
    btnText: "SHOP MUSIC FILTERS",
    btnColor:"bg-[#4ba7ff]"
  },
  {
    img:slides.slide4,
    tagline:"Crystal-Clear Comms. PRO Protection.",
    para:"Molds to your ear for secure fit and reliable communication on long shifts.",
    btnText: "SHOP RADIO & COMMS",
    btnColor:"bg-[#16cf60]"
  },
]

export const SpringMouseFollow = () => {
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);
  const slideRef = useRef(null);

  const BALL_SIZE = 48;

  const [isLeft, setIsLeft]= useState(false);
  const [isVisible, setIsVisible]= useState(true);

  return (
    <div
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        xSpring.set(e.clientX - bounds.left - BALL_SIZE/2);
        ySpring.set(e.clientY - bounds.top - BALL_SIZE/2);

        const mouseX = e.clientX - bounds.left;

        if(mouseX<bounds.width/2){
          setIsLeft(true);
        }else{
          setIsLeft(false);
        }

      }}
      onPointerEnter={() => {
        opacitySpring.set(1);
        scaleSpring.set(1);
      }}
      onPointerLeave={() => {
        opacitySpring.set(0);
        scaleSpring.set(0);
      }}
      className=" bg-background  h-screen relative hidden md:block "
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
        }}
        className={` ${isVisible? "flex": "hidden"} rounded-4xl z-30 absolute size-12 bg-orange-500 flex justify-center items-center font-bold `}
      >
        {isLeft?
         <ChevronLeft  
         onClick={(e)=>{
          e.stopPropagation();
          slideRef.current.goBack();
        }} 
        /> :  
        <ChevronRight onClick={(e)=>{
          e.stopPropagation();
          slideRef.current.goNext();
        }} /> }
        
      </motion.div>
      <Slide
        ref={slideRef}
        autoplay={true}
        duration={3000}
        transitionDuration={800}
        infinite={true} 
      >
        {slidesData.map((sld, ind) => (
          <div key={ind} className="relative">
            <div className="h-full flex items-center justify-center">
            <div>
              <img
                src={sld.img}
                alt={`Slide ${ind + 1}`}
                className="h-full object-cover"
              />
            </div>
            <div className="bg-transparent absolute h-full w-1/2 left-10 flex items-center ">  
              <div className="h-1/2 w-2/3 flex flex-col gap-4 ">
                <div className="md:h-7 lg:h-14">
                  <img 
                    src={slides.gearup}
                    alt="gearup-ad" 
                    className="h-full"
                  />
                </div>
                <div className="flex flex-col font-bold md:text-3xl lg:text-6xl  text-gray-900 cursor-default">
                  <span className="">15% OFF</span>
                  <span>SITEWIDE</span>
                </div>
                <div className="w-full">
                  <p className="flex flex-col md:w-full">
                    <strong className="md:text-sm lg:text-lg"> {sld.tagline}</strong>
                    <span className="md:text-xs lg:text-sm">{sld.para} Use code <strong> GEARUP15 </strong> at check out.</span>
                  </p>
                </div>
                <div>
                  <button 
                    className={`${sld.btnColor} md:px-3 md:py-4 lg:px-5 lg:py-5 lg:w-3/4 text-white font-bold cursor-pointer `}
                    onMouseEnter={()=>{
                      setIsVisible(false)
                    }}
                    onMouseLeave={()=>{
                      setIsVisible(true)
                    }}
                  >{sld.btnText}</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default function Test3() {
  // console.log("Slides:", slides);
  return (
    <div className="slide-container h-screen w-full ">
      
      <SpringMouseFollow  />
    </div>
  );
}
