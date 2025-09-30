import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Wealth from "./components/wealth/Wealth";
import Health from "./components/health/Health";
import Family from "./components/family/Family";
import Contact from "./components/contact/Contact";
import Vision from "./components/vision/Vision";


export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<Health />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/family" element={<Family />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
