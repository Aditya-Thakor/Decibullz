import "./App.css";
import AdsSection from "./components/AdsSection/AdsSection";
import ArticlesSection from "./components/Articles/ArticlesSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Footer from "./components/Footer/Footer";
import ItemCard from "./components/ItemCard/Itemcard";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import SliderMain from "./components/Slider/SliderMain";
import VideoSection from "./components/VideoSection/VideoSection";
import CartProvider from "./Contexts/CartProvider";
// import itm from './assets/images/index'
import Bestseller from "./pages/Bestseller/Bestseller";
import BestSellerSection from "./pages/Bestseller/BestSellerSection";
import Partners from "./pages/Partners/Partners";
import Review from "./pages/ReviewSection/Review";

function App() {
  return (
    <div className="h-screen bg-gray-500">
      
      
      
      <Navbar  />
      {/* <Slider /> */}
      {/* <SliderMain/>
      <BestSellerSection />
      <Review />
      <Partners />
      <VideoSection />
      <FeatureSection />
      <AdsSection />
      <ArticlesSection />
      <Footer/> */}
      
      
      
    </div>
  );
}

export default App;
