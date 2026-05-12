import { auth } from "../firebase";

function UserProfileCard() {

  const user = auth.currentUser;

  return (

    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Your Profile 👤
      </h2>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">

        {/* AVATAR */}

        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold">

          {user?.email?.charAt(0).toUpperCase()}

        </div>

        {/* USER INFO */}

        <div>

          <h3 className="text-2xl font-bold">

            {user?.displayName || "NeuroSpace User"}

          </h3>

          <p className="text-gray-400 mt-2">

            {user?.email}

          </p>

          <div className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-2xl text-sm">

            Premium Productivity Explorer 🚀

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserProfileCard;