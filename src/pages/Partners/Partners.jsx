import pr from '/src/assets/images/index';
export default function Partners(){
const partners = [
    pr.partner7,
    pr.partner1,
    pr.partner4,
    pr.partner6,
    pr.partner3,
    pr.partner2,
    pr.partner5,
    pr.partner8,
]


    return(
        <div className="h-3/5 flex items-center  flex-col px-10 mt-16">
            <div className="text-center">
                <h2 className="text-orange-600/95 font-bold text-2xl lg:text-4xl">A TRUSTED HEARING PROTECTION & EARPLUG PARTNER</h2>
            </div>
            <div className="h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10 ">
                {
                   partners.map((itm,ind)=>(
                    <img 
                        key={ind} 
                        src={itm} 
                        alt="partner-logo" 
                        className='size-70 sm:h-24 p-2 sm:p-5'
                    />
                   ))
                }
            </div>
        </div>
    )
}