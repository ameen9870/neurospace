import { useEffect, useState } from "react";

import { motion } from "framer-motion";

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener("mousemove", moveCursor);

  }, []);

  return (

    <motion.div
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 pointer-events-none z-[9999] blur-sm opacity-80"
    />

  );
}

export default CustomCursor;