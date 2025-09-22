import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const StarBackground = ({ isDarkMode }) => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const starColors = [
    '#FFFFFF', '#A5D6FF', '#FFFEC4', '#FFD6A5', '#FF7B7B'
  ];

  useEffect(() => {
    if (isDarkMode) {
      generateStars();
      generateMeteors();
      const handleResize = () => generateStars();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    } else {
      setStars([]);
      setMeteors([]);
    }
  }, [isDarkMode]);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i, size: Math.random() * 2.5 + 0.5, x: Math.random() * 100,
      y: Math.random() * 100, opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }));
    setStars(newStars);
  };
  
  const generateMeteors = () => {
    const numberOfMeteors = 10;
    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 0,
      animationDuration: Math.random() * 4 + 4,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }));
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {isDarkMode ? (
        <>
          {stars.map((star) => (
            <div
              key={star.id}
              className="animate-pulse-subtle"
              style={{
                position: 'absolute', borderRadius: '50%',
                width: `${star.size}px`, height: `${star.size}px`,
                left: `${star.x}%`, top: `${star.y}%`, opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`,
                backgroundColor: star.color, boxShadow: `0 0 10px 2px ${star.color}60`,
              }}
            />
          ))}
          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="starburst animate-meteor "
              style={{
                left: `${meteor.x}%`, top: `${meteor.y}%`,
                animationDelay: `${meteor.delay}s`,
                animationDuration: `${meteor.animationDuration}s`,
                color: meteor.color, backgroundColor: meteor.color,
                filter: `drop-shadow(0 0 4px ${meteor.color})`,
              }}
            />
          ))}
        </>
      ) :(
        // --- LIGHT MODE: Geometric Floating Particles ---
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            particles: {
              number: { value: 20, density: { enable: true, value_area: 800 } },
              color: { value: ["#00b4d8", "#c77dff"] },
              shape: { type: ["circle", "square", "triangle"] },
              opacity: { value: {min: 0.1, max: 0.4} },
              size: { value: { min: 5, max: 15 } },
              move: {
                enable: true,
                speed: 1,
                direction: "top",
                outModes: { default: "out" },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};

export default StarBackground;