import OrangeBtn from "../Button/OrangeBtn";
import Features from "./Features";

export default function FeatureSection(){

    

    return(
        <div className="h-96 flex flex-col justify-around  px-10">
            <div className="">
                <Features/>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                <span className="text-2xl font-bold">Can't decide? Take a short quiz to find the perfect fit.</span>
                <OrangeBtn text="Take Quiz Now"/>
                {/* <button className="text-white font-semibold bg-orange-600/95 hover:bg-orange-500/80 px-8 py-4">Take Quiz Now</button> */}
            </div>
        </div>
    )
}