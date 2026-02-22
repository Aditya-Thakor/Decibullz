import SlideText from './SlideText'
import bg from '/src/assets/images/index.js'
export default function Slider(){

return(
    <div className="h-screen relative">
        <img src={bg.slide2} alt="slide2" className='h-full w-full' />
        <div className='absolute top-0 left-12'>
        <SlideText tagline="Custom Comfort. PRO Protection." p="Powerful noise reduction with all-day wearability and a perfect fit." btnText="SHOP CUSTOM EARPLUGS" btncolor=" #ef7929 " />
        </div>
    </div>
)
}

