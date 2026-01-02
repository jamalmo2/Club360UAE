/**
 * Copyright (c) 2026 Club360 UAE. All Rights Reserved.
 */

import { ArrowRight, Check, CreditCard, MessageSquare, Calendar, BarChart3, Video, Target, Globe, Star, Users, TrendingUp, Shield, Clock, Zap, Database, PlayCircle, Activity, Award } from 'lucide-react';
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

  useEffect(() => {
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [i18n.language]);

  const uaeClubs = [
    { name: 'Al Ain FC', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Al+Ain+FC' },
    { name: 'Al Nasr', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Al+Nasr' },
    { name: 'Shabab Al Ahli', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Shabab+Al+Ahli' },
    { name: 'Al Wahda', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Al+Wahda' },
    { name: 'Dubai SC', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Dubai+SC' },
    { name: 'Al Jazira', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Al+Jazira' },
    { name: 'Bani Yas', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Bani+Yas' },
    { name: 'Fujairah FC', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Fujairah+FC' },
    { name: 'Sharjah FC', logo: 'https://placehold.co/150x100/1B5E7E/FFFFFF?text=Sharjah+FC' },
  ];

  const platformFeatures = {
    management: [
      { icon: CreditCard, title: t('landing.paymentsRegistrations') },
      { icon: Calendar, title: t('landing.scheduling') },
      { icon: MessageSquare, title: t('landing.communication') },
      { icon: Globe, title: t('landing.websites') },
    ],
    sports: [
      { icon: Target, title: t('landing.trainingPlanning') },
      { icon: Video, title: t('landing.video') },
      { icon: BarChart3, title: t('landing.statisticsData') },
      { icon: Users, title: t('landing.playerDevelopment') },
    ],
  };

  const testimonials = [
    {
      name: 'Mohammed Al Shamsi',
      title: 'Head Coach',
      club: 'Dubai Sports Academy',
      quote: 'Since implementing Club360 UAE, we\'ve seen a significant improvement in how we manage our club.',
      avatar: 'https://placehold.co/80x80/D91E5C/FFFFFF?text=MS',
    },
    {
      name: 'Sarah Al Zaabi',
      title: 'Club Director',
      club: 'Al Wahda FC',
      quote: 'The platform has streamlined our operations and improved communication across all teams.',
      avatar: 'https://placehold.co/80x80/1B5E7E/FFFFFF?text=SZ',
    },
    {
      name: 'Ahmed Al Mansoori',
      title: 'Technical Director',
      club: 'Al Ain FC',
      quote: 'Club360 UAE gives us complete control over player development and performance tracking.',
      avatar: 'https://placehold.co/80x80/D91E5C/FFFFFF?text=AM',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo size="md" showText={true} />
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <CurrencySwitcher />
              <Link to="/signin" className="text-gray-700 hover:text-primary font-medium transition-colors">
                {t('common.signIn')}
              </Link>
              <Link 
                to="/signin" 
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)]"
              >
                {t('common.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-secondary text-white py-32 lg:py-40 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full -mr-[300px] -mt-[300px] blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full -ml-[250px] -mb-[250px] blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-8 border border-white/30">
                <span className="text-xl">🇦🇪</span>
                <span>{t('landing.madeForUAE')}</span>
                <Star className="w-4 h-4 text-accent fill-accent" />
              </div>

              {/* Main Headline with Gradient */}
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                  {t('landing.heroTitle')}
                </span>
              </h1>
              
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-accent drop-shadow-lg">
                {t('landing.heroSubtitle')}
              </h2>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
                {t('landing.heroDescription')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/signin" 
                  className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-[0_8px_24px_rgba(217,30,92,0.4)]"
                >
                  {t('landing.startFreeTrial')}
                  <ArrowRight className="w-5 h-5 rtl:ml-0 rtl:mr-0 rtl:rotate-180" />
                </Link>
                <Link 
                  to="/signin" 
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 text-lg px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  {t('landing.scheduleDemo')}
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-accent/30">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{t('landing.currencySupport')} ({currency})</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-accent/30">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{t('landing.gstTimezone')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-accent/30">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{t('landing.arabicReady')}</span>
                </div>
              </div>
            </div>

            {/* Product Mockup */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://placehold.co/800x600/D91E5C/FFFFFF?text=Club360+UAE+Dashboard"
                  alt="Club360 UAE Platform"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl backdrop-blur-md border border-accent/30 animate-bounce" style={{ animationDuration: '3s' }} />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-xl backdrop-blur-md border border-white/30 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4">
              {t('landing.trustedBy')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('landing.clubsCount')} • {t('landing.trustedByClubs')}
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
            {uaeClubs.map((club, idx) => (
              <div
                key={idx}
                className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={club.logo}
                  alt={club.name}
                  className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
              {t('landing.allInOnePlatform')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Management Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral mb-6">{t('landing.administrativeTools')}</h3>
              {platformFeatures.management.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-neutral">{feature.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sports Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral mb-6">{t('landing.performanceDevelopment')}</h3>
              {platformFeatures.sports.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border-2 border-secondary/20 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(27,94,126,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(27,94,126,0.15)] hover:border-secondary/40 relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-secondary" />
                      </div>
                      <h4 className="text-xl font-bold text-neutral">{feature.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Payments */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
                {t('landing.betterPayments')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.paymentBenefit1')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.paymentBenefit2')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.paymentBenefit3')}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/D91E5C/FFFFFF?text=Payment+Dashboard"
                  alt="Payment Management"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Communication */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/1B5E7E/FFFFFF?text=Communication+Hub"
                  alt="Communication"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
                {t('landing.streamlineCommunication')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.commBenefit1')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.commBenefit2')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.commBenefit3')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Scheduling */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
                {t('landing.schedulingTitle')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.schedBenefit1')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.schedBenefit2')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.schedBenefit3')}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/D91E5C/FFFFFF?text=Calendar+View"
                  alt="Scheduling"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Training */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/1B5E7E/FFFFFF?text=Training+Planner"
                  alt="Training"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
                {t('landing.trainingResources')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.trainingBenefit1')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.trainingBenefit2')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.trainingBenefit3')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Video */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
                {t('landing.enhanceVideo')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.videoBenefit1')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.videoBenefit2')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.videoBenefit3')}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/D91E5C/FFFFFF?text=Video+Analysis"
                  alt="Video"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Statistics */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/1B5E7E/FFFFFF?text=Statistics+Dashboard"
                  alt="Statistics"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
                {t('landing.performData')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.statsBenefit1')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.statsBenefit2')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.statsBenefit3')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Player Development */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
                {t('landing.playerPotential')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.playerBenefit1')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.playerBenefit2')}</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{t('landing.playerBenefit3')}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/600x400/D91E5C/FFFFFF?text=Player+Profile"
                  alt="Player Development"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UAE-Specific Section */}
      <section className="py-32 bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              {t('landing.builtForMENA')}
            </h2>
            <p className="text-xl text-white/90 mb-4">
              {t('landing.launchingCities')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('landing.multiCurrencySupport')}</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('landing.gstIntegration')}</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('landing.arabicSupport')}</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('landing.uaeCompliance')}</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{t('landing.localSupport')}</h3>
              </div>
            </div>
          </div>

          {/* Sports Icons */}
          <div className="flex flex-wrap justify-center gap-8">
            {['Football', 'Basketball', 'Volleyball', 'Hockey', 'Tennis', 'Swimming'].map((sport) => (
              <div key={sport} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-2 backdrop-blur-sm">
                  <span className="text-2xl">⚽</span>
                </div>
                <span className="text-sm font-semibold">{sport}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-neutral mb-6">
              {t('landing.testimonialsTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-gray-100 p-8 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-neutral">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-primary">{testimonial.club}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary via-primary-light to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            {t('landing.readyTransform')}
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
            {t('landing.joinText')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signin"
              className="bg-gradient-to-r from-accent via-accent-light to-accent hover:from-accent-dark hover:via-accent hover:to-accent-dark text-neutral font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg shadow-[0_4px_20px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.4)]"
            >
              {t('landing.startFreeTrial')}
              <ArrowRight className="w-5 h-5 rtl:ml-0 rtl:mr-0 rtl:rotate-180" />
            </Link>
            <Link
              to="/signin"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 text-lg px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              {t('landing.viewPricingPlans')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Platform Features */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('landing.footerPlatformFeatures')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerPaymentProcessing')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerTeamMessaging')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerEventManagement')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerPerformanceTracking')}</Link></li>
              </ul>
            </div>

            {/* For Organizations */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('landing.footerForOrganizations')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerSportsClubs')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerTrainingAcademies')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerYouthTeams')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerEducationalInstitutions')}</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('landing.footerCompany')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerContactUs')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerPrivacyPolicy')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerTermsOfService')}</Link></li>
                <li><Link to="/signin" className="hover:text-white transition-colors">{t('landing.footerSupport')}</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                {t('landing.footerCopyright')}
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
