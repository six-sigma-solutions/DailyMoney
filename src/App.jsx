import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Health from "./components/health/Health";
import Family from "./components/family/Family";
import Wealth from  "./components/wealth/Wealth";
import Contact from "./components/contact/Contact";
import Entrepreneur from "./components/entrepreneur/Entrepreneur";
import Visionmission from "./components/visionmission/Visionmission";
import Solution from "./components/solution/Solution";
import Gratitude from "./components/gratitude/Gratitude";


export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<Health />} />
        <Route path="/family" element={<Family />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/visionmission" element={<Visionmission />} />
        
        <Route path="/solution" element={<Solution />} />
        
        <Route path="/gratitude" element={<Gratitude />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entrepreneur" element={<Entrepreneur />}/>
      </Routes>
    </>
  );
}
