interface ShaheenLogoProps {
  className?: string;
  size?: number;
}

export default function ShaheenLogo({ className = '', size = 40 }: ShaheenLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle - dark teal */}
      <circle cx="50" cy="50" r="50" fill="currentColor" />
      
      {/* Bird - light beige/off-white (#F5F5DC or similar) */}
      <g fill="#F5F5DC" transform="translate(50, 50)">
        {/* Bird's head - facing right, smooth curve */}
        <path
          d="M -18 -2 
             Q -18 -6 -15 -8 
             Q -12 -10 -8 -8 
             Q -5 -6 -3 -3 
             L 0 0 
             L 4 -2 
             L 2 3 
             Q 0 6 -3 6 
             Q -6 6 -10 4 
             Q -14 2 -16 -1 
             Q -18 -2 -18 -2 Z"
          fill="#F5F5DC"
        />
        
        {/* Eye - dark teal dot */}
        <circle cx="-10" cy="-2" r="1.8" fill="#1B5E7E" />
        
        {/* Beak - pointed, facing right */}
        <path
          d="M 4 -2 L 10 -1 L 6 2 Z"
          fill="#F5F5DC"
        />
        
        {/* Main body - flowing curve upward */}
        <path
          d="M -16 -1 
             Q -12 4 -6 8 
             Q 0 12 4 16 
             Q 8 19 12 22"
          stroke="#F5F5DC"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Fanned feathers/wings - rising upward and to the right, like flames */}
        {/* First feather - longest, most curved */}
        <path
          d="M 4 16 
             Q 10 12 16 6 
             Q 20 1 24 -4 
             Q 27 -9 30 -14"
          stroke="#F5F5DC"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Second feather */}
        <path
          d="M 8 19 
             Q 14 14 20 7 
             Q 24 1 28 -5 
             Q 31 -11 34 -17"
          stroke="#F5F5DC"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Third feather */}
        <path
          d="M 10 21 
             Q 16 15 22 8 
             Q 26 1 30 -6 
             Q 33 -13 36 -20"
          stroke="#F5F5DC"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Fourth feather */}
        <path
          d="M 12 22 
             Q 18 16 24 8 
             Q 28 0 32 -7 
             Q 35 -15 38 -23"
          stroke="#F5F5DC"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Fifth feather - shortest */}
        <path
          d="M 14 23 
             Q 20 17 26 9 
             Q 30 1 34 -8 
             Q 37 -17 40 -26"
          stroke="#F5F5DC"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
