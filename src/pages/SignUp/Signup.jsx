import { useState } from "react"

export default function Signup(){
    const [username,setUsername]=useState('');
    const [usernameStatus, setUsernameStatus]= useState(false)
    const [email,setEmail]=useState('');
    const [emailStatus, setEmailStatus]=useState(false)
    const [ password, setPassword] = useState('');
    const [passStatus, setPassStatus]= useState(false);
    const [image,setImage]= useState('');
    const [imgStatus, setImgStatus]= useState(false);
    
    const userData = new FormData();
    userData.append('username', username);
    userData.append('email', email);
    userData.append('password', password);
    userData.append('file', image);


    const handleSignup =async()=>{

        if(username.length===0){
            setUsernameStatus(true)
        }else{
              setUsernameStatus(false);
        }
        
        if(email.length===0){
            setEmailStatus(true)
        }else{
            setEmailStatus(false);
        } 
        
        if(password.length===0){
            setPassStatus(true)
        }else{
             setPassStatus(false);
        }
        
        if(image.length===0){
            setImgStatus(true)
        }else{
            setImgStatus(false);
        } 
        console.log(userData);

        if(username.length>0 && email.length>0 && password.length>0){
           await fetch('http://localhost:5000/userinfo',{
                method:'post',
                body:userData
            })
            .then(res=>res.json())
            .then((data)=>{
                return data;
            })
            .catch((err)=>{
                console.log('error at signup ', err);
                
            })
            //ERRORRRR 
        }
        else{
            console.log("error");
        }
        
    }

    return(
        <div className="h-screen flex justify-center items-center ">
           <div className="flex flex-col gap-3">
            <input 
                type="text"
                placeholder="Username"
                className="border border-slate-300 p-2 rounded-lg  "
                onChange={(e)=>setUsername(e.target.value)}
            />
            {usernameStatus ? <span className="text-sm text-red-600">Enter UserName!</span>:''}
            <input 
                type="email"
                placeholder="Email"
                className="border border-slate-300 p-2 rounded-lg  "
                onChange={(e)=>setEmail(e.target.value)}
            />
            {emailStatus ? <span className="text-sm text-red-600">Enter Email!</span>:''}
            <input 
                type="password"
                placeholder="password"
                className="border border-slate-300 p-2 rounded-lg  "
                onChange={(e)=>setPassword(e.currentTarget.value)}
            />
            {passStatus ? <span className="text-sm text-red-600">Enter Password!</span>:''}
            
            <input 
                type="file" 
                className="border border-gray-400 p-4 h-30 rounded-xl" 
                accept="image/*"
                onChange={(e)=>setImage(e.target.files[0])}
            />
            {imgStatus ? <span className="text-sm text-red-600">Upload Image!</span>:''}
            <button 
                className="border p-3 rounded bg-blue-500 text-white font-medium"
                onClick={handleSignup}
            >Submit</button>
           </div>
        </div>
    )
}