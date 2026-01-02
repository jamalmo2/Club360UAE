import { ArrowRight, Check, CreditCard, MessageSquare, Calendar, BarChart3, Video, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import Logo from '../components/Logo';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CurrencySwitcher from '../components/CurrencySwitcher';

export default function Landing() {
  const { t, i18n } = useTranslation();
  const { currency } = useCurrency();

  // Error boundary - if translation fails, show fallback
  if (!t) {
    console.error('Translation function not available');
  }

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

  const features = [
    {
      icon: CreditCard,
      titleKey: 'landing.featurePaymentManagement',
      descriptionKey: 'landing.featurePaymentDescription',
      headerKey: 'landing.featurePaymentDashboard',
      category: 'Club Management',
      image: 'https://placehold.co/600x400/1B5E7E/FFFFFF?text=Payment+Dashboard'
    },
    {
      icon: MessageSquare,
      titleKey: 'landing.featureTeamCommunication',
      descriptionKey: 'landing.featureTeamCommunicationDescription',
      headerKey: 'landing.featureTeamChat',
      category: 'Club Management',
      image: 'https://placehold.co/600x400/1B5E7E/FFFFFF?text=Team+Chat'
    },
    {
      icon: Calendar,
      titleKey: 'landing.featureEventScheduling',
      descriptionKey: 'landing.featureEventSchedulingDescription',
      headerKey: 'landing.featureCalendarView',
      category: 'Club Management',
      image: 'https://placehold.co/600x400/1B5E7E/FFFFFF?text=Calendar+View'
    },
    {
      icon: Target,
      titleKey: 'landing.featureTrainingPrograms',
      descriptionKey: 'landing.featureTrainingProgramsDescription',
      headerKey: 'landing.featureTrainingPrograms',
      category: 'Sports Development',
      image: 'https://placehold.co/600x400/D4AF37/FFFFFF?text=Training+Plans'
    },
    {
      icon: Video,
      titleKey: 'landing.featureVideoAnalysis',
      descriptionKey: 'landing.featureVideoAnalysisDescription',
      headerKey: 'landing.featureVideoAnalysis',
      category: 'Sports Development',
      image: 'https://placehold.co/600x400/D4AF37/FFFFFF?text=Video+Analysis'
    },
    {
      icon: BarChart3,
      titleKey: 'landing.featurePerformanceAnalytics',
      descriptionKey: 'landing.featurePerformanceAnalyticsDescription',
      headerKey: 'landing.featurePerformanceAnalytics',
      category: 'Sports Development',
      image: 'https://placehold.co/600x400/D4AF37/FFFFFF?text=Statistics'
    },
  ];

  const benefits = [
    t('landing.benefit1'),
    t('landing.benefit2'),
    t('landing.benefit3'),
    t('landing.benefit4'),
    t('landing.benefit5'),
    t('landing.benefit6'),
  ];

  const uaeClubs = [
    { name: 'Al Ain FC', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Al+Ain+FC' },
    { name: 'Shabab Al Ahli', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Shabab+Al+Ahli' },
    { name: 'Al Wahda FC', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Al+Wahda' },
    { name: 'Al Nasr SC', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Al+Nasr' },
    { name: 'Dubai SC', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Dubai+SC' },
    { name: 'Sharjah FC', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Sharjah+FC' },
    { name: 'Al Jazira', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Al+Jazira' },
    { name: 'Baniyas FC', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Baniyas' },
    { name: 'Al Dhafra', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Al+Dhafra' },
    { name: 'Fujairah SC', logo: 'https://placehold.co/120x80/1B5E7E/FFFFFF?text=Fujairah' },
  ];

  return (
    <div className="min-h-screen bg-white relative z-10">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" showText={true} />
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <CurrencySwitcher />
              <Link to="/signin" className="text-gray-700 hover:text-primary font-medium">
                {t('common.signIn')}
              </Link>
              <Link to="/signin" className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)]">
                {t('common.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - UAE Luxury Design */}
      <section className="relative bg-gradient-luxury text-white py-32 lg:py-52 overflow-hidden">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/5" />
        {/* Enhanced luxury gold accents - UAE style */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full -mr-[400px] -mt-[400px] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/15 rounded-full -ml-[350px] -mb-[350px] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/12 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        {/* Islamic geometric pattern overlay - reduced opacity */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 215, 0, 0.08) 10px, rgba(255, 215, 0, 0.08) 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255, 215, 0, 0.08) 10px, rgba(255, 215, 0, 0.08) 20px),
            radial-gradient(circle at 4px 4px, rgba(255, 215, 0, 0.15) 2px, transparent 0)
          `,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px'
        }} />
        {/* Gold border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/25 via-white/20 to-white/25 backdrop-blur-xl rounded-full text-base font-bold mb-10 border-2 border-accent/40 shadow-2xl">
                <span className="text-3xl drop-shadow-lg">🇦🇪</span>
                <span className="text-white drop-shadow-md">{t('landing.madeForUAE')}</span>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight" style={{
                color: '#FFFFFF',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3)'
              }}>
                {t('landing.heroTitle')}
              </h1>
              <h2 className="text-4xl lg:text-6xl font-black mb-8" style={{
                color: '#FFD700',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)'
              }}>
                {t('landing.heroSubtitle')}
              </h2>
              <p className="text-xl lg:text-2xl mb-12 leading-relaxed font-semibold max-w-4xl" style={{
                color: '#FFFFFF',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
              }}>
                {t('landing.heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link to="/signin" className="bg-gradient-to-r from-accent via-accent-light to-accent hover:from-accent-dark hover:via-accent hover:to-accent-dark text-neutral font-bold px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-xl shadow-[0_4px_20px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.4)] group">
                  <span className="relative z-10">{t('landing.startFreeTrial')}</span>
                  <ArrowRight className="ml-3 w-6 h-6 rtl:ml-0 rtl:mr-3 rtl:rotate-180 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
                <Link to="/signin" className="bg-white/15 hover:bg-white/25 text-white border-2 border-accent/50 text-xl px-12 py-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:border-accent shadow-xl backdrop-blur-sm">
                  {t('landing.scheduleDemo')}
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-base">
                <div className="flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-accent/30">
                  <Check className="w-6 h-6 text-accent drop-shadow-lg" />
                  <span className="font-semibold">{t('landing.currencySupport')} ({currency})</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-accent/30">
                  <Check className="w-6 h-6 text-accent drop-shadow-lg" />
                  <span className="font-semibold">{t('landing.gstTimezone')}</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-accent/30">
                  <Check className="w-6 h-6 text-accent drop-shadow-lg" />
                  <span className="font-semibold">{t('landing.arabicReady')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://placehold.co/800x600/D91E5C/FFFFFF?text=Club360+UAE+Dashboard" 
                  alt="Club360 UAE Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-secondary text-center mb-12">
            {t('landing.trustedByClubs')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {uaeClubs.map((club, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <img 
                  src={club.logo} 
                  alt={club.name}
                  className="h-12 lg:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              {t('landing.everythingYouNeed')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('landing.powerfulFeatures')}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-secondary mb-6">{t('landing.administrativeTools')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.filter(f => f.category === 'Club Management').map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden group">
                    <div className="h-56 bg-gradient-primary text-white flex items-center justify-center font-black text-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/15" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                      <span className="relative z-10 drop-shadow-2xl">{t(feature.headerKey)}</span>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-accent to-transparent" />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                    </div>
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 via-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-2xl font-black text-secondary mb-4">{t(feature.titleKey)}</h4>
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">{t(feature.descriptionKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-6">{t('landing.performanceDevelopment')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.filter(f => f.category === 'Sports Development').map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden group">
                    <div className="h-56 bg-gradient-gold text-secondary flex items-center justify-center font-black text-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                      <span className="relative z-10 drop-shadow-lg">{t(feature.headerKey)}</span>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    </div>
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/30 via-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <Icon className="w-8 h-8 text-accent-dark" />
                      </div>
                      <h4 className="text-2xl font-black text-secondary mb-4">{t(feature.titleKey)}</h4>
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">{t(feature.descriptionKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                {t('landing.onePlatformControl')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('landing.platformDescription')}
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://placehold.co/600x700/1B5E7E/FFFFFF?text=Coach+with+Team" 
                  alt="Sports coach with team"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    م
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Mohammed Al Shamsi</p>
                    <p className="text-sm text-gray-500">Head Coach, Dubai Sports Academy</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  "Since implementing Club360 UAE, we've seen a significant improvement in how we manage our club."
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              {t('landing.seeInAction')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('landing.experiencePower')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-0 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img 
                  src="https://placehold.co/800x500/1B5E7E/FFFFFF?text=Dashboard+Overview" 
                  alt="Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">{t('landing.comprehensiveDashboard')}</h3>
                <p className="text-gray-600">
                  {t('landing.dashboardDescription')}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-0 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <img 
                  src="https://placehold.co/800x500/D4AF37/FFFFFF?text=Player+Management" 
                  alt="Player Management"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">{t('landing.playerDevelopment')}</h3>
                <p className="text-gray-600">
                  {t('landing.playerDevelopmentDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENA Region Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://placehold.co/600x500/1B5E7E/FFFFFF?text=UAE+Sports+Scene" 
                  alt="UAE Sports"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
                🇦🇪 {t('landing.launchingIn')}
              </div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                {t('landing.builtForMENA')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('landing.menaDescription')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{t('landing.multiCurrencySupport')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{t('landing.gstIntegration')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{t('landing.arabicSupport')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{t('landing.uaeCompliance')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{t('landing.localSupport')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Supported */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            {t('landing.supportingMultipleSports')}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('landing.sportsDescription')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { key: 'sportFootball', name: 'Football' },
              { key: 'sportBasketball', name: 'Basketball' },
              { key: 'sportVolleyball', name: 'Volleyball' },
              { key: 'sportHockey', name: 'Hockey' },
              { key: 'sportTennis', name: 'Tennis' },
              { key: 'sportSwimming', name: 'Swimming' }
            ].map((sport) => (
              <div key={sport.key} className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden text-center group cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <img 
                    src={`https://placehold.co/200x150/0F4C75/FFFFFF?text=${sport.name}`}
                    alt={t(`landing.${sport.key}`)}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
                <p className="font-bold text-secondary text-lg group-hover:text-primary transition-colors duration-300">{t(`landing.${sport.key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('landing.readyToElevate')}
          </h2>
          <p className="text-xl text-primary-light mb-8">
            {t('landing.joinOrganizations')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signin" className="bg-gradient-to-r from-accent via-accent-light to-accent hover:from-accent-dark hover:via-accent hover:to-accent-dark text-neutral font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-[0_4px_20px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.4)]">
              {t('landing.startFreeTrial')}
            </Link>
            <Link to="/signin" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-lg px-8 py-4 rounded-lg font-medium transition-colors">
              {t('landing.viewPricingPlans')}
            </Link>
          </div>
          <div className="mt-8 text-sm text-primary-light">
            <p>📍 {t('landing.basedInUAE')} • 🇦🇪 {t('landing.launchingIn')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo size="md" showText={true} />
              <p className="text-gray-400 mt-4 text-sm">
                {t('landing.footerDescription')}
              </p>
              <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
                <Globe className="w-4 h-4" />
                <span>UAE • MENA Region</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('landing.footerPlatformFeatures')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{t('landing.footerPaymentProcessing')}</li>
                <li>{t('landing.footerTeamMessaging')}</li>
                <li>{t('landing.footerEventManagement')}</li>
                <li>{t('landing.footerPerformanceTracking')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('landing.footerForOrganizations')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{t('landing.footerSportsClubs')}</li>
                <li>{t('landing.footerTrainingAcademies')}</li>
                <li>{t('landing.footerYouthTeams')}</li>
                <li>{t('landing.footerEducationalInstitutions')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('landing.footerCompany')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{t('landing.footerContactUs')}</li>
                <li>{t('landing.footerPrivacyPolicy')}</li>
                <li>{t('landing.footerTermsOfService')}</li>
                <li>{t('landing.footerSupport')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>{t('landing.footerCopyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
