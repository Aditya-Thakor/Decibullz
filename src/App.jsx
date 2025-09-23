import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
  <div className='h-screen'>
      <Navbar/>
      <Slider/>
      <Bestseller/>
      {/* <ItemCard itmImg={itm.product1} title="Product2" price="1000" /> */}
    </div>
  )
}

export default App
