import fr from '/src/assets/images/index'
export default function Features(){

    const features =[
        {
            feature:"Easy to Shape",
            icon: fr.feature5
        },
        {
            feature:"Secure & Comfortable",
            icon: fr.feature4
        },
        // {
        //     feature:"c",
        //     icon: fr.feature3
        // },
        {
            feature:"Reusable Cleanable",
            icon: fr.feature2
        },
        {
            feature:"High Isolation",
            icon: fr.feature1
        },
    ]
    return(
        <div className='flex justify-center items-center gap-5 sm:gap-32'>
            {
                features.map((itm,ind)=>(
                    <div 
                        key={ind}
                        className='flex flex-col items-center justify-center text-center gap-5'
                    >
                        <img 
                            src={itm.icon} 
                            alt="featureImage" 
                            className='h-10 sm:h-24'
                        />
                        <span>{itm.feature}</span>
                    </div>
                ))
            }
           
        </div>
    )
}