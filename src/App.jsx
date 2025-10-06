import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Health from "./components/health/Health";
import Family from "./components/family/Family";
import Wealth from "./components/wealth/Wealth";
import Contact from "./components/contact/Contact";
import Entrepreneur from "./components/entrepreneur/Entrepreneur";
import Visionmission from "./components/visionmission/Visionmission";
import Solution from "./components/solution/Solution";
import Gratitude from "./components/gratitude/Gratitude";
import Overview from "./components/overview/Overview";
import Womenempowerment from "./components/womenempowerment/Womenempowerment";
import FounderMsg from "./components/founderMsg/FounderMsg";
import PresidentMsg from "./components/presidentMsg/PresidentMsg";
import CoreTeam from "./components/coreTeam/CoreTeam";
import Income from "./components/income/Income"
import Students from "./components/students/Students";

import Elder from "./components/elder/Elder";



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
        <Route path="/overview" element={<Overview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/women-empowerment" element={<Womenempowerment />} />
        <Route path="/founders-msg" element={<FounderMsg />} />
        <Route path="/presidents-msg" element={<PresidentMsg />} />
        <Route path="/core-Team" element={<CoreTeam/>} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path="/income" element={<Income />} />
        <Route path="/students" element={<Students/>} />   
        <Route path="/income" element={<Income />}/>
        <Route path="/students" element={<Students />} />
        <Route path="/elder" element={<Elder />} />
      </Routes>
    </>
  );
}
