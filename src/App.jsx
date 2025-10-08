import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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
import Income from "./components/income/Income";
import Students from "./components/students/Students";
import Elder from "./components/elder/Elder";
import Mypromises from "./components/mypromises/Mypromises";

// Authentication Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";

export default function App() {
  return (
    <AuthProvider>
      <div id="app">
        <Navbar />
        <ScrollToTop />

<<<<<<< HEAD
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
        <Route path="/womenempowerment" element={<Womenempowerment />} />
        <Route path="/founders-msg" element={<FounderMsg />} />
        <Route path="/presidents-msg" element={<PresidentMsg />} />
        <Route path="/core-Team" element={<CoreTeam />} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path="/income" element={<Income />} />
        <Route path="/students" element={<Students />} />
        <Route path="/income" element={<Income />} />
        <Route path="/students" element={<Students />} />
        <Route path="/elder" element={<Elder />} />
        <Route path="/mypromises" element={<Mypromises />} />
     
=======
        <Routes>
          {/* Authentication Routes - Only these are public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* All Website Content - Protected Routes (Login Required) */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/health" element={<ProtectedRoute><Health /></ProtectedRoute>} />
          <Route path="/family" element={<ProtectedRoute><Family /></ProtectedRoute>} />
          <Route path="/wealth" element={<ProtectedRoute><Wealth /></ProtectedRoute>} />
          <Route path="/visionmission" element={<ProtectedRoute><Visionmission /></ProtectedRoute>} />
          <Route path="/solution" element={<ProtectedRoute><Solution /></ProtectedRoute>} />
          <Route path="/gratitude" element={<ProtectedRoute><Gratitude /></ProtectedRoute>} />
          <Route path="/overview" element={<ProtectedRoute><Overview /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/womenempowerment" element={<ProtectedRoute><Womenempowerment /></ProtectedRoute>} />
          <Route path="/founders-msg" element={<ProtectedRoute><FounderMsg /></ProtectedRoute>} />
          <Route path="/presidents-msg" element={<ProtectedRoute><PresidentMsg /></ProtectedRoute>} />
          <Route path="/core-Team" element={<ProtectedRoute><CoreTeam /></ProtectedRoute>} />
          <Route path="/entrepreneur" element={<ProtectedRoute><Entrepreneur /></ProtectedRoute>} />
          <Route path="/income" element={<ProtectedRoute><Income /></ProtectedRoute>} />
          <Route path="/students" element={<ProtectedRoute><Students /></ProtectedRoute>} />
          <Route path="/elder" element={<ProtectedRoute><Elder /></ProtectedRoute>} />
          <Route path="/mypromises" element={<ProtectedRoute><Mypromises /></ProtectedRoute>} />
>>>>>>> c2c17eab9f4f568412c86c6866bb8c355edfeee7


        </Routes>
      </div>
    </AuthProvider>
  );
}
