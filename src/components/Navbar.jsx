// import { Bell, Search } from "lucide-react";
// import { motion } from "framer-motion";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";
// import { Moon, Sun } from "lucide-react";

// function Navbar({ darkMode, setDarkMode }) {
//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error("Error signing out: ", error);
//     }
//   };

//   return (
//     <motion.nav
//     initial={{ y: -50, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     transition={{ duration: 0.6 }}
//     className={'w-full h-16 border-b border-white/10  backdrop-blur-lg flex items-center justify-between px-4 md:px-8 ${
//       darkMode
//         ? "bg-white/5 border-white/10"
//         : "bg-gray-200 border-gray-300"
// >
      
//       <div className="text-2xl font-bold tracking-wide">
//         NeuroSpace
//       </div>

//       <div className="flex items-center gap-4">

//         <div className="bg-white/10 p-2 rounded-xl cursor-pointer hover:bg-white/20 transition">
//           <Search size={20} />
//         </div>

//         <div className="bg-white/10 p-2 rounded-xl cursor-pointer hover:bg-white/20 transition">
//           <Bell size={20} />
//         </div>

//         <img
//           src="https://i.pravatar.cc/40"
//           alt=""
//           className="w-10 h-10 rounded-full border border-white/20"
//         />
//         <button
//   onClick={() =>
//     setDarkMode(!darkMode)
//   }
//   className="bg-white/10 p-2 rounded-xl hover:bg-white/20 transition">

//   {darkMode ? <Sun size={20} /> : <Moon size={20} />}

//           </button>
//         <button
//            onClick={handleSignOut}
//             className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl transition">
//            Logout
//         </button>
//       </div>
//     </motion.nav>
//   );
// }

// export default Navbar;
import { Bell, Search, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar({ darkMode, setDarkMode }) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full h-16 border-b backdrop-blur-lg flex items-center justify-between px-4 md:px-8 ${
        darkMode
          ? "bg-white/5 border-white/10 text-white"
          : "bg-gray-200 border-gray-300 text-black"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        NeuroSpace
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div
          className={`p-2 rounded-xl cursor-pointer transition ${
            darkMode
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          <Search size={20} />
        </div>

        {/* Notification */}
        <div
          className={`p-2 rounded-xl cursor-pointer transition ${
            darkMode
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          <Bell size={20} />
        </div>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-white/20"
        />

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-xl transition ${
            darkMode
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Logout */}
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl transition text-white"
        >
          Logout
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;