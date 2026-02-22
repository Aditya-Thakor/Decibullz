import "react-slideshow-image/dist/styles.css";
import slides from "/src/assets/images/index.js";
import { Slide } from "react-slideshow-image";

export default function Test2() {
  const images = [slides.slide1, slides.slide2, slides.slide3, slides.slide4];
    // console.log("Slides:", slides);
  return (
    <div className="slide-container h-screen w-full">
      <Slide 
        autoplay={true} 
        duration={3000} 
        transitionDuration={800} 
        infinite={true} 
        prevArrow={
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 cursor-pointer">
                <i class="ri-arrow-left-s-line text-9xl"></i>
            </div>
        }
        nextArrow={
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 cursor-pointer">
                <i class="ri-arrow-left-s-line text-9xl"></i>
            </div>
        }
    >
        {images.map((img, ind) => (
          <div key={ind}>
            <div className="h-full flex items-center justify-center">
              <img
                src={img}
                alt={`Slide ${ind + 1}`}
                className="h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
