/**
 * Copyright (c) 2026 Shaheen Sports. All Rights Reserved.
 * PROPRIETARY SOFTWARE - UNAUTHORIZED COPYING PROHIBITED
 * 
 * Code Protection Utilities
 */

// Prevent right-click context menu
export function disableContextMenu() {
  if (typeof window !== 'undefined') {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });
  }
}

// Prevent common keyboard shortcuts for copying
export function disableCopyShortcuts() {
  if (typeof window !== 'undefined') {
    document.addEventListener('keydown', (e) => {
      // Disable Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+P, Ctrl+U, F12
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || 
                       e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P' || 
                       e.key === 'u' || e.key === 'U')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    });
  }
}

// Detect DevTools opening
export function detectDevTools() {
  if (typeof window !== 'undefined') {
    let devtools = { open: false, orientation: null };
    const threshold = 160;
    
    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          console.clear();
          console.log('%c⚠️ DEVELOPER TOOLS DETECTED ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
          console.log('%cThis application is protected by copyright.', 'color: red; font-size: 14px;');
          console.log('%cUnauthorized access or copying is prohibited.', 'color: red; font-size: 14px;');
        }
      } else {
        devtools.open = false;
      }
    }, 500);
  }
}

// Initialize all protection measures
export function initializeProtection() {
  disableContextMenu();
  disableCopyShortcuts();
  detectDevTools();
}
