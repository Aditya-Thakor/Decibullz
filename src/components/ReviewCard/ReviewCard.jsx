// import vdo from '/src/assets/videos/review/review1.mp4';
// import p from '/src/assets/images/index.js'
export default function ReviewCard({video,pimg,pname,price}){
    return(
        <div 
            className="h-full w-72 relative object-contain"
        >
          <div
            className='h-full w-full '
          >
            <div className='h-full w-full  '>
                <video
                    // height={100}
                    src={video}
                    controls={true}
                    autoPlay={true}
                    loop={true}
                    className='h-full w-full object-fill '
                    >
                </video>
            </div>
            <div className='h-24 w-full flex items-center gap-3 px-3 bg-white/30 backdrop-blur-md absolute bottom-0'>
                <div className='w-1/4'>
                    <img 
                        src={`http://localhost:5000/productImages/${pimg}`} alt="product" 
                        className=''
                    />
                </div>
                <div
                    className='w-3/4 flex flex-col'
                >
                    <span className='text-wrap text-xs'>
                        {pname}
                    </span>
                    <span className='font-semibold'>$ {price}</span>
                </div>
            </div>
          </div>
        </div>
    )
}