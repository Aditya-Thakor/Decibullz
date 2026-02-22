import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import AppRoutes from "./Routes/AppRoutes";
import Test1 from "./components/Slider/Test1";
import Test2 from "./components/Slider/Test2";
import CartProvider from "./Contexts/CartProvider";
import Test3 from "./components/Slider/Test3";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <CartProvider>
        <AppRoutes />
    </CartProvider> 
      
  </StrictMode>
);
