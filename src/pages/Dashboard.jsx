// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import DashboardCards from "../components/DashboardCards";
// import AIPanel from "../components/AIPanel";
// import TaskList from "../components/TaskList";
// import AnalyticsChart from "../components/AnalyticsChart";
// import Chatbot from "../components/Chatbot";
// import BackgroundEffects from "../components/BackgroundEffects";

// function Dashboard({ darkMode, setDarkMode }) {
//   return (
//     <div className={`flex flex-col md:flex-row min-h-screen overflow-hidden ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>

//       <BackgroundEffects />

//       <Sidebar />

//       <div className="flex-1 relative z-10">

//         <Navbar
//         darkMode={darkMode}
//         setDarkMode={setDarkMode} />

//         <div className="p-4 md:p-8">

//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             Welcome Back 👋
//           </h1>

//           <DashboardCards darkMode={darkMode}/>

//           <AIPanel />

//           <TaskList />

//           <AnalyticsChart />

//           <Chatbot />

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Dashboard;

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import AIPanel from "../components/AIPanel";
import TaskList from "../components/TaskList";
import AnalyticsChart from "../components/AnalyticsChart";
import Chatbot from "../components/Chatbot";
import BackgroundEffects from "../components/BackgroundEffects";

function Dashboard({ darkMode, setDarkMode }) {
  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* BACKGROUND EFFECTS */}

      {/* <BackgroundEffects /> */}

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="flex-1 relative z-10">

        {/* NAVBAR */}

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* PAGE CONTENT */}

        <div className="p-4 md:p-8">

          {/* HEADING */}

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">

            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Welcome Back 👋
            </span>

          </h1>

          <p
            className={`mt-3 text-lg ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Here's your productivity overview.
          </p>

          {/* DASHBOARD COMPONENTS */}

          <DashboardCards darkMode={darkMode} />

          <AIPanel />

          <TaskList />

          {/* <AnalyticsChart /> */}

          {/* <Chatbot /> */}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;