import pr from '/src/assets/images/index';
export default function Partners(){
const partners = [
    pr.partner1,
    pr.partner2,
    pr.partner3,
    pr.partner4,
    pr.partner5,
    pr.partner6,
    pr.partner7,
    pr.partner8,
]


    return(
        <div className="h-3/5 flex items-center  flex-col px-10 mt-16">
            <div className="text-center">
                <h2 className="text-orange-600/95 font-bold text-4xl">A TRUSTED HEARING PROTECTION & EARPLUG PARTNER</h2>
            </div>
            <div className="h-full grid grid-cols-4 mt-10 gap-10 ">
                {
                   partners.map((itm,ind)=>(
                    <img 
                        key={ind} 
                        src={itm} 
                        alt="partner-logo" 
                        className='h-24 p-5'
                    />
                   ))
                }
            </div>
        </div>
    )
}