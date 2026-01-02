/**
 * Copyright (c) 2026 Club360 UAE. All Rights Reserved.
 */

import Club360Logo from './Club360Logo';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeMap = {
    sm: 32,
    md: 40,
    lg: 64,
  };

  const textSizeMap = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <div className="flex items-center gap-3">
      <Club360Logo size={sizeMap[size]} />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-neutral ${textSizeMap[size]}`}>
            Club360 UAE
          </span>
          {size !== 'sm' && (
            <span className="text-sm text-gray-500">Complete Club Management Platform</span>
          )}
        </div>
      )}
    </div>
  );
}
