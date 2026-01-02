import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./Base/NavBar";
import Home from "./MainPages/Home";
import About from "./MainPages/About";
import Contact from "./MainPages/Contact";
import Footer from "./Base/Footer";
import 'leaflet/dist/leaflet.css';
import Services from "./MainPages/Services";
import Booking from "./MainPages/Booking";
import ReviewSystem from "./MainPages/ReviewSystem";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <ReviewSystem />
            <div id="contact"><Contact /></div>
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        
      </Routes>

      <Footer />
      </>
  );
}
export default App;