import { DollarSign, TrendingUp, Calendar, MessageSquare, Users, Trophy, Clock, MapPin, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { mockPaymentReport, mockRevenueData, mockPosts, mockEvents } from '../data/mockData';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../contexts/CurrencyContext';

const statusColors = {
  'Paid': '#10B981',
  'Open': '#3B82F6',
  'Past Due': '#EF4444',
  'Uncollectible': '#6B7280',
};

const pieData = [
  { name: 'Paid', value: mockPaymentReport.paid, color: statusColors.Paid },
  { name: 'Open', value: mockPaymentReport.open, color: statusColors.Open },
  { name: 'Past Due', value: mockPaymentReport.pastDue, color: statusColors['Past Due'] },
  { name: 'Uncollectible', value: mockPaymentReport.uncollectible, color: statusColors.Uncollectible },
];

// Placeholder image URLs (using placeholder services)
const getPlaceholderImage = (width: number, height: number, text: string) => 
  `https://placehold.co/${width}x${height}/1B5E7E/FFFFFF?text=${encodeURIComponent(text)}`;

export default function Dashboard() {
  const { t } = useTranslation();
  const { currency, formatCurrency } = useCurrency();

  // Mock match results - UAE teams
  const matchResults = [
    { team1: 'Shaheen U-16', score1: 2, team2: 'Al Wahda FC', score2: 1, date: '2024-01-07', location: 'Dubai' },
    { team1: 'Shaheen U-14', score1: 3, team2: 'Al Ain Academy', score2: 2, date: '2024-01-06', location: 'Abu Dhabi' },
    { team1: 'Shaheen U-16', score1: 1, team2: 'Shabab Al Ahli', score2: 1, date: '2024-01-05', location: 'Dubai' },
    { team1: 'Shaheen U-12', score1: 4, team2: 'Al Nasr Academy', score2: 0, date: '2024-01-04', location: 'Sharjah' },
  ];

  return (
    <div className="space-y-6">
          {/* Welcome Section with User Info */}
          <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 lg:p-10 text-white shadow-xl">
            {/* Gold accent overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-24 -mb-24 blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{t('dashboard.welcomeBack')}, Coach Ali</h1>
              <p className="text-white/90 text-lg">Welcome to Club360 UAE</p>
              <div className="mt-4 flex items-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">🇦🇪 UAE</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">GST Timezone</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">{currency} {t('dashboard.currency')}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-24 -mb-24 blur-2xl" />
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('dashboard.salesVolume')}</p>
              <p className="text-3xl font-bold text-secondary">
                {formatCurrency(mockPaymentReport.total)}
              </p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% {t('dashboard.fromLastMonth')}
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-md">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('dashboard.attendanceRate')}</p>
              <p className="text-3xl font-bold text-secondary">90%</p>
              <p className="text-xs text-gray-500 mt-1">{t('dashboard.thisMonthAverage')}</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-md">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('dashboard.upcomingEvents')}</p>
              <p className="text-3xl font-bold text-secondary">{mockEvents.length}</p>
              <p className="text-xs text-gray-500 mt-1">{t('dashboard.next7Days')}</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl flex items-center justify-center shadow-md">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('dashboard.activeMembers')}</p>
              <p className="text-3xl font-bold text-secondary">156</p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8 {t('dashboard.newThisWeek')}
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-md">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-secondary">{t('dashboard.revenueOverview')}</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Last 7 days</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={mockRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => format(new Date(value), 'MMM dd')}
                  stroke="#6b7280"
                  fontSize={12}
                />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  formatter={(value: number | undefined) => value ? [formatCurrency(value), 'Revenue'] : ['', '']}
                  labelFormatter={(label) => format(new Date(label), 'MMM dd, yyyy')}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#1B5E7E" 
                  strokeWidth={3}
                  dot={{ fill: '#1B5E7E', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Match Results */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-secondary">{t('dashboard.recentMatchResults')}</h2>
              <Trophy className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-4">
              {matchResults.map((match, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center overflow-hidden">
                          <img 
                            src={getPlaceholderImage(48, 48, 'S')} 
                            alt="Team logo" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-secondary">{match.team1}</span>
                            <span className="text-2xl font-bold text-primary">{match.score1}</span>
                            <span className="text-gray-400">-</span>
                            <span className="text-2xl font-bold text-primary">{match.score2}</span>
                            <span className="font-semibold text-secondary">{match.team2}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {format(new Date(match.date), 'MMM dd, yyyy')} • {match.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      match.score1 > match.score2 
                        ? 'bg-green-100 text-green-800' 
                        : match.score1 === match.score2 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {match.score1 > match.score2 ? t('dashboard.won') : match.score1 === match.score2 ? t('dashboard.draw') : t('dashboard.lost')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-secondary">{t('dashboard.upcomingEvents')}</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {mockEvents.slice(0, 3).map((event) => (
                <div key={event.id} className="border-l-4 border-primary pl-4 py-3 hover:bg-gray-50 rounded-r-lg transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-secondary text-sm mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-600 mb-1">
                        <Clock className="w-3 h-3" />
                        <span>{format(new Date(event.startTime), 'MMM dd, h:mm a')}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Report */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50">
            <h2 className="text-lg font-bold text-secondary mb-4">{t('dashboard.attendanceReport')}</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">{t('dashboard.attended')}</span>
                </div>
                <span className="font-bold text-secondary">90%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-gray-700">{t('dashboard.didntAttend')}</span>
                </div>
                <span className="font-bold text-secondary">8%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm text-gray-700">{t('dashboard.noResponse')}</span>
                </div>
                <span className="font-bold text-secondary">2%</span>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-secondary">{t('dashboard.recentPosts')}</h2>
              <MessageSquare className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {mockPosts.slice(0, 2).map((post) => (
                <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                      {post.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-secondary text-sm">{post.author}</span>
                        <span className="text-xs text-gray-500">
                          {format(new Date(post.timestamp), 'MMM dd, h:mm a')}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm line-clamp-2">{post.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Status & Registration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Status */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <h2 className="text-xl font-bold text-secondary mb-4">{t('dashboard.paymentStatus')}</h2>
          <div className="flex items-center justify-center mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number | undefined) => value ? formatCurrency(value) : ''} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50">
                <div 
                  className="w-4 h-4 rounded-full shadow-sm" 
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-600 truncate">{item.name}</p>
                  <p className="text-sm font-semibold text-secondary">
                    {formatCurrency(item.value)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Summary */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10">
          <h2 className="text-xl font-bold text-secondary mb-4">{t('dashboard.summerCamp')}</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-3xl font-bold text-secondary">392</p>
              <p className="text-sm text-gray-600">{t('dashboard.registrants')}</p>
            </div>
            <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
              <Users className="w-8 h-8 text-accent" />
            </div>
          </div>
          <div className="space-y-2">
            {['A. Al Mansoori', 'F. Al Zaabi', 'M. Al Shamsi', 'S. Al Dhaheri', 'K. Al Nuaimi'].map((name, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-white/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 flex items-center justify-center text-xs font-semibold text-primary">
                    {name.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700">{name}</span>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {t('payments.paid')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
