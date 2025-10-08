import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

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

        <Routes>
          {/* Authentication Routes - public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected home route - user lands here after login */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />

          {/* Catch-all redirect to home (ProtectedRoute will send to login if needed) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
