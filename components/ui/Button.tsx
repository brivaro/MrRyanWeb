import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]",
    secondary: "bg-space-800 text-white border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan backdrop-blur-md hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/10"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Glow Effect for Primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default Button;