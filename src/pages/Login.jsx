import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [isSignup, setIsSignup] = useState(false);

  /* EMAIL AUTH */

  const handleAuth = async () => {

    try {

      if (isSignup) {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      } else {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      }

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  /* GOOGLE LOGIN */

  const handleGoogleLogin = async () => {

    const provider = new GoogleAuthProvider();

    try {

      await signInWithPopup(auth, provider);

      navigate("/dashboard");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white px-6">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl w-full max-w-[420px]">

        {/* LOGO */}

        <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          NeuroSpace
        </h1>

        <p className="text-center text-gray-400 mb-8">

          {
            isSignup
              ? "Create your account 🚀"
              : "Welcome back 👋"
          }

        </p>

        {/* FORM */}

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          {/* LOGIN / SIGNUP */}

          <button
            onClick={handleAuth}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >

            {
              isSignup
                ? "Create Account"
                : "Login"
            }

          </button>

          {/* GOOGLE BUTTON */}

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-3"
          >

            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />

            Continue with Google

          </button>

          {/* TOGGLE */}

          <p className="text-center text-gray-400 pt-2">

            {
              isSignup
                ? "Already have an account?"
                : "Don't have an account?"
            }

            <button
              onClick={() =>
                setIsSignup(!isSignup)
              }
              className="text-purple-400 ml-2 hover:underline"
            >

              {
                isSignup
                  ? "Login"
                  : "Create Account"
              }

            </button>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;