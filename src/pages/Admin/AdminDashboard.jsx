import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    pendingReviews: 0,
    totalOrders: 340, // Mock data for now
    revenue: "$12,450", // Mock data for now
  });

  const [recentProducts, setRecentProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch Products
        const prodRes = await fetch("http://localhost:5000/productdata");
        const prodData = await prodRes.json();

        // Fetch Reviews
        const revRes = await fetch("http://localhost:5000/reviewsdata");
        const revData = await revRes.json();

        // Update Stats
        setStats(prev => ({
          ...prev,
          totalProducts: prodData.length || 0,
          pendingReviews: revData.length || 0,
        }));

        // Format products and set state for both recent and all products
        const formattedProducts = prodData.reverse().map(p => ({
          _id: p._id || p.id,
          productName: p.productName,
          productPrice: p.productPrice,
          image: p.image,
          category: p.category || "Uncategorized",
          date: new Date().toLocaleDateString() // Using current date since backend might not have a createdAt field
        }));
        setRecentProducts(formattedProducts.slice(0, 5));
        setAllProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statsCards = [
    {
      colors:"bg-orange-100 text-orange-500",
      icon: <i className="ri-shopping-bag-3-fill"/>,
      title:"Total Products",
      stats:isLoading ? "..." : stats.totalProducts
    },
    {
      colors:"bg-blue-100 text-blue-500",
      icon:  <i className="ri-star-smile-fill"/>,
      title:"Total Reviews",
      stats:isLoading ? "..." : stats.pendingReviews
    },
    {
      colors:"bg-green-100 text-green-500",
      icon:  <i className="ri-shopping-cart-fill"></i>,
      title:"Total Orders",
      stats:isLoading ? "..." : stats.totalOrders
    },
    {
      colors:" bg-purple-100 text-purple-500 ",
      icon:  <i className="ri-wallet-3-fill"></i>,
      title:"Total Revenue",
      stats:isLoading ? "..." : stats.revenue
    },
  ]

  const ptHeadings=["Product Name","Category","Price","Date Added","Actions"]

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center gap-4">
          <button className="bg-white/60 backdrop-blur-sm border border-white/50 p-2 rounded-full shadow-sm text-gray-800 hover:text-orange-600 transition-colors">
            <i className="ri-notification-3-line text-xl"></i>
          </button>
          <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
            A
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
       {statsCards.map((stat,ind)=>(
         <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/50 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className={`h-12 w-12 ${stat?.colors} rounded-full  flex items-center justify-center text-2xl `}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
            <h3 className="text-2xl font-bold text-gray-900">
              {stat.stats}
            </h3>
          </div>
         </div>
       ))}        
      </div>

      {/* Products Table */}
      <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-sm border border-white/50 overflow-hidden">
        <div className="px-6 py-5 border-b border-white/40 flex justify-between items-center bg-transparent">
          <h2 className="text-lg font-bold text-gray-900">
            {showAllProducts ? "All Uploaded Products" : "Recently Uploaded Products"}
          </h2>
          <button 
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="text-sm text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            {showAllProducts ? "View Recent Products" : "View All Products"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/40 border-b border-white/50">
                {ptHeadings.map((th,ind)=>(
                  <th className="px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider" key={ind} >{th}</th>
                ))}               
              </tr>
            </thead>
            <tbody className="divide-y divide-white/30">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                    <i className="ri-loader-4-line text-2xl animate-spin inline-block"></i>
                    <p className="mt-2 font-medium">Loading products...</p>
                  </td>
                </tr>
              ) : (showAllProducts ? allProducts : recentProducts).length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    No products found. Start uploading some!
                  </td>
                </tr>
              ) : (
                (showAllProducts ? allProducts : recentProducts).map((product) => (
                  <tr key={product._id || Math.random()} className="hover:bg-white/50 transition-colors group">
                    <td className="px-6 py-4 flex items-center gap-4">
                      {product.image ? (
                        <img
                          src={`http://localhost:5000/productImages/${product.image}`}
                          alt={product.productName}
                          className="w-12 h-12 object-cover rounded-lg border border-white/50 shadow-sm bg-white"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm">
                          <i className="ri-image-line text-xl"></i>
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-gray-900">{product.productName}</div>
                        <div className="text-xs text-gray-500">ID: {product._id || "N/A"}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/50 border border-white/50 text-gray-700 shadow-sm">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      ${Number(product.productPrice).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {product.date}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-blue-500 transition-colors mr-3">
                        <i className="ri-pencil-line text-lg"></i>
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
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
    </div>
  );
}