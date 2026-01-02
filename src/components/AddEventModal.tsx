import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: any) => void;
}

export default function AddEventModal({ isOpen, onClose, onSave }: AddEventModalProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    type: 'practice',
    startTime: '',
    endTime: '',
    location: '',
    teamId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent = {
      id: `event-${Date.now()}`,
      title: formData.title,
      type: formData.type as 'match' | 'practice' | 'camp' | 'other',
      startTime: new Date(formData.startTime).toISOString(),
      endTime: new Date(formData.endTime).toISOString(),
      location: formData.location,
      teamId: formData.teamId || undefined,
    };
    onSave(newEvent);
    setFormData({
      title: '',
      type: 'practice',
      startTime: '',
      endTime: '',
      location: '',
      teamId: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('scheduling.createNewEvent')} size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('scheduling.eventTitle')} *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('scheduling.eventTitle')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('scheduling.eventType')} *
          </label>
          <select
            required
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="match">{t('scheduling.match')}</option>
            <option value="practice">{t('scheduling.practice')}</option>
            <option value="camp">{t('scheduling.camp')}</option>
            <option value="other">{t('scheduling.other')}</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('scheduling.startTime')} *
            </label>
            <input
              type="datetime-local"
              required
              value={formData.startTime}
              onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('scheduling.endTime')} *
            </label>
            <input
              type="datetime-local"
              required
              value={formData.endTime}
              onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('scheduling.location')} *
          </label>
          <input
            type="text"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('scheduling.location')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('scheduling.team')} (Optional)
          </label>
          <select
            value={formData.teamId}
            onChange={(e) => setFormData({ ...formData, teamId: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">{t('scheduling.allTeams')}</option>
            <option value="team-1">U-16 Elite</option>
            <option value="team-2">U-14 Academy</option>
            <option value="team-3">Senior Team</option>
          </select>
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
            {t('scheduling.createEvent')}
          </button>
        </div>
      </form>
    </Modal>
  );
}
