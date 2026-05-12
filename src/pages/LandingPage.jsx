import { motion } from "framer-motion";
import DashboardPreview from "../components/DashboardPreview";
import FloatingOrbs from "../components/FloatingOrbs";
import FadeInSection from "../components/FadeInSection";
import { useState } from "react";
import CustomCursor from "../components/CustomCursor";

import MagneticButton from "../components/MagneticButton";
import ParticlesBackground from "../components/ParticlesBackground";
import Tilt from "react-parallax-tilt";

import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

function LandingPage() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <CustomCursor />

      <ParticlesBackground />

      {/* FLOATING BACKGROUND */}

      <FloatingOrbs />

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-6 md:px-12 py-6 relative z-20">

        {/* LOGO */}

        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          NeuroSpace
        </h1>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-5">

          <a
            href="#features"
            className="hover:text-purple-400 transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="hover:text-purple-400 transition"
          >
            About
          </a>

          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition"
          >
            Login
          </Link>

          <MagneticButton
            className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition flex items-center gap-2"
          >

            <Link
              to="/login"
              className="flex items-center gap-2"
            >
              Launch App
              <ArrowRight size={20} />
            </Link>

          </MagneticButton>

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-white/10 p-3 rounded-xl border border-white/10"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* MOBILE MENU */}

      {menuOpen && (

        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.02}
          transitionSpeed={2000}
        >

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/5 backdrop-blur-xl border border-white/10 mx-6 rounded-3xl p-6 relative z-20"
          >

            <div className="flex flex-col gap-5 text-lg">

              <a href="#features">
                Features
              </a>

              <a href="#about">
                About
              </a>

              <Link to="/login">
                Login
              </Link>

              <Link
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-blue-500 px-5 py-3 rounded-2xl text-center"
              >
                Get Started
              </Link>

            </div>

          </motion.div>

        </Tilt>

      )}

      {/* HERO SECTION */}

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24">

        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.02}
          transitionSpeed={2000}
        >

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-6 text-purple-400 font-medium tracking-widest uppercase">
              Smart Productivity Workspace
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">

              Organize Your Life With

              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {" "}NeuroSpace
              </span>

            </h1>

            <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">

              Smart productivity dashboard
              to manage tasks, boost focus, and visualize
              your workflow beautifully.

            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

              <Link
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition flex items-center gap-2"
              >
                Launch App
                <ArrowRight size={20} />
              </Link>

              <button className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                Watch Demo
              </button>

            </div>

            <DashboardPreview />

          </motion.div>

        </Tilt>

      </section>

      {/* FEATURES */}

      <FadeInSection>

        <section
          id="features"
          className="relative z-10 px-6 md:px-16 py-32"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD 1 */}

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={2000}
            >

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
              >

                <h3 className="text-2xl font-bold mb-4">
                  Smart Workspace
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Organize tasks, manage workflow, and stay productive with a modern workspace.
                </p>

              </motion.div>

            </Tilt>

            {/* CARD 2 */}

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={2000}
            >

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
              >

                <BarChart3
                  className="text-blue-400 mb-6"
                  size={40}
                />

                <h3 className="text-2xl font-bold mb-4">
                  Analytics Dashboard
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Visualize tasks, productivity, and progress with beautiful charts.
                </p>

              </motion.div>

            </Tilt>

            {/* CARD 3 */}

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={2000}
            >

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
              >

                <ShieldCheck
                  className="text-green-400 mb-6"
                  size={40}
                />

                <h3 className="text-2xl font-bold mb-4">
                  Secure Cloud Sync
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Your data stays synced and secure using Firebase cloud services.
                </p>

              </motion.div>

            </Tilt>

          </div>

        </section>

      </FadeInSection>

      {/* ABOUT SECTION */}

      <FadeInSection>

        <section
          id="about"
          className="relative z-10 px-6 md:px-16 pb-32"
        >

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold mb-6">
              Built For The Future 🚀
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">

              NeuroSpace is a futuristic productivity platform
              designed to simplify productivity,
              task management, and workflow organization
              into one beautiful experience.

              Built using React, Firebase, Tailwind CSS,
              Framer Motion, and modern UI principles.

            </p>

          </div>

        </section>

      </FadeInSection>

      {/* FOOTER */}

      <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* BRAND */}

            <div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                NeuroSpace
              </h2>

              <p className="mt-5 text-gray-400 leading-relaxed">

                Smart productivity platform
                built with modern web technologies and premium UI design.

              </p>

            </div>

            {/* LINKS */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-gray-400">

                <a href="#features" className="hover:text-purple-400 transition">
                  Features
                </a>

                <a href="#about" className="hover:text-purple-400 transition">
                  About
                </a>

                <Link
                  to="/login"
                  className="hover:text-purple-400 transition"
                >
                  Login
                </Link>

              </div>

            </div>

            {/* TECH STACK */}

            <div>

              <h3 className="text-xl font-semibold mb-5">
                Built With
              </h3>

              <div className="flex flex-wrap gap-3">

                <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/10">
                  React
                </span>

                <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/10">
                  Firebase
                </span>

                <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/10">
                  Tailwind
                </span>

                <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/10">
                  Framer Motion
                </span>

                <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/10">
                  Vercel
                </span>

              </div>

            </div>

          </div>

          {/* BOTTOM */}

          <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">

            © 2026 NeuroSpace. Built with ❤️ by Ameen Muhammed.

          </div>

        </div>

      </footer>

    </div>

  );
}

export default LandingPage;