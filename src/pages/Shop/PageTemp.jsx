import Nav3 from "/src/components/Navbar/Nav3";
import feature from '../../assets/images/index';
import SliderMain from "/src/components/Slider/SliderMain";
import { Truck } from "lucide-react";

export default function PageTemp({title}){
    return(
        <div className="h-auto">
            <Nav3/>  
            <div className="h-screen ">
                <div className= "h-full flex flex-col gap-30 justify-center items-center ">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <div className="grid grid-cols-4 gap-20 font-normal">
                        <div className="h-30 w-40  flex flex-col gap-2 items-center justify-center ">
                            <img 
                                src={feature.feature4} 
                                alt="f4" 
                                className="h-4/5 w-full object-fill"
                            />
                            <span className="h-1/5 ">Custom Fit</span>
                        </div>   
                        <div className="h-30 w-40 flex flex-col gap-2 items-center justify-center ">
                            <img 
                                src={feature.feature2} 
                                alt="f4" 
                                className="h-4/5 w-full object-fill"
                            />
                            <span className="h-1/5 ">Reusable Cleanable</span>
                        </div>   
                        <div className="h-30 w-40  flex flex-col gap-2 items-center justify-center ">
                            <img 
                                src={feature.feature1} 
                                alt="f4" 
                                className="h-4/5 w-full object-fill"
                            />
                            <span className="h-1/5 ">High Isolation</span>
                        </div>   
                        <div className="h-30 w-40  flex flex-col gap-2 items-center justify-center ">
                             
                            <Truck className="h-4/5 w-full" />
                            <span className="h-1/5 font-normal">Free Shipping*</span>
                        </div>   
                    </div>
                </div>
                
            </div>
        </div>
    )
}