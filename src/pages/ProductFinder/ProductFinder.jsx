import { Crosshair } from "lucide-react";
import Nav3 from "/src/components/Navbar/Nav3";

import category from "../../assets/images/index";
import { useNavigate } from "react-router-dom";
import Footer from "/src/components/Footer/Footer";

export default function ProductFinder() {

    const navigate = useNavigate();

  return (
    <div className="h-auto  ">
      <Nav3 />
      <div className="h-auto md:h-screen w-full mt-30 mb-10 lg:mt-40">
        <div className="h-auto md:h-3/4 lg:h-full w-full flex flex-col gap-7 justify-center items-center ">
          <h1 className=" text-4xl sm:text-3xl text-wrap text-center font-bold">
            What do you need Decibullz for?
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10 text-center sm:px-10 font-bold ">
            <div 
              className="w-3/4 m-auto sm:m-0 h-50 sm:w-full flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer"
              onClick={()=>{
                        navigate('/productfinder/hunting')
                    }}
            >
              <div 
                    className="flex items-center justify-center relative"    
              >
                <img src={category.category1} alt="c1" className="h-20 w-20" />
              </div>
              <span className=" sm:font-semibold text-lg">Hunting, Shooting</span>
            </div>

            <div 
              className="w-3/4 m-auto sm:m-0 h-50 sm:w-full flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer"
              onClick={()=>{
                        navigate('/productfinder/industrial')
                    }}
            >
              <div 
                className="flex items-center justify-center relative" 
              >
                <img src={category.category2} alt="c1" className="h-20 w-20" />
              </div>
              <span className="sm:font-semibold text-lg">DIY, Industrial, Manufacturing</span>
            </div>

            <div 
              className="w-3/4 m-auto sm:m-0 h-50 sm:w-full flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer"
              onClick={()=>{
                        navigate('/productfinder/events')
                    }}
            >
              <div 
                    className="flex items-center justify-center relative" 
              >
                <img src={category.category3} alt="c1" className="h-20 w-20" />
              </div>
              <span className="sm:font-semibold text-lg ">Attending Events, Music, Concerts</span>
            </div>

            <div 
              className="w-3/4 m-auto sm:m-0 h-50 sm:w-full flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer "
              onClick={()=>{
                navigate('/productfinder/sleep')
              }}
            >
              <div className="flex items-center justify-center relative" >
                <img src={category.category4} alt="c1" className="h-20 w-20" />
              </div>
              <span className="sm:font-semibold text-lg">Sleep, Sensory Relief, Focus</span>
            </div>

            <div 
              className="w-3/4 m-auto sm:m-0 h-50 sm:w-full flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer "
              onClick={()=>{
                navigate('/productfinder/sports')
              }}
            >
              <div className="flex items-center justify-center relative" >
                <img src={category.category5} alt="c1" className="h-20 w-20" />
              </div>
              <span className="sm:font-semibold text-lg">MotorSports</span>
            </div>

            <div 
              className="w-3/4 m-auto sm:m-0 h-50 sm:w-full p-5 flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer "
              onClick={()=>{
                navigate('/productfinder/radio')
              }}
            >
              <div className="flex items-center justify-center relative">
                <img src={category.category6} alt="c1" className="h-20 w-20" />
              </div>
              <span className="sm:font-semibold text-lg">Radio, Communications</span>
            </div>

            <div className="w-3/4 m-auto sm:m-0 h-50 sm:w-full  flex flex-col gap-5 justify-center items-center  border border-black rounded-xl hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 hover:transition hover:ease-in-out cursor-pointer "
              onClick={()=>{
                navigate('/shop')
              }}
            >
              <div className="flex items-center justify-center relative">
                <img src={category.category7} alt="c1" className="h-20 w-20" />
              </div>
              <span className="sm:font-semibold text-lg">Other</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
