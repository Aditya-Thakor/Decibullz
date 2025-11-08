import Admin from "/src/pages/Admin/Admin";
import App from "/src/App";
import Bestseller from "/src/pages/Bestseller/Bestseller";
import ItemUploaderForm from "/src/pages/ItemUploader/ItemUploaderForm";
import ProductFinder from "/src/pages/ProductFinder/ProductFinder";
import Shop from "/src/pages/Shop/Shop";
import Support from "/src/pages/Support/Support";
import {BrowserRouter as  Router, Routes,Route } from "react-router-dom";
import ReviewUploaderForm from "/src/pages/ReviewUploader/ReviewUploaderForm";
import AdminDashboard from "/src/pages/Admin/AdminDashboard";
import Test3 from "/src/components/Slider/Test3";
import Test2 from "/src/components/Slider/Test2";
import Cart from "/src/pages/Cart/Cart";
import Navbar from "/src/components/Navbar/Navbar";
import Checkout from "/src/pages/CheckOut/CheckOut";
import Login from "/src/pages/Login/Login";
import Signup from "/src/pages/SignUp/Signup";
import AdminLogin from "/src/pages/Login/AdminLogin";
import PageTemp from "/src/pages/Shop/PageTemp";
import BestSellerMain from "/src/pages/Bestseller/BestSellerMain";
import Hunting from "/src/pages/ProductFinder/Hunting";
import Industrial from "/src/pages/ProductFinder/Industrial";
import Events from "/src/pages/ProductFinder/Events";
import Radio from "/src/pages/ProductFinder/Radio";
import Sports from "/src/pages/ProductFinder/Sports";
import Sleep from "/src/pages/ProductFinder/Sleep";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>} ></Route>
                <Route path="/adminlogin" element={<AdminLogin/>} ></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>} ></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/productfinder" element={<ProductFinder/>}>
                </Route>
                <Route path="/productfinder/hunting" element={<Hunting/>}></Route>
                <Route path="/productfinder/industrial" element={<Industrial/>}></Route>
                <Route path="/productfinder/events" element={<Events/>}></Route>
                <Route path="/productfinder/radio" element={<Radio/>}></Route>
                <Route path="/productfinder/sports" element={<Sports/>}></Route>
                <Route path="/productfinder/sleep" element={<Sleep/>}></Route>
                <Route path="/bestseller" element={<BestSellerMain/>}></Route>
                <Route path="/support" element={<Support/>}></Route>
                <Route path="/uploadItem/uploadItemForm" element={<ItemUploaderForm/>}></Route>
                <Route path="/admin" element={<Admin/>}>
                    <Route path="/admin/uploadproduct" element={<ItemUploaderForm/>}></Route>
                    <Route path="/admin/uploadreview" element={<ReviewUploaderForm/>}></Route>
                    <Route path="/admin/admindashboard" element={<AdminDashboard/>} ></Route>
                </Route>
                <Route path="/cart" element={<Cart/>} ></Route>
                <Route path="/test" element={<Test2/>}></Route>
                <Route path="/nav" element={<Navbar/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path="/temp" element={<PageTemp/>}></Route>
            </Routes>
        </Router>
    )
}