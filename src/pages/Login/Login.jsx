import { useNavigate } from 'react-router-dom';
import l from '../../assets/images/index';
import { useEffect, useState } from 'react';
export default function Login(){
    const [email, setEmail] = useState();
    const [password,setPassword]= useState();

    const navigate = useNavigate();

    useEffect(()=>{
        // fetch('http://localhost:5000/admininfo')
        // .then(res=>res.json())
        // .then((data)=>{
        //     setAdmin(data)
        //     console.log(data);            
        // })
        // .catch((err)=>{
        //     console.log("error at admin info" , err);
            
        // })
    },[])

    const handleLogin=async()=>{
        
        const formData1 = new FormData();
        formData1.append("email", email);
        formData1.append("password",password);
        
        const result = await fetch('http://localhost:5000/userlogin',{
                method:'post',
                body:formData1,  
            }).then(res=>res.json()).then((data)=>{
                return data;
            }).catch((err)=>{console.log("error at User Login", err)
            });
        
           
        if(result.length==0){
            alert("User didn't matched.. Please Signup first");
        }
        else{
            navigate('/')
            console.log("Login Success");
        }
              
    }

    
    // const navigate = useNavigate();
    return(
        <div className="h-screen flex justify-center items-center bg-slate-100">
           <div className="h-3/4 w-1/3 flex flex-col gap-5 bg-white rounded-xl shadow-md px-10 py-5 ">
                <div className='h-14 '>
                    <img 
                        src={l.logo} 
                        alt="logo" 
                        className='h-full w-full invert ' 
                        // onClick={()=>navigate('/')}
                    />
                </div>
                <div className='grid gap-3 grid-cols-1'>
                    <span className='text-2xl font-semibold'>Sign in</span>
                    {/* <span className='text-sm text-gray-700 font-light'>Choose how you'd like to sign in</span> */}
                    {/* <button 
                        type='button'
                        className='text-white bg-indigo-600 p-3 font-semibold rounded-lg hover:bg-indigo-700'
                    >
                        Sign in with Shop
                    </button> */}
                </div>
                {/* <div className='relative flex items-center justify-center'>
                    <span className='h-px w-full bg-gray-300'></span>
                    <span className='absolute w-15 text-gray-500 text-center bg-white '>or</span>
                </div> */}
                <div className='grid gap-4 grid-cols-1'>
                    <input 
                        type="text"
                        placeholder='Email'
                        className='border p-3 rounded-lg'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder='password'
                        className='border p-3 rounded-lg'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button 
                        className={` border rounded-lg p-4  text-sm font-bold bg-stone-50 hover:bg-indigo-700 hover:text-white `}
                        onClick={handleLogin}
                    >Continue</button>
                </div>
                <div className='flex items-center gap-3 text-blue-600 text-sm cursor-pointer'>
                    <span className='hover:underline'>Privacy Policy</span>
                    <span className='hover:underline'>Terms of Service</span>
                    <span 
                        className=' underline font-medium hover:text-slate-900'
                        onClick={()=>navigate('/signup')}
                    >Sign up</span>
                </div>
           </div>
        </div>
    )
}