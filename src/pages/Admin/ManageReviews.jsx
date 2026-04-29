import { useState, useEffect } from "react";

export default function ManageReviews() {
  const [reviews, setReviews] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Edit Modal State
  const [editingReview, setEditingReview] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchReviews();
    fetchProducts();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch("http://localhost:5000/reviewsdata");
      const data = await res.json();
      setReviews(data.reverse()); // Show newest first
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/productdata");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        const res = await fetch(`http://localhost:5000/reviewsdata/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setReviews(reviews.filter(review => review._id !== id && review.id !== id));
          alert("Review deleted successfully.");
        } else {
          alert("Failed to delete review.");
        }
      } catch (error) {
        console.error("Error deleting review:", error);
        alert("An error occurred while deleting the review.");
      }
    }
  };

  const handleEditClick = (review) => {
    setEditingReview(review);
    // Try to find the matching product by name to pre-select it
    const foundProduct = products.find(p => p.productName === review.product);
    setSelectedProductId(foundProduct ? foundProduct._id : "");
    setEditFile(null); // Reset file input
  };

  const handleSaveEdit = async () => {
    if (!editingReview) return;
    
    setIsSaving(true);
    const selectedProd = products.find((p) => p._id === selectedProductId);
    
    // Use FormData for file uploads
    const formData = new FormData();
    if (editFile) {
      formData.append("file", editFile);
    }
    if (selectedProd) {
      formData.append("product", selectedProd.productName);
      formData.append("price", selectedProd.productPrice);
      formData.append("image", selectedProd.image);
    }

    try {
      const id = editingReview._id || editingReview.id;
      // Note: Assuming your backend has a PUT route for /reviewsdata/:id
      const res = await fetch(`http://localhost:5000/reviewsdata/${id}`, {
        method: "PUT",
        body: formData,
      });
      
      if (res.ok) {
        alert("Review updated successfully!");
        setEditingReview(null);
        fetchReviews(); // Refresh the list
      } else {
        alert("Failed to update review. Please check if the backend PUT route is implemented.");
      }
    } catch (error) {
      console.error("Error updating review:", error);
      alert("Error updating review.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-8 h-full overflow-y-auto relative">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 drop-shadow-sm">Manage Reviews</h1>
        <p className="text-gray-700 mt-2 font-medium">View and manage customer video reviews.</p>
      </div>

      <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-sm border border-white/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/40 border-b border-white/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Video URL / File</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/30">
              {isLoading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                    <i className="ri-loader-4-line text-2xl animate-spin inline-block"></i>
                    <p className="mt-2 font-medium">Loading reviews...</p>
                  </td>
                </tr>
              ) : reviews.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-500">
                    No reviews found.
                  </td>
                </tr>
              ) : (
                reviews.map((review) => (
                  <tr key={review._id || review.id || Math.random()} className="hover:bg-white/50 transition-colors group">
                    <td className="px-6 py-4 flex items-center gap-4">
                      {review.image ? (
                        <img
                          src={`http://localhost:5000/productImages/${review.image}`}
                          alt={review.product}
                          className="w-12 h-12 object-cover rounded-lg border border-white/50 shadow-sm bg-white"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm">
                          <i className="ri-image-line text-xl"></i>
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-gray-900">{review.product || "Unknown Product"}</div>
                        <div className="text-xs text-gray-500">ID: {review._id || review.id || "N/A"}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 truncate max-w-xs">
                      {review.file ? (
                         <a 
                           href={`http://localhost:5000/reviewVideos/${review.file}`} 
                           target="_blank" 
                           rel="noreferrer"
                           className="text-orange-500 hover:text-orange-600 underline flex items-center gap-1"
                         >
                           <i className="ri-external-link-line"></i> View Video
                         </a>
                      ) : "No Video"}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      ${Number(review.price || 0).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleEditClick(review)}
                        className="text-gray-400 hover:text-blue-500 transition-colors mr-3"
                        title="Edit Review"
                      >
                        <i className="ri-pencil-line text-lg"></i>
                      </button>
                      <button 
                        onClick={() => handleDelete(review._id || review.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Delete Review"
                      >
                        <i className="ri-delete-bin-line text-lg"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 w-full max-w-md p-6 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6 border-b border-gray-200/50 pb-4">
              <h2 className="text-xl font-bold text-gray-900">Edit Review</h2>
              <button 
                onClick={() => setEditingReview(null)}
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {/* Change Associated Product */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-800 text-sm">
                  Associated Product
                </label>
                <select
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-900"
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                >
                  <option value="">-- Choose a product --</option>
                  {products.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.productName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload New Video */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-800 text-sm">
                  Replace Video (Optional)
                </label>
                <div className="relative w-full h-24 border-2 border-dashed border-gray-300 rounded-lg bg-white/50 hover:bg-white transition-colors flex items-center justify-center cursor-pointer">
                  <input
                    type="file"
                    accept="video/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                      if (e.target.files[0]) setEditFile(e.target.files[0]);
                    }}
                  />
                  <div className="flex flex-col items-center text-gray-500 text-sm">
                    <i className="ri-video-upload-line text-2xl mb-1"></i>
                    <span className="font-medium text-center px-4 truncate w-full">
                      {editFile ? editFile.name : "Click to select a new video"}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Leave empty to keep the current video.</p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setEditingReview(null)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={isSaving}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {isSaving ? (
                  <><i className="ri-loader-4-line animate-spin"></i> Saving...</>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
