import { Link } from "react-router-dom";
import logo from "../assets/icons/vella_colored.png";
import userIcon from "../assets/icons/user.png";
import adminIcon from "../assets/icons/admin.png";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">

      {/* LOGO */}
      <img src={logo} alt="logo" className="w-20 mb-6" />

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Choose Your Role
      </h1>

      <p className="text-gray-500 mb-10 text-center">
        Continue as a donor, recipient, or administrator
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

        {/* USER CARD */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">

          {/* ICON */}
          <div className="
            w-14 h-14 rounded-xl
            bg-[linear-gradient(90deg,#FF8C8C,#B71C1C)]
            flex items-center justify-center mb-6
          ">
            <img src={userIcon} alt="user" className="w-6 h-6" />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            User
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Register as a blood donor or recipient. View requests,
            join donation drives, and manage your profile.
          </p>

          <Link to="/register">
            <p className="text-red-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Get Started →
            </p>
          </Link>
        </div>

        {/* ADMIN CARD */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">

          {/* ICON */}
          <div className="
            w-14 h-14 rounded-xl
            bg-[linear-gradient(90deg,#71A9FF,#155DFC)]
            flex items-center justify-center mb-6
          ">
            <img src={adminIcon} alt="admin" className="w-6 h-6" />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Admin
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Access the administrative dashboard to manage donors,
            blood requests, inventory, and donation drives.
          </p>

          <Link to="/admin/dashboard">
            <p className="text-red-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Admin Login →
            </p>
          </Link>
        </div>

      </div>

      {/* BACK */}
      <Link to="/">
        <p className="mt-10 text-gray-500 text-sm hover:underline">
          ← Back to Home
        </p>
      </Link>

    </div>
  );
}