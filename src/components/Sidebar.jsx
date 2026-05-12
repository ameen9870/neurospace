import {
  LayoutDashboard,
  Brain,
  CheckSquare,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="hidden md:flex w-72 h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl p-6 hidden md:flex flex-col">

      <h1 className="text-3xl font-bold mb-12">
        NeuroSpace
      </h1>

      <div className="flex flex-col gap-4">

        <button className="flex items-center gap-3 bg-purple-600 p-4 rounded-2xl hover:bg-purple-700 transition">
          <LayoutDashboard size={22} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/10 transition">
          <CheckSquare size={22} />
          Tasks
        </button>

        <button className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/10 transition">
          <Settings size={22} />
          Settings
        </button>

      </div>
    </div>
  );
}

export default Sidebar;