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

  // EMAIL LOGIN

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  // SIGNUP

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    }
  };

  // GOOGLE LOGIN

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
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl w-full max-w-[400px]">

        <h1 className="text-4xl font-bold mb-8 text-center">
          NeuroSpace
        </h1>

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

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Login
          </button>

          <button
            onClick={handleSignup}
            className="w-full bg-white/10 py-4 rounded-2xl font-semibold hover:bg-white/20 transition"
          >
            Create Account
          </button>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 py-4 rounded-2xl font-semibold hover:bg-red-600 transition"
          >
            Continue with Google
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;