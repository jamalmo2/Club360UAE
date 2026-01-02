import { BarChart3, TrendingUp, Users, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const matchStats = [
  { match: 'vs Al Wahda', goals: 3, assists: 2, possession: 58 },
  { match: 'vs Al Ain', goals: 2, assists: 1, possession: 45 },
  { match: 'vs Shabab', goals: 4, assists: 3, possession: 62 },
  { match: 'vs Al Nasr', goals: 1, assists: 1, possession: 52 },
];

const trainingActivity = [
  { week: 'Week 1', sessions: 4, attendance: 85 },
  { week: 'Week 2', sessions: 5, attendance: 90 },
  { week: 'Week 3', sessions: 4, attendance: 88 },
  { week: 'Week 4', sessions: 5, attendance: 92 },
];

export default function Statistics() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-secondary">{t('statistics.title')}</h1>
        <p className="text-gray-600 mt-1">{t('statistics.description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('statistics.totalMatches')}</p>
              <p className="text-2xl font-bold text-secondary mt-1">12</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('statistics.winRate')}</p>
              <p className="text-2xl font-bold text-secondary mt-1">75%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('statistics.avgAttendance')}</p>
              <p className="text-2xl font-bold text-secondary mt-1">90%</p>
            </div>
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('statistics.goalsScored')}</p>
              <p className="text-2xl font-bold text-secondary mt-1">28</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <h2 className="text-xl font-bold text-secondary mb-4">{t('statistics.matchStatistics')}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={matchStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="match" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="goals" fill="#1B5E7E" name="Goals" />
              <Bar dataKey="assists" fill="#D4AF37" name="Assists" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <h2 className="text-xl font-bold text-secondary mb-4">{t('statistics.trainingActivity')}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trainingActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sessions" stroke="#1B5E7E" strokeWidth={2} name="Sessions" />
              <Line type="monotone" dataKey="attendance" stroke="#D4AF37" strokeWidth={2} name="Attendance %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <h2 className="text-xl font-bold text-secondary mb-4">{t('statistics.physicalStrainReports')}</h2>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">{t('statistics.physicalStrainMonitoring')}</p>
          <p className="text-sm text-gray-500 mt-2">{t('statistics.trackPlayerWorkload')}</p>
        </div>
      </div>
    </div>
  );
}
