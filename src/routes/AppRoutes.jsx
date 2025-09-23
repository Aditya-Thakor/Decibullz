import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar/Navbar";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>} ></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/productfinder" element={<ProductFinder/>}></Route>
                <Route path="/bestseller" element={<Bestseller/>}></Route>
                <Route path="/support" element={<Support/>}></Route>
                <Route path="/uploadItem/uploadItemForm" element={<ItemUploaderForm/>}></Route>
            </Routes>
        </Router>
    )
}
