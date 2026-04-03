import Banner from "./Banner";
import br from '/src/assets/images/index'
export default function AdsSection() {

    const banners = [

        {
            bg: br.blackBg ,
            title: "HUNTING" ,
            text: "When peak sound pressure (gunshots & explosions) reach your ear, our moldable custom ear plug shooting filters suppress damaging levels in real-time without the use of batteries. Unlike traditional earplugs, percussive filters allow for full situational awareness.", 
            pfp: br.pfp2 ,
            btnText: "Shop Hunting",
            textColor: "text-white"
        },
        {
            bg: br.whiteBg,  
            title: "INDUSTRIAL", 
            text: "Around 14% of noise-exposed manufacturing workers suffer from hearing impairment (NIOSH). Premium ear protection for factories, manufacturing, construction, and more. Decibullz custom moldable ear plugs ensure your and your employees' hearing safety.", 
            pfp: br.pfp5 ,
            btnText: "Shop Industrial",
            textColor: "text-black",
            order: "order-1"
        }
        ,

        {
            bg: br.blackBg ,
            title: "COMMUNICATION", 
            text: "You and your team needs a reliable, clear, and safe way to stay in contact. Decibullz custom molded earpieces for radio and communication keep clear acoustic tube listen-only and two-way radios secure and comfortable all day everyday. Used by police, fire, industrial workers, first responders, and outdoorsmen worldwide to keep headsets and earpieces in place.", 
            pfp: br.pfp1,
            btnText: "Shop Radio & Comms",
            textColor: "text-white"
        },
        {
            bg:  br.whiteBg , 
            title: "CONCERTS & MUSIC", 
            text: "Protect your hearing while still enjoying all of the sounds around you. Stay in the loop as you experience concerts, sporting events, festivals and live music. Don't sacrifice sound quality to save your hearing with Decibullz custom molded professional acoustic filtering earplugs.", 
            pfp: br.pfp3, 
            btnText: "Shop Concerts & Events ",
            textColor: "text-gray-900",
            order: "order-1"
        },
        {
            bg:  br.blackBg , 
            title: "SPORT SHOOTING", 
            text: "Decibullz earplugs excel in sport shooting by providing a secure and comfortable fit that remains snug even when you're on the move. The THERMO-FIT earpiece molds perfectly to your ears, guaranteeing a secure comfortable fit as you navigate the range, ensuring optimal noise protection without any distractions.", 
            pfp: br.pfp4 ,
            btnText: "Shop Sport Shooting",
            top: "bottom-20",
            textColor: "text-white"
        }
    ]

    return (
        <>

            <div className="h-auto hidden lg:block" >
                {/* large screen banners */}
                {banners.map((bnr,ind)=>(
                    <Banner
                    key={ind}
                    bg={bnr.bg}
                    title={bnr.title}
                    text={bnr.text}
                    pfp={bnr.pfp}
                    btnText={bnr.btnText}
                    textColor={bnr.textColor}
                    order={bnr.order}
                    top={bnr.top}
                />
                ))}

            </div>

            {/* <div className="h-screen block lg:hidden" > */}
            {/* small screen banners */}
            {/* <Banner 
                bg={br.blackBgMobile} 
                title="HUNTING" 
                text="When peak sound pressure (gunshots & explosions) reach your ear, our moldable custom ear plug shooting filters suppress damaging levels in real-time without the use of batteries. Unlike traditional earplugs, percussive filters allow for full situational awareness." 
                pfp={br.pfp2}
                btnText="Shop Hunting"
                textColor="text-white"
            />
            <Banner 
                bg={br.whiteBgMobile} 
                title="INDUSTRIAL" 
                text="Around 14% of noise-exposed manufacturing workers suffer from hearing impairment (NIOSH). Premium ear protection for factories, manufacturing, construction, and more. Decibullz custom moldable ear plugs ensure your and your employees' hearing safety." 
                pfp={br.pfp5}
                btnText="Shop Industrial"
                textColor="text-black"
                order="order-1"
            />
            <Banner 
                bg={br.blackBgMobile} 
                title="COMMUNICATION" 
                text="You and your team needs a reliable, clear, and safe way to stay in contact. Decibullz custom molded earpieces for radio and communication keep clear acoustic tube listen-only and two-way radios secure and comfortable all day everyday. Used by police, fire, industrial workers, first responders, and outdoorsmen worldwide to keep headsets and earpieces in place." 
                pfp={br.pfp1}
                btnText="Shop Radio & Comms"
                textColor="text-white"
            />
            <Banner 
                bg={br.whiteBgMobile} 
                title="CONCERTS & MUSIC" 
                text="Protect your hearing while still enjoying all of the sounds around you. Stay in the loop as you experience concerts, sporting events, festivals and live music. Don't sacrifice sound quality to save your hearing with Decibullz custom molded professional acoustic filtering earplugs." 
                pfp={br.pfp3}
                btnText="Shop Concerts & Events "
                textColor="text-gray-900"
                order="order-1"
            />
            <Banner 
                bg={br.blackBgMobile} 
                title="SPORT SHOOTING" 
                text="Decibullz earplugs excel in sport shooting by providing a secure and comfortable fit that remains snug even when you're on the move. The THERMO-FIT earpiece molds perfectly to your ears, guaranteeing a secure comfortable fit as you navigate the range, ensuring optimal noise protection without any distractions." 
                pfp={br.pfp4}
                btnText="Shop Sport Shooting"
                top="bottom-20"
                textColor="text-white"
            /> */}

            {/* </div> */}
        </>
    )
}