// /src/components/Shared/RippleEffectButton.jsx

import React from 'react';
import { handleRippleEffect } from '../utils/effects';

const RippleEffectButton = ({ 
  children, 
  className, 
  href, 
  target = "_blank", 
  rel = "noopener noreferrer",
  onClick,
  ...props 
}) => {
  const handleClick = (e) => {
    handleRippleEffect(e);
    if (onClick) onClick(e);
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`inline-block relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95 ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default RippleEffectButton;