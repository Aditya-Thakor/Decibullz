import OrangeBtn from '../Button/OrangeBtn'
export default function Banner({bg,title,text, textColor , order,btnText,pfp, top=' top-20 ' }){
    
    return(
        <div 
            className='h-full flex justify-between items-center gap-20 px-10'
            style={{
                backgroundImage:`url(${bg})`, 
                backgroundPosition:"center",
                backgroundSize:"contain",
            }}
        >
           <div 
                className={ ` flex  w-1/2   ${textColor} flex-col justify-center items-start gap-8  ${order} `}
            >
                <h1 className='text-5xl font-bold'>{title}</h1> 
                <span className=' font-normal  ' >{text}</span>
                <OrangeBtn text={btnText} />
           </div>
           <div className={`' relative '`}>
            <img 
                src={pfp} 
                alt="pfp" 
                className={` ' relative  ' ${top} `}
            />
           </div>
        </div>
    )
}