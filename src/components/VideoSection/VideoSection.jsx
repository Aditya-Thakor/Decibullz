import mv from '/src/assets/videos/video'
export default function VideoSection(){
    return(
        <div className="xl:h-screen w-full">
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