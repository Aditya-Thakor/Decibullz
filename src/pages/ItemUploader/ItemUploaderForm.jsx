import { useState } from "react";
import ItemCard from "/src/components/ItemCard/Itemcard";
import itmImage from "/src/assets/images/index.js";
import { ImagePlay, Upload } from "lucide-react";

export default function ItemUploaderForm() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const [ofr, setOfr] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");
  const [preview, setPreview] = useState(false);

  const handleItem = async () => {
    const formData = new FormData();
    formData.append("productName", itemName);
    formData.append("productPrice", price);
    formData.append("offer", offerAmount);
    formData.append("file", itemImage);

    try {
      const result = await fetch("http://localhost:5000/productdata", {
        method: "post",
        body: formData,
      });
      console.log(await result.text());
      alert("Product uploaded successfully!");
      setItemName(""); setPrice(""); setItemImage(null); setOfr(false); setOfferAmount(""); setPreview(false);
    } catch (error) {
      console.error("Upload error", error);
    }
  };

  const handlePreview = () => {
    if (itemName.length !== 0 && price !== "") {
      setPreview(true);
    } else {
      setPreview(false);
    }
  };

  return (
    <div className="p-8 h-full overflow-y-auto flex gap-8">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 drop-shadow-sm">Upload New Product</h1>
          <p className="text-gray-700 mt-2 font-medium">Add a new item to your store catalog.</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-8 flex-1">
          <form className="flex flex-col gap-6">
            
            {/* Item Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="itemName" className="font-bold text-gray-800">
                Product Name
              </label>
              <input
                type="text"
                id="itemName"
                className="w-full bg-white/50 border border-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-900 font-medium placeholder-gray-400 shadow-sm"
                placeholder="e.g. Decibullz Custom Earplugs"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>

            {/* Item Price */}
            <div className="flex flex-col gap-2">
              <label htmlFor="itemPrice" className="font-bold text-gray-800">
                Price ($)
              </label>
              <input
                type="number"
                id="itemPrice"
                className="w-full bg-white/50 border border-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-900 font-medium placeholder-gray-400 shadow-sm"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/* Add Offer */}
            <div className="flex flex-col gap-3 p-4 bg-orange-50/50 rounded-lg border border-orange-100/50">
              <label className="font-bold text-gray-800 flex items-center cursor-pointer gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-orange-500 rounded cursor-pointer"
                  checked={ofr}
                  onChange={() => setOfr(!ofr)}
                />
                Apply Special Offer / Discount
              </label>
              
              {ofr && (
                <input
                  type="number"
                  className="w-full bg-white/70 border border-white/50 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-900 shadow-sm"
                  placeholder="Discount Amount ($)"
                  value={offerAmount}
                  onChange={(e) => setOfferAmount(e.target.value)}
                />
              )}
            </div>

            {/* Upload Image */}
            <div className="flex flex-col gap-2">
              <label htmlFor="itemImage" className="font-bold text-gray-800">
                Product Image
              </label>
              <div className="relative w-full h-32 border-2 border-dashed border-gray-400/50 rounded-lg bg-white/30 hover:bg-white/50 transition-colors flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  id="itemImage"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setItemImage(e.target.files[0])}
                />
                <div className="flex flex-col items-center text-gray-600">
                  <i className="ri-image-add-line text-3xl mb-2"></i>
                  <span className="font-medium">{itemImage ? itemImage.name : "Click to upload image"}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={handlePreview}
                className="flex-1 flex justify-center items-center gap-2 bg-white/80 hover:bg-white text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm border border-gray-200 transition-all"
              >
                <ImagePlay size={20} /> Preview
              </button>
              <button
                type="button"
                onClick={handleItem}
                className="flex-[2] flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all"
              >
                <Upload size={20} /> Upload Product
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-start pt-24">
        {preview ? (
          <div className="w-full max-w-sm bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-6 animate-fade-in-up">
            <h3 className="text-center font-bold text-gray-500 uppercase tracking-widest mb-6">Live Preview</h3>
            <ItemCard
              itmImg={itemImage ? URL.createObjectURL(itemImage) : itmImage.product1}
              price={price}
              title={itemName}
              btnWorking={false}
              offer={offerAmount}
            />
          </div>
        ) : (
          <div className="w-full max-w-sm h-96 border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center text-gray-500 bg-white/20 backdrop-blur-sm">
            <div className="text-center">
              <i className="ri-eye-line text-4xl mb-2 block"></i>
              <p className="font-medium">Fill details and click Preview</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
