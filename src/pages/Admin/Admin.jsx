import { NavLink, Outlet } from "react-router-dom";
import bg from '/src/assets/images/index.js';

export default function Admin(){
    return(
        <div 
            className="h-screen  bg-white text-gray-900"
        >
           {/* <NavLink
             to='/admin/admindashboard'
             className="h-1/5 flex items-center px-8"
            //  style={{background:`url(${bg.IUbg})`}} 
            >
                <div className="flex items-center justify-start gap-3 ">
                   <i class="ri-user-fill text-3xl bg-white rounded-full px-3 py-2.5 "></i> 
                   <span className="text-white text-5xl font-semibold">ADMIN</span>
                </div>
           </NavLink> */}

           <div className="h-full flex "
                style={{background:`url(${bg.IUbg})`}} 
           >
                <div 
                    className="h-full w-1/5 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-lg bg-cover bg-center flex flex-col gap-2 items-start text-2xl pt-5 "
                    // style={{background:`url(${bg.IUbg})`}} 
                    //bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex flex-col  pt-5
                >
                    <NavLink
                        to='/admin/admindashboard'
                        className="h-1/5 flex items-center px-4"
                        //  style={{background:`url(${bg.IUbg})`}} 
                    >
                        <div className="flex items-center flex-wrap justify-start gap-3 ">
                            <i className="ri-user-fill text-3xl bg-white text-orange-500/80 rounded-full px-3 py-2.5 "></i> 
                            <span className="text-white text-5xl text-wrap font-semibold">ADMIN</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to='/' 
                        end={true}
                        className={({isActive})=> isActive ? "p-2 bg-gray-200 text-orange-500 font-semibold w-full" : "p-2 bg-white/30 hover:bg-gray-200 hover:text-orange-400 hover:font-semibold w-full"}
                    >Decibullz
                    </NavLink>
                    <NavLink 
                        to='/admin/uploadproduct'
                        className={({isActive})=> isActive?"p-2 bg-gray-200 text-orange-500 font-semibold w-full":"p-2 bg-white/30 hover:bg-gray-200 hover:text-orange-400 hover:font-semibold w-full"}
                    >Upload Product
                    </NavLink>
                    <NavLink 
                        to='/admin/uploadreview'
                        className={({isActive})=> isActive?"p-2 bg-gray-200 text-orange-500 font-semibold w-full":"p-2 bg-white/30 hover:bg-gray-200 hover:text-orange-400 hover:font-semibold w-full"}
                    >Upload Review 
                    </NavLink>
                </div>
                <div className="w-4/5">
                   <Outlet/>
                </div>
           </div>

        </div>
    )
}