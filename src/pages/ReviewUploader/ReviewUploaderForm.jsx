import { useEffect, useState } from "react";
import ReviewCard from "/src/components/ReviewCard/ReviewCard";
import { Video, Eye, Upload } from "lucide-react";

export default function ReviewUploaderForm() {
  const [products, setProducts] = useState([]);
  const [reviewVideo, setReviewVideo] = useState(null);
  const [preview, setPreview] = useState(false);
  const [prevVideo, setPrevVideo] = useState("");
  const [selectedP, setSelectedP] = useState("");
  const [prevData, setPrevData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/productdata")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handlePreview = () => {
    if (!selectedP || !reviewVideo) {
      alert("Please select a product and upload a video first.");
      return;
    }
    const selectedProd = products.find((p) => p._id === selectedP);
    if (selectedProd) {
      setPrevData(selectedProd);
      setPreview(true);
    }
  };

  const handleReview = async () => {
    if (!selectedP || !reviewVideo) return;

    const selectedProd = products.find((p) => p._id === selectedP);
    
    const formData = new FormData();
    formData.append("file", reviewVideo);
    formData.append("product", selectedProd.productName);
    formData.append("price", selectedProd.productPrice);
    formData.append("image", selectedProd.image);

    try {
      const result = await fetch("http://localhost:5000/reviewsdata", {
        method: "post",
        body: formData,
      });
      console.log(await result.text());
      alert("Review uploaded successfully!");
      setReviewVideo(null); setPrevVideo(""); setSelectedP(""); setPreview(false); setPrevData(null);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPrevVideo(URL.createObjectURL(file));
      setReviewVideo(file);
    }
  };

  return (
    <div className="p-8 h-full overflow-y-auto flex gap-8">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 drop-shadow-sm">Upload Video Review</h1>
          <p className="text-gray-700 mt-2 font-medium">Link a customer video review to an existing product.</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-8 flex-1">
          <form className="flex flex-col gap-6">
            
            {/* Upload Video */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-800">
                Review Video (MP4/WebM)
              </label>
              <div className="relative w-full h-32 border-2 border-dashed border-gray-400/50 rounded-lg bg-white/30 hover:bg-white/50 transition-colors flex items-center justify-center cursor-pointer">
                <input
                  type="file"
                  accept="video/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFile}
                />
                <div className="flex flex-col items-center text-gray-600">
                  <Video size={32} className="mb-2" />
                  <span className="font-medium">{reviewVideo ? reviewVideo.name : "Click to select a video file"}</span>
                </div>
              </div>
            </div>

            {/* Select Product */}
            <div className="flex flex-col gap-2">
              <label htmlFor="productSelect" className="font-bold text-gray-800">
                Select Associated Product
              </label>
              <select
                id="productSelect"
                className="w-full bg-white/50 border border-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-900 font-medium shadow-sm appearance-none"
                value={selectedP}
                onChange={(e) => setSelectedP(e.target.value)}
              >
                <option value="">-- Choose a product --</option>
                {products.map((p) => (
                  <option key={p._id} value={p._id} className="text-gray-900 bg-white">
                    {p.productName}
                  </option>
                ))}
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={handlePreview}
                className="w-full flex justify-center items-center gap-2 bg-white/80 hover:bg-white text-gray-800 font-bold py-3 px-6 rounded-lg shadow-sm border border-gray-200 transition-all"
              >
                <Eye size={20} /> Generate Preview
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-start pt-24">
        {preview && prevData ? (
          <div className="w-full max-w-sm bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl p-6 flex flex-col items-center animate-fade-in-up">
            <h3 className="text-center font-bold text-gray-500 uppercase tracking-widest mb-6 w-full border-b border-white/50 pb-2">Live Preview</h3>
            
            <div className="w-full">
              <ReviewCard 
                video={prevVideo} 
                pimg={prevData.image}
                price={prevData.productPrice} 
                pname={prevData.productName}
              /> 
            </div>

            <button
              type="button"
              onClick={handleReview}
              className="mt-8 w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all"
            >
              <Upload size={20} /> Publish Review
            </button>
          </div>
        ) : (
          <div className="w-full max-w-sm h-96 border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center text-gray-500 bg-white/20 backdrop-blur-sm">
            <div className="text-center">
              <Eye size={48} className="mb-2 mx-auto opacity-50" />
              <p className="font-medium">Select a product, upload video,<br/>and click Generate Preview</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
