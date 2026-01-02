import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

interface AddPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (player: any) => void;
}

export default function AddPlayerModal({ isOpen, onClose, onSave }: AddPlayerModalProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    teamId: 'team-1',
    email: '',
    phone: '',
    dateOfBirth: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create new player object
    const newPlayer = {
      id: `p${Date.now()}`,
      ...formData,
      stats: {
        matchesPlayed: 0,
        goals: 0,
        assists: 0,
        attendanceRate: 0,
      },
      goals: [],
    };
    onSave(newPlayer);
    // Reset form
    setFormData({
      name: '',
      position: '',
      teamId: 'team-1',
      email: '',
      phone: '',
      dateOfBirth: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('players.addNewPlayer')} size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('players.fullName')} *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('players.fullName')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('players.position')}
          </label>
          <select
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">{t('players.selectPosition')}</option>
            <option value="Goalkeeper">{t('players.goalkeeper')}</option>
            <option value="Defender">{t('players.defender')}</option>
            <option value="Midfielder">{t('players.midfielder')}</option>
            <option value="Forward">{t('players.forward')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('players.email')}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('players.email')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('players.phone')}
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="+971 XX XXX XXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('players.dateOfBirth')}
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="bg-white hover:bg-gray-50 text-neutral font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {t('common.cancel')}
          </button>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)]"
          >
            {t('players.addPlayer')}
          </button>
        </div>
      </form>
    </Modal>
  );
}
