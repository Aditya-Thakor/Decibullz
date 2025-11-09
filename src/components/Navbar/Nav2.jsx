import { Handbag, HandbagIcon } from 'lucide-react'
import lg from '../../assets/images/index'
import { useNavigate } from 'react-router-dom'
export default function Nav2(){
    const navlink=useNavigate();
    return(
        <div className="h-[13%] flex justify-between px-10 items-center gap-3  bg-white border-b border-gray-300">
            <img 
                className='h-20 p-3 invert'
                src={lg.logo} alt="main-log" 
                onClick={()=>navlink('/')}
            />
            <span>
                <Handbag 
                    className='text-blue-500' 
                    onClick={()=>navlink('/cart')}
                />
                </span>
        </div>
    )
}