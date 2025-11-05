import mainvdo from '/src/assets/videos/video.js';
// import bg from '/src/assets/images/index.js'
export default function AdminDashboard(){
    return(
        <div className="h-full w-full ">
            <div 
                className=' h-full w-full'
                // style={{background:`url(${bg.adminbg})`}}
            >
            <video 
                src={mainvdo.main}
                className='h-full w-full'
                controls={false}
                autoPlay={true}
                loop={true}
                >
            </video>
            </div>
        </div>
    )
}