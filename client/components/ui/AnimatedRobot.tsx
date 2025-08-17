import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedRobotProps {
  size?: number;
  className?: string;
  interactive?: boolean;
}

export default function AnimatedRobot({ 
  size = 200, 
  className = "", 
  interactive = true 
}: AnimatedRobotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const easeInOutBezier: [number, number, number, number] = [0.42, 0, 0.58, 1];

  const robotVariants = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
    hover: {
      y: [0, -10, 0],
      scale: 1.05,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
    click: {
      scale: [1, 0.95, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  const antennaVariants = {
    idle: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
  };

  const eyeVariants = {
    idle: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
    hover: {
      scale: [1, 1.5, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
  };

  const armVariants = {
    idle: {
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
    hover: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOutBezier,
      },
    },
  };

  const handleClick = () => {
    if (interactive) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      variants={robotVariants}
      animate={isClicked ? "click" : isHovered ? "hover" : "idle"}
      onHoverStart={() => interactive && setIsHovered(true)}
      onHoverEnd={() => interactive && setIsHovered(false)}
      onClick={handleClick}
      whileHover={interactive ? { cursor: "pointer" } : {}}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Background */}
        <rect width="200" height="200" fill="transparent"/>
        
        {/* Robot Body */}
        <g id="robot">
          {/* Head */}
          <motion.ellipse 
            cx="100" cy="70" rx="35" ry="40" 
            fill="white" 
            stroke="#8B5CF6" 
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.rect 
            x="75" y="50" width="50" height="25" rx="5" 
            fill="#1F2937"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          {/* Eyes */}
          <motion.g variants={eyeVariants} animate={isHovered ? "hover" : "idle"}>
            <ellipse cx="85" cy="62" rx="4" ry="6" fill="#60A5FA"/>
            <ellipse cx="115" cy="62" rx="4" ry="6" fill="#60A5FA"/>
          </motion.g>
          
          {/* Antenna */}
          <motion.g 
            id="antenna" 
            variants={antennaVariants} 
            animate={isHovered ? "hover" : "idle"}
            initial={{ rotate: 0 }}
          >
            <path d="M100 30 L105 15 L95 15 Z" fill="#8B5CF6"/>
            <motion.circle 
              cx="100" cy="15" r="3" 
              fill="#60A5FA"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: easeInOutBezier,
              }}
            />
            <circle cx="100" cy="15" r="1.5" fill="white"/>
          </motion.g>
          
          {/* Ears */}
          <motion.ellipse 
            cx="65" cy="70" rx="8" ry="12" 
            fill="#8B5CF6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.ellipse 
            cx="135" cy="70" rx="8" ry="12" 
            fill="#8B5CF6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          
          {/* Body */}
          <motion.rect 
            x="75" y="110" width="50" height="60" rx="15" 
            fill="white" stroke="#8B5CF6" strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.circle 
            cx="100" cy="130" r="8" 
            fill="#8B5CF6"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: easeInOutBezier,
            }}
          />
          
          {/* Arms */}
          <motion.g 
            id="left-arm" 
            variants={armVariants} 
            animate={isHovered ? "hover" : "idle"}
            initial={{ rotate: 0 }}
          >
            <rect x="45" y="120" width="25" height="8" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="2"/>
            <rect x="40" y="125" width="8" height="15" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="2"/>
          </motion.g>
          
          <motion.g 
            id="right-arm" 
            variants={armVariants} 
            animate={isHovered ? "hover" : "idle"}
            initial={{ rotate: 0 }}
          >
            <rect x="130" y="120" width="25" height="8" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="2"/>
            <rect x="152" y="125" width="8" height="15" rx="4" fill="white" stroke="#8B5CF6" strokeWidth="2"/>
          </motion.g>
          
          {/* Legs */}
          <motion.rect 
            x="85" y="170" width="8" height="20" rx="4" 
            fill="white" stroke="#8B5CF6" strokeWidth="2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.rect 
            x="107" y="170" width="8" height="20" rx="4" 
            fill="white" stroke="#8B5CF6" strokeWidth="2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          
          {/* Feet */}
          <motion.ellipse 
            cx="89" cy="195" rx="6" ry="3" 
            fill="white" stroke="#8B5CF6" strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.ellipse 
            cx="111" cy="195" rx="6" ry="3" 
            fill="white" stroke="#8B5CF6" strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
        </g>
        
        {/* Glowing effects */}
        <defs>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"/>
          </radialGradient>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Glowing eyes */}
        <motion.circle 
          cx="85" cy="62" r="8" 
          fill="url(#glow)" 
          opacity="0.6"
          animate={{
            r: [8, 12, 8],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: easeInOutBezier,
          }}
        />
        <motion.circle 
          cx="115" cy="62" r="8" 
          fill="url(#glow)" 
          opacity="0.6"
          animate={{
            r: [8, 12, 8],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: easeInOutBezier,
            delay: 0.5,
          }}
        />
        
        {/* Glowing antenna */}
        <motion.circle 
          cx="100" cy="15" r="6" 
          fill="url(#glow)" 
          opacity="0.4"
          animate={{
            r: [6, 10, 6],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: easeInOutBezier,
          }}
        />
      </svg>
      
      {/* Interactive hint */}
      {interactive && (
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          Click me! 🤖
        </motion.div>
      )}
    </motion.div>
  );
}
