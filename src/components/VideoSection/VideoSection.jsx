import mv from '/src/assets/videos/video'
export default function VideoSection(){
    return(
<<<<<<< HEAD
        <div className="lg:h-screen w-full">
=======
        <div className="xl:h-screen w-full">
>>>>>>> e569bce99344326b3e65f2d8d8f0d16b34d5352d
            <video 
                src={mv.main}
                preload='auto'
                autoPlay
                loop
                muted
                className='h-full w-full object-fill'
            ></video>
        </div>
    )
}