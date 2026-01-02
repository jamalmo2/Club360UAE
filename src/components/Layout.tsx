/**
 * Copyright (c) 2026 Club360 UAE. All Rights Reserved.
 */

import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  MessageSquare, 
  Calendar, 
  Users, 
  Video, 
  BarChart3,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import CurrencySwitcher from './CurrencySwitcher';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: t('nav.dashboard'), href: '/', icon: LayoutDashboard },
    { name: t('nav.payments'), href: '/payments', icon: CreditCard },
    { name: t('nav.communication'), href: '/communication', icon: MessageSquare },
    { name: t('nav.scheduling'), href: '/scheduling', icon: Calendar },
    { name: t('nav.players'), href: '/players', icon: Users },
    { name: t('nav.videos'), href: '/videos', icon: Video },
    { name: t('nav.statistics'), href: '/statistics', icon: BarChart3 },
  ];

  useEffect(() => {
    // Set document direction based on language
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [i18n.language]);

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Primary color background */}
      <aside className={`
        fixed top-0 ${i18n.language === 'ar' ? 'right-0 border-l' : 'left-0 border-r'} z-50 h-full w-64 bg-primary border-primary-dark shadow-xl transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : (i18n.language === 'ar' ? 'translate-x-full' : '-translate-x-full')}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-primary-dark bg-primary">
            <Logo size="md" showText={true} />
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:text-white/80"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Language and Currency Switchers */}
          <div className="px-4 py-2 border-b border-primary-dark space-y-2">
            <LanguageSwitcher />
            <CurrencySwitcher />
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-white text-primary font-semibold' 
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-primary-dark space-y-3">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm text-white/90 hover:bg-white/10 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{t('common.signOut')}</span>
            </button>
            <p className="text-xs text-white/70 text-center">
              © 2026 Club360 UAE
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`${i18n.language === 'ar' ? 'lg:mr-64' : 'lg:ml-64'}`}>
        {/* Mobile header */}
        <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
          <Logo size="sm" showText={true} />
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <CurrencySwitcher />
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
