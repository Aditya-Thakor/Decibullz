import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar/Navbar";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/navbar" element={<Navbar/>}></Route>
            </Routes>
        </Router>
    )
}