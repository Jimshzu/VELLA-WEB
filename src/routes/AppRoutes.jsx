import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

// NEW IMPORTS
import Requests from "../pages/Requests";
import Drives from "../pages/Drives";
import Profile from "../pages/Profile";

import AdminDashboard from "../pages/AdminDashboard";
import AdminDonors from "../pages/AdminDonors";
import AdminRequests from "../pages/AdminRequests";
import AdminInventory from "../pages/AdminInventory";
import AdminDrives from "../pages/AdminDrives";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Routes */}
      <Route path="/requests" element={<Requests />} />
      <Route path="/drives" element={<Drives />} />
      <Route path="/profile" element={<Profile />} />

       {/* Admin Routes */}
    <Route path="/admin">
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="donors" element={<AdminDonors />} />
        <Route path="requests" element={<AdminRequests />} />
        <Route path="inventory" element={<AdminInventory />} />
        <Route path="drives" element={<AdminDrives />} />
    </Route>
    </Routes>
  );
}