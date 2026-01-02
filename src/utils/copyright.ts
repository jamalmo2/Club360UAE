/**
 * Copyright (c) 2026 Shaheen Sports. All Rights Reserved.
 * 
 * PROPRIETARY SOFTWARE - UNAUTHORIZED COPYING PROHIBITED
 * 
 * This software is the proprietary property of Shaheen Sports.
 * Unauthorized copying, reproduction, or distribution is strictly prohibited
 * and may result in severe civil and criminal penalties.
 * 
 * For licensing inquiries: licensing@shaheensports.com
 */

export const COPYRIGHT_NOTICE = '© 2026 Shaheen Sports. All Rights Reserved. Proprietary Software.';

export function displayCopyrightNotice() {
  if (typeof window !== 'undefined') {
    console.log('%c⚠️ PROPRIETARY SOFTWARE ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%cCopyright (c) 2026 Shaheen Sports. All Rights Reserved.', 'color: #1B5E7E; font-size: 12px;');
    console.log('%cUnauthorized copying, reproduction, or distribution is strictly prohibited.', 'color: red; font-size: 12px;');
    console.log('%cFor licensing inquiries: licensing@shaheensports.com', 'color: #666; font-size: 11px;');
  }
  return COPYRIGHT_NOTICE;
}
