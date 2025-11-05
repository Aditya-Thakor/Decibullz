import { useState } from "react";
import bg from "/src/assets/images/index.js";
import ItemCard from "/src/components/ItemCard/Itemcard";
import itmImage from "/src/assets/images/index.js";
import { ImagePlay, Upload } from "lucide-react";

export default function ItemUploaderForm() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [itemImage, setItemImage] = useState(null);
  const [ofr,setOfr] =useState(false);
  const [offerAmount, setOfferAmount]=useState(0);

  const [preview, setPreview] = useState(false);

  const handleItem = async() => {
    // const data ={
    //   productName: itemName,
    //   productPrice: price,
    //   offer:offerAmount,
    //   image:itemImage
    // }
    const formData= new FormData();
    formData.append("productName", itemName);
    formData.append("productPrice", price);
    formData.append("offer", offerAmount);
    formData.append("file", itemImage);

    

    // let d = JSON.stringify(data);

    const result = await fetch('http://localhost:5000/productdata', {
      method:'post',
      body:formData
    });

    //testing dzapi---
    // const result = await fetch('http://localhost:5000/dzproducts', {
    //   method:'post',
    //   body:formData
    // });

    console.log(await result.text());
    
    // if (itemName.length !== 0 && price !== 0) {
    //   setPreview(true);
    // } else {
    //   setPreview(false);
    // }
  };
   
  const handlePreview = () =>{
    if (itemName.length !== 0 && price !== 0) {
      setPreview(true);
    } else {
      setPreview(false);
    }
  }
  

  return (
    <div
      className="flex w-full h-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.IUbg})` }}
    >
      <div className="w-1/2 h-screen">
        <form className="h-full p-3 bg-transparent">
          <span className="text-orange-400 font-semibold ml-3 border-b-2 border-orange-400 text-5xl">
            Upload Your Item
          </span>

          <div className="h-4/5 flex flex-col items-center justify-center gap-5 mt-9">
            {/* Item Name */}
            <div className="w-full flex justify-start items-center gap-3">
              <label
                htmlFor="itemName"
                className="font-semibold text-xl whitespace-nowrap"
              >
                Enter item Name:
              </label>
              <input
                type="text"
                id="itemName"
                className="w-full bg-transparent border-2 border-slate-400 px-2 py-1 focus:outline-none focus:border-orange-500"
                value={itemName}
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              />
            </div>

            {/* Item Price */}
            <div className="w-full flex justify-start items-center gap-3">
              <label
                htmlFor="itemPrice"
                className="font-semibold text-xl whitespace-nowrap"
              >
                Enter item Price:
              </label>
              <input
                type="number"
                id="itemPrice"
                className="w-full bg-transparent border-2 border-slate-400 px-2 py-1 focus:outline-none focus:border-orange-500"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            {/* Add Offer */}
            <div className="w-full flex justify-start items-center gap-3">
              <label
                 htmlFor="offer"
                 className="font-semibold text-xl whitespace-nowrap"
              >
                want to Add Offer? 
                <input type="checkbox" id="offer" className="ms-3 scale-125 " checked={ofr} onChange={()=>{  ofr==false? setOfr(true): setOfr(false) }} />

              </label>
                {
                  ofr==true? 
                      <input
                        type="number"
                        className="w-full bg-transparent border-2 border-slate-400 px-2 py-1 focus:outline-none focus:border-orange-500"
                        placeholder="Add Offered Amount..."
                        value={offerAmount}
                        onChange={(e)=>setOfferAmount(e.target.value)}
                      >

                      </input>
                  :""
                }
            </div>

            {/* Upload Image */}
            <div className="w-full flex flex-col gap-2 relative">
              <label
                htmlFor="itemImage"
                className="font-semibold text-xl whitespace-nowrap"
              >
                Upload item Image:
              </label>
              <i className="ri-file-upload-line absolute top-1/2 start-1/3 text-7xl"></i>
              <input
                type="file"
                id="itemImage"
                className="w-full h-40 bg-transparent border-2 border-slate-400 p-2 focus:border-orange-500"
                onChange={(e) => {
                  setItemImage(e.target.files[0]);
                }}
              />
            </div>

            {/* Button */}
            <div className="w-full flex gap-4">
              <button
                className="w-1/2 flex gap-4 items-center justify-center bg-slate-900 text-xl shadow-xl rounded-none py-3 px-8 font-bold text-[#ef7929] text-center hover:text-slate-900 hover:bg-[#4ba7ff]"
                type="button"
                onClick={handlePreview}
              >
                <ImagePlay /> Preview
              </button>

              <button
                className="w-full flex gap-4 items-center justify-center bg-slate-900 text-xl shadow-xl rounded-none py-3 px-8 font-bold text-[#ef7929] text-center hover:text-slate-900 hover:bg-[#ef7929]"
                //   style={{ backgroundColor: "#ef7929" }}
                type="button"
                onClick={handleItem}
              >
                <Upload /> Upload Item
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Item oreview  */}
      {preview ? (
        <div className="w-1/2 h-screen flex justify-center items-center">
          <div className="w-4/5 h-4/5 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex items-center justify-center">
            <div className="max-h-4/5 max-w-4/5">
              <ItemCard
                itmImg={itmImage.product1}
                price={price}
                title={itemName}
                btnWorking={false}
                offer={offerAmount}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* <div className="w-1/2 h-screen flex justify-center items-center">
        <div class="w-4/5 h-4/5 bg-white/30 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex items-center justify-center">
        <div className=" ">
                <ItemCard itmImg={itmImage.product1} price={price} title={itemName} btnWorking={true} />
        </div>     
        </div>
      </div> */}
    </div>
  );
}
