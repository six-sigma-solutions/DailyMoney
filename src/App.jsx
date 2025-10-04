import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Health from "./components/health/Health";
import Family from "./components/family/Family";
import Contact from "./components/contact/Contact";
import Vision from "./components/vision/Vision";
import Entrepreneur from "./components/entrepreneur/Entrepreneur";


export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<Health />} />
        <Route path="/family" element={<Family />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entrepreneur" element={<Entrepreneur />}/>
      </Routes>
    </>
  );
}
