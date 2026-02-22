// import images from "/src/assets/images";
import ReviewCard from "/src/components/ReviewCard/ReviewCard";
import { useEffect, useState } from "react";

export default function ReviewUploaderForm() {
  const [products, setProducts] = useState([]);

  // const[prdId,setPrdId]=useState('');
  const [reviewVideo, setReviewVideo] = useState('');
  const [review,setreview]=useState([]);
  const [preview,setPreview]= useState(false);
  const [prevVideo, setPrevVideo]= useState('')

  const [selectedP, setSelectedP] = useState(null);
//  console.log("selected product "+selectedP);
  const [prevData, setPrevData]= useState([]);
  var pdata;
   
  useEffect(() => {
    fetch("http://localhost:5000/productdata")
    // fetch("http://localhost:5000/dzproducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log("p data-"+ data);
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error at upload review" + error);
      });

      if(selectedP){
        //console.log(selectedP);
      }
      // if(review){
      //   console.log(review);
      // }

//get request
    fetch("http://localhost:5000/reviewsdata")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log('review data '+ data);
      // console.log('selected---'+selectedP);
    //  console.log(
    //    data.filter((p)=>{p._id==selectedP})
    //  ); // GIVES EMPTY ARRAY!!
        setreview(data)
        // console.log("re..."+review);
        
      //  const getdata=data.find((p)=>p._id==selectedP) // product select karvu otherwise its through an err!
      // setreview(getdata)
      // console.log("review"+ getdata);
    })
    .catch((err)=>{
      console.log("Error at reviews " + err);
    });

    if (prevData) {
      // console.log('prevdata-loaded');
    }
       
      
  }, {selectedP,prevData});



/*++++++++++++++++ HANDLE PREVIEW ++++++++++++++++++++++++++++++*/
  const handlePreview = () => {
       //const getreview = products.find((p)=>p._id==selectedP);
      //  console.log(getreview);
      // console.log("products");
      // console.log(products);
     
      const d = products.filter((t)=>t._id==selectedP);
      pdata=d[0];
      setPrevData(pdata);
      console.log('prevdata-', prevData); 
      
      setPreview(true);
  }
  

/*+++++++ REVIEW UPLOADER ++++++*/
  const handleReview = async() => {
    // condition is false!!!
    
    const selectedProd= products.find((p)=>p._id== selectedP);
    // console.log("sprd + ",selectedProd);
    
    // products.filter((p)=>p._id==selectedP? setSelected(p)
    // :'')
    //POST REQUEST 
    const formData = new FormData();
    formData.append("file", reviewVideo);
    formData.append("product", selectedProd.productName);
    formData.append("price", selectedProd.productPrice);
    formData.append("image", selectedProd.image);
    console.log("formdata",formData);
    const result = await fetch('http://localhost:5000/reviewsdata',{
      method:'post',
      body:formData
    });

    // testing dzapi---
    // const result = await fetch('http://localhost:5000/dzproducts',{
    //   method:'post',
    //   body:formData
    // });
    console.log(await result.text());
    
    // console.log("p = ",selectedP);
    // console.log(review)
    // review.filter((pid)=>console.log(pid._id===selectedP))
  };

  // VIDEO PREVIEW
  const handleFile = (event)=>{
    const fle = event.target.files[0];
    if(fle){
      setPrevVideo(URL.createObjectURL(fle));
      setReviewVideo(fle);
    }
  }

  return (
    <div className="h-full gap-2 w-full flex items-center">
      <div className="h-full w-1/2">
        <form className="h-full p-2">
          <span className="text-orange-400 font-semibold ml-3 border-b-2 border-orange-400 text-5xl">
            Upload Review
          </span>
          <div className="mt-9">
            <div className="flex flex-col">
              <label
                htmlFor="review-video"
                className="font-semibold text-xl whitespace-nowrap mb-2"
              >
                Upload Review Video :
              </label>
                <input 
                    type="file" 
                    className="border h-32" 
                    onChange={handleFile}
                />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="review-video"
                className="font-semibold text-xl whitespace-nowrap mb-2"
              >
                Select Product :
              </label>
              <select
                type="file"
                className="border outline-none h-10 focus:border-orange-400"
                // value={selectedP}
                onChange={(e) => {setSelectedP(e.target.value)
                    // console.log(selectedP);
                }}
              >
                <option value="">Select Product</option>
                {products.map((p, ind) => (
                   <option 
                    key={ind} value={p._id} className="p-2 bg-slate-50">
                        {p.productName} 
                        {/* {p._id} */}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-10 w-full ">
              <button
                className="border-2 border-[#4ba7ff] font-semibold p-3 w-full hover:border-0 hover:text-white hover:bg-[#4ba7ff] "
                type="button"
                onClick={handlePreview}
              >
                Preview
              </button>
            </div>
          </div>
        </form>
      </div>
      {
        preview? <div
        className="h-full w-1/2 bg-white/30 backdrop-blur-md rounded-lg border-white/30 flex flex-col gap-3 justify-center items-center "
      >
        <div>
          <ReviewCard 
            video={prevVideo} 
            pimg={prevData.image}
            price={prevData.productPrice} 
            pname={prevData.productName}
            /> 
        </div>

        <button
            className="border-2 border-orange-300 font-semibold p-3 w-full hover:border-0 hover:text-white hover:bg-orange-400 "
            
            type="button"

            onClick={handleReview}
          >
                Upload review
          </button>

      </div>
      :
      ''
      }
      
    </div>
  );
}
