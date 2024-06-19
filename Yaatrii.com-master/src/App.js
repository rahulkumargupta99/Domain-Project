import './App.css'
import About from "./Components/About/About";
import Homes from "./Components/Homes/Homes";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes,   } from 'react-router-dom';
import Tour from "./Components/Tourpackage/Tour";
import Guide from "./Components/Tourguide/Guide";
import Wishlist from "./Components/Wishlist/Wishlist";
import Signups from "./Components/Signup/Signups";
import ContactApp from "./Components/Contact/ContactApp";




function App() {
  return (
   <>

  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Homes/>}/>
  <Route  path="/About" element={<About/>}/>
  <Route  path="/Tour" element={< Tour/>}/>
  <Route  path="/Guide" element={<Guide/>}/>
  <Route  path="/Signups" element={<Signups/>}/>
  <Route  path="/Wishlist" element={<Wishlist/>}/>
  <Route  path="/ContactApp" element={<ContactApp/>}/>

  
  
  
  </Routes>
      </BrowserRouter>
      
     
      </>
  );
}

export default App;
