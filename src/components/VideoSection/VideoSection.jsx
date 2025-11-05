import mv from '/src/assets/videos/video'
export default function VideoSection(){
    return(
        <div className="h-screen w-full">
            <video 
                src={mv.main}
                preload='auto'
                autoPlay
                loop
                className='h-full w-full object-fill'
            ></video>
        </div>
    )
}