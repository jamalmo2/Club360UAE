/**
 * Copyright (c) 2026 Club360 UAE. All Rights Reserved.
 */

interface Club360LogoProps {
  size?: number;
  className?: string;
}

const Club360Logo = ({ size = 40, className = '' }: Club360LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Circular ring representing "360 degrees" */}
    <circle cx="20" cy="20" r="16" stroke="#D91E5C" strokeWidth="3" fill="none"/>
    <circle cx="20" cy="20" r="12" stroke="#1B5E7E" strokeWidth="2" fill="none"/>
    
    {/* "360" text in center */}
    <text 
      x="20" 
      y="25" 
      fontFamily="Arial, sans-serif" 
      fontSize="12" 
      fontWeight="bold" 
      fill="#D91E5C" 
      textAnchor="middle"
    >
      360
    </text>
  </svg>
);

export default Club360Logo;
