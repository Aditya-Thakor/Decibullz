import ReviewCard from "/src/components/ReviewCard/ReviewCard";
import { useEffect, useState } from "react"

export default function Review(){
    const [review, setReview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviewsdata`)
        .then((res)=>res.json())
        .then((data)=>{
            // console.log("data => ");
            // console.log(data);
            setReview(data)
        })
        .catch((error)=>console.log('error at getting review data' + error)
        )
    },[])
    return(
    <div className="h-screen ">
        <div className="h-1/5  flex items-center justify-center text-xl sm:text-4xl font-bold text-[#1a1a1a]">
            <h2>STEP UP YOUR EARPLUG GAME</h2>
        </div>
        <div className="flex justify-center items-center   ">
            <div className="h-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 ">
                {
                    review.map((itm)=>(
                        <ReviewCard key={itm._id} video={"http://localhost:5000/reviewVideo/"+itm.video} pimg={itm.image} price={itm.price} pname={itm.product} />
                    ))
                }
            </div>
        </div>
    </div>
    )
}