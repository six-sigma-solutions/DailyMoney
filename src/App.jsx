import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Health from "./components/health/Health";
import Wealth from "./components/wealth/Wealth";
import Family from "./components/family/Family";
import Contact from "./components/contact/Contact";
import Overview from "./components/overview/Overview";
import Visionmission from "./components/visionmission/Visionmission";
import FounderMsg from "./components/founderMsg/FounderMsg";
import PresidentMsg from "./components/presidentMsg/PresidentMsg";
import CoreTeam from "./components/coreTeam/CoreTeam";
import Entrepreneur from "./components/entrepreneur/Entrepreneur";
import Income from "./components/income/Income";
import Womenempowerment from "./components/womenempowerment/Womenempowerment";
import Students from "./components/students/Students";
import Elder from "./components/elder/Elder";
import Solution from "./components/solution/Solution";
import Gratitude from "./components/gratitude/Gratitude";
import Mypromises from "./components/mypromises/Mypromises";
import FullFooter from "./components/footer/FullFooter";
import Bio from "./components/biopic/bio";
export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Home as root */}
        <Route path="/" element={<Home />} />

        {/* Public pages */}
        <Route path="/health" element={<Health />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/family" element={<Family />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/visionmission" element={<Visionmission />} />
        <Route path="/founders-msg" element={<FounderMsg />} />
        <Route path="/presidents-msg" element={<PresidentMsg />} />
        <Route path="/core-team" element={<CoreTeam />} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path="/income" element={<Income />} />
        <Route path="/womenempowerment" element={<Womenempowerment />} />
        <Route path="/students" element={<Students />} />
        <Route path="/elder" element={<Elder />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/gratitude" element={<Gratitude />} />
        <Route path="/mypromises" element={<Mypromises />} />
  <Route path="/full-footer" element={<FullFooter />} />
        <Route path="/bio" element={<Bio />} />

        {/* fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
