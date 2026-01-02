import { Search, Plus, Target, TrendingUp, Award, Activity } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockPlayers } from '../data/mockData';
import { getPlayerAvatar } from '../utils/images';
import AddPlayerModal from '../components/AddPlayerModal';

export default function Players() {
  const { t } = useTranslation();
  const [players, setPlayers] = useState(mockPlayers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddPlayer = (newPlayer: any) => {
    setPlayers([...players, newPlayer]);
    alert(`Player "${newPlayer.name}" has been added successfully!`);
  };

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.position?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary">{t('players.title')}</h1>
          <p className="text-gray-600 mt-1">{t('players.description')}</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)] flex items-center space-x-2 mt-4 md:mt-0"
        >
          <Plus className="w-4 h-4" />
          <span>{t('players.addPlayer')}</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('players.totalPlayers')}</p>
              <p className="text-2xl font-bold text-secondary">{players.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('players.avgAttendance')}</p>
              <p className="text-2xl font-bold text-secondary">
                {Math.round(players.reduce((acc, p) => acc + (p.stats?.attendanceRate || 0), 0) / players.length)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden bg-gradient-to-br from-accent/10 to-accent/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('players.goalsThisSeason')}</p>
              <p className="text-2xl font-bold text-secondary">
                {players.reduce((acc, p) => acc + (p.stats?.goals || 0), 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{t('players.activeGoals')}</p>
              <p className="text-2xl font-bold text-secondary">
                {players.reduce((acc, p) => acc + (p.goals?.filter(g => g.status === 'in_progress').length || 0), 0)}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1 relative mb-4 md:mb-0 md:mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('players.searchPlayers')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => alert('Filter options coming soon!')}
              className="bg-white hover:bg-gray-50 text-neutral font-semibold px-4 py-2 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md text-sm"
            >
              Filter
            </button>
            <button 
              onClick={() => alert('Sort options coming soon!')}
              className="bg-white hover:bg-gray-50 text-neutral font-semibold px-4 py-2 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md text-sm"
            >
              {t('players.sort')}
            </button>
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden group">
            {/* Player Header with Photo */}
            <div className="relative -m-6 mb-4 h-32 bg-gradient-to-br from-primary to-primary-dark">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-20 h-20 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                  <img 
                    src={getPlayerAvatar(player.name, 80)} 
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Player Info */}
            <div className="mt-10 text-center mb-4">
              <h3 className="font-bold text-lg text-secondary mb-1">{player.name}</h3>
              <p className="text-sm text-gray-500">{player.position} • U-16 Elite</p>
            </div>

            {/* Stats */}
            {player.stats && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-600 mb-1">{t('players.matches')}</p>
                  <p className="text-xl font-bold text-secondary">{player.stats.matchesPlayed}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-600 mb-1">{t('players.goals')}</p>
                  <p className="text-xl font-bold text-secondary">{player.stats.goals}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-600 mb-1">{t('players.assists')}</p>
                  <p className="text-xl font-bold text-secondary">{player.stats.assists}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-600 mb-1">{t('players.attendance')}</p>
                  <p className="text-xl font-bold text-green-600">{player.stats.attendanceRate}%</p>
                </div>
              </div>
            )}

            {/* Goals */}
            {player.goals && player.goals.length > 0 && (
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-secondary">{t('players.developmentGoals')}</span>
                </div>
                <div className="space-y-2">
                  {player.goals.slice(0, 2).map((goal) => (
                    <div key={goal.id} className="flex items-center space-x-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        goal.status === 'done' ? 'bg-green-500' : 'bg-yellow-500'
                      }`} />
                      <span className="text-gray-700 flex-1 truncate">{goal.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        goal.status === 'done' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {goal.status === 'done' ? t('players.done') : t('players.inProgress')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            <button 
              onClick={() => alert(`Viewing profile for ${player.name}`)}
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)] group-hover:bg-primary-dark"
            >
              {t('players.viewFullProfile')}
            </button>
          </div>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden text-center py-12">
          <p className="text-gray-500">No players found matching your search.</p>
        </div>
      )}

      {/* Add Player Modal */}
      <AddPlayerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddPlayer}
      />
    </div>
  );
}
