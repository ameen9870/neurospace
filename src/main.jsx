import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from "lenis";
import { Toaster } from "react-hot-toast";
const lenis = new Lenis();

function raf(time) {

  lenis.raf(time);

  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#111",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  }}
/>
    <App />
  </StrictMode>,
)

