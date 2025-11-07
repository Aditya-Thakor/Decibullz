import { Crosshair } from "lucide-react";
import Nav3 from "/src/components/Navbar/Nav3";

import category from "../../assets/images/index";
import { useNavigate } from "react-router-dom";

export default function ProductFinder() {

    const navigate = useNavigate();

  return (
    <div className="h-auto  ">
      <Nav3 />
      <div className="h-screen mt-40">
        <div className="h-full flex flex-col gap-7 justify-center items-center ">
          <h1 className="text-3xl font-bold">
            What do you need Decibullz for?
          </h1>
          <div className="grid grid-cols-4 gap-10 text-center">
            <div className="h-50 w-50 flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer">
              <div 
                    className="flex items-center justify-center relative"
                    onClick={()=>{
                        navigate('/productfinder/hunting')
                    }}
                >
                <img src={category.category1} alt="c1" className="h-20 w-20" />
              </div>
              <span className="font-semibold text-lg">Hunting, Shooting</span>
            </div>

            <div className="h-50 w-50 flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer">
              <div 
                className="flex items-center justify-center relative"
                onClick={()=>{
                        navigate('/productfinder/industrial')
                    }}
              >
                <img src={category.category2} alt="c1" className="h-20 w-20" />
              </div>
              <span className="font-semibold text-lg">DIY, Industrial, Manufacturing</span>
            </div>

            <div className="h-50 w-50 flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer">
              <div 
                    className="flex items-center justify-center relative"
                    onClick={()=>{
                        navigate('/productfinder/events')
                    }}
                >
                <img src={category.category3} alt="c1" className="h-20 w-20" />
              </div>
              <span className="font-semibold text-lg ">Attending Events, Music, Concerts</span>
            </div>

            <div className="h-50 w-50 flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer ">
              <div className="flex items-center justify-center relative">
                <img src={category.category4} alt="c1" className="h-20 w-20" />
              </div>
              <span className="font-semibold text-lg">Sleep, Sensory Relief, Focus</span>
            </div>

            <div className="h-50 w-50 flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer ">
              <div className="flex items-center justify-center relative">
                <img src={category.category5} alt="c1" className="h-20 w-20" />
              </div>
              <span className="font-semibold text-lg">MotorSports</span>
            </div>

            <div className="h-50 w-50 p-5 flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer ">
              <div className="flex items-center justify-center relative">
                <img src={category.category6} alt="c1" className="h-20 w-20" />
              </div>
              <span className="font-semibold text-lg">Radio, Communications</span>
            </div>

            <div className="h-50 w-50  flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer ">
              <div className="flex items-center justify-center relative">
                <img src={category.category7} alt="c1" className="h-20 w-20" />
              </div>
              <span className="font-semibold text-lg">Other</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
