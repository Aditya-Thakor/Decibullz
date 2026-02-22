import Nav3 from "/src/components/Navbar/Nav3";
import feature from '../../assets/images/index';
import SliderMain from "/src/components/Slider/SliderMain";
import { Truck } from "lucide-react";

export default function PageTemp({title}){
    return(
        <div className="h-auto">
            <Nav3/>  
            <div className="h-screen ">
                <div className= "h-3/5 lg:h-full flex flex-col gap-30 justify-center items-center ">
                    <h1 className="text-xl sm:text-4xl font-bold">{title}</h1>
                    <div className="flex justify-center lg:grid lg:grid-cols-4 gap-0  sm:gap-10 font-normal text-center items-center  sm:px-0 ">
                        <div className="h-10 w-20 sm:size-24 lg:h-30 lg:w-40  flex flex-col gap-2 items-center justify-center ">
                            <img 
                                src={feature.feature4} 
                                alt="f4" 
                                className="h-4/5 w-full object-fill"
                            />
                            <span className="text-xs sm:text-lg sm:h-1/5  ">Custom Fit</span>
                        </div>   
                        <div className="h-10 w-20  sm:size-24 lg:h-30 lg:w-40 flex flex-col gap-2 items-center justify-center ">
                            <img 
                                src={feature.feature2} 
                                alt="f4" 
                                className="h-4/5 w-full object-fill"
                            />
                            <span className="text-xs sm:text-lg sm:h-1/5  ">Reusable Cleanable</span>
                        </div>   
                        <div className="h-10 w-20 sm:size-24 lg:h-30 lg:w-40  flex flex-col gap-2 items-center justify-center ">
                            <img 
                                src={feature.feature1} 
                                alt="f4" 
                                className="h-4/5 w-full object-fill"
                            />
                            <span className="text-xs sm:text-lg sm:h-1/5 ">Isolation</span>
                        </div>   
                        <div className="sm:size-24 lg:h-30 lg:w-40  flex flex-col gap-2 items-center justify-center ">
                             
                            <Truck className="size-8 sm:size-16 lg:h-4/5 w-full" />
                            <span className="text-xs sm:text-lg sm:h-1/5  ">Free Shipping*</span>
                        </div>   
                    </div>
                </div>
                
            </div>
        </div>
    )
}