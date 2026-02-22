import vid from '../../assets/videos/video';
import img from '../../assets/images/index';
import { useNavigate } from 'react-router-dom';
export default function MobileHS(){
    const navigate = useNavigate();
    return(
        <div className="block md:hidden h-screen w-full relative overflow-hidden">
            <div className='max-h-min w-full absolute top-0 left-0 overflow-hidden '> 
                <video 
                    src={vid.mobileHV}
                    autoPlay
                    muted
                    loop
                    className='h-full w-full  object-fill scale-110 '
                > 
                </video> 
            </div>
            <div className='h-full w-full text-center font-bold flex flex-col gap-5 items-center justify-center absolute top-0 left-0'>
                <img src={img.soundon} alt="" className='h-30 w-80 ' />
                <h1 className=' text-3xl'>THE PERFECT FIT. THE PERFECT GIFT.</h1>
                <h5 className=' text-lg  px-7'>
                    Give PRO-Grade Protection Built for Performance and Comfort. Save 10% SITE-WIDE This Holiday Season.
                    <strong className='font-bold'> USE CODE SOTS10</strong>
                </h5>
                <button
                 className='bg-[#f83a3a] text-white px-7 py-3'
                 onClick={()=>{
                    navigate('/shop')
                 }}
                >SHOP NOW !</button>
            </div> 
        </div>
    )
}