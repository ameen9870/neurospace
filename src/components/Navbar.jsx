import { useState } from "react";

import {
  Bell,
  Search,
  Moon,
  Sun,
} from "lucide-react";

import { motion } from "framer-motion";

import { signOut } from "firebase/auth";

import { auth } from "../firebase";

function Navbar({ darkMode, setDarkMode }) {

  const [search, setSearch] = useState("");

  const handleSignOut = async () => {

    try {

      await signOut(auth);

    } catch (error) {

      console.error(
        "Error signing out: ",
        error
      );

    }

  };

  return (

    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full h-20 border-b backdrop-blur-xl flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 ${
        darkMode
          ? "bg-black/40 border-white/10 text-white"
          : "bg-white/70 border-gray-300 text-black"
      }`}
    >

      {/* LOGO */}

      <div className="text-3xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">

        NeuroSpace

      </div>

      {/* RIGHT SECTION */}

      <div className="flex items-center gap-4">

        {/* SEARCH BAR */}

        <div
          className={`hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl border ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-gray-100 border-gray-300"
          }`}
        >

          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-transparent outline-none text-sm w-40"
          />

        </div>

        {/* NOTIFICATIONS */}

        <button
          className={`p-3 rounded-2xl transition ${
            darkMode
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >

          <Bell size={20} />

        </button>

        {/* PROFILE AVATAR */}

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl border border-white/20">

          {
            auth.currentUser?.email
              ?.charAt(0)
              ?.toUpperCase()
          }

        </div>

        {/* THEME TOGGLE */}

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className={`p-3 rounded-2xl transition ${
            darkMode
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >

          {
            darkMode
              ? <Sun size={20} />
              : <Moon size={20} />
          }

        </button>

        {/* LOGOUT */}

        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl transition text-white font-medium"
        >

          Logout

        </button>

      </div>

    </motion.nav>

  );
}

export default Navbar;