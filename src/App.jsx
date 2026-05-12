// // import Sidebar from "./components/Sidebar";
// // import Navbar from "./components/Navbar";
// // import DashboardCards from "./components/DashboardCards";
// // import AIPanel from "./components/AIPanel";
// // import TaskList from "./components/TaskList";
// // import AnalyticsChart from "./components/AnalyticsChart";
// // import BackgroundEffects from "./components/BackgroundEffects";
// // import Chatbot from "./components/Chatbot";

// // function App() {
// //   return (
// //     <div className="flex bg-black text-white min-h-screen overflow-hidden">
// //       <BackgroundEffects />

// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.25),transparent_50%)]"></div>

// //       <Sidebar />

// //       <div className="flex-1 relative z-10">

// //         <Navbar />

// //         <div className="p-8">

// //           <h1 className="text-5xl font-bold leading-tight">
// //             <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
// //             Welcome Back 👋
// //             </span>
// //           </h1>

// //           <p className="text-gray-400 mt-3 text-lg">
// //             Here's your productivity overview.
// //           </p>

// //           <DashboardCards />
// //           <AIPanel />
// //           <TaskList />
// //           <AnalyticsChart />
// //           <Chatbot />

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default App;



// import Login from "./pages/Login";

// function App() {
//   return <Login />;
// }

// export default App;


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme =
      localStorage.getItem("darkMode");

    return savedTheme === "true";

  });

  /* AUTH STATE */

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser);

        setLoading(false);

      });

    return () => unsubscribe();

  }, []);

  /* SAVE DARK MODE */

  useEffect(() => {

    localStorage.setItem(
      "darkMode",
      darkMode
    );

  }, [darkMode]);

  if (loading) {

    return (

      <div className="h-screen bg-black text-white flex items-center justify-center text-3xl">
        Loading...
      </div>

    );

  }

  return (

    <BrowserRouter>

      <Routes>

        {/* LANDING PAGE */}

        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={
            user
              ? <Navigate to="/dashboard" />
              : <Login />
          }
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            user
              ? (
                <Dashboard
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              )
              : <Navigate to="/" />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;