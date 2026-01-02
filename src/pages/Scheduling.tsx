import { Calendar, Plus, MapPin, Clock, Users, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { mockEvents } from '../data/mockData';
import { format } from 'date-fns';
import { getEventImage } from '../utils/images';
import AddEventModal from '../components/AddEventModal';

const eventTypeColors = {
  'match': 'bg-blue-100 text-blue-800',
  'practice': 'bg-green-100 text-green-800',
  'camp': 'bg-accent/20 text-accent',
  'other': 'bg-gray-100 text-gray-800',
};

const attendanceStatusIcons = {
  'attended': { icon: CheckCircle, color: 'text-green-600' },
  'didnt_attend': { icon: XCircle, color: 'text-red-600' },
  'no_response': { icon: AlertCircle, color: 'text-yellow-600' },
};

export default function Scheduling() {
  const { t } = useTranslation();
  const [events, setEvents] = useState(mockEvents);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddEvent = (newEvent: any) => {
    setEvents([...events, newEvent]);
    alert(`Event "${newEvent.title}" has been created successfully!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary">{t('scheduling.title')}</h1>
          <p className="text-gray-600 mt-1">{t('scheduling.description')}</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button 
            onClick={() => alert('Calendar view coming soon!')}
            className="bg-white hover:bg-gray-50 text-neutral font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md flex items-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('scheduling.calendarView')}</span>
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)] flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>{t('scheduling.newEvent')}</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('scheduling.thisWeek')}</p>
              <p className="text-2xl font-bold text-secondary mt-1">{events.length}</p>
              <p className="text-xs text-gray-500 mt-1">{t('scheduling.eventsScheduled')}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('dashboard.attendanceRate')}</p>
              <p className="text-2xl font-bold text-secondary mt-1">90%</p>
              <p className="text-xs text-gray-500 mt-1">{t('scheduling.averageThisMonth')}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('dashboard.upcomingEvents')}</p>
              <p className="text-2xl font-bold text-secondary mt-1">
                {events.filter(e => new Date(e.startTime) > new Date()).length}
              </p>
              <p className="text-xs text-gray-500 mt-1">{t('dashboard.next7Days')}</p>
            </div>
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('scheduling.timeZone')}</p>
              <p className="text-lg font-bold text-secondary mt-1">GST</p>
              <p className="text-xs text-gray-500 mt-1">{t('scheduling.gulfStandardTime')}</p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
        <h2 className="text-xl font-bold text-secondary mb-4">{t('scheduling.upcomingEvents')}</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                {/* Event Image */}
                <div className="md:w-48 h-32 md:h-auto bg-gradient-to-br from-primary/20 to-primary/30 flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={getEventImage(event.type, 200)} 
                    alt={event.type}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-primary/40" />
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="flex-1 p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-secondary">{event.title}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${eventTypeColors[event.type]}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>
                            {format(new Date(event.startTime), 'MMM dd, yyyy • h:mm a')} - 
                            {format(new Date(event.endTime), 'h:mm a')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        {event.teamId && (
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>U-16 Elite</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <button 
                        onClick={() => alert(`Viewing details for event: ${event.title}`)}
                        className="bg-white hover:bg-gray-50 text-neutral font-semibold px-4 py-2 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md text-sm"
                      >
                        {t('scheduling.viewDetails')}
                      </button>
                    </div>
                  </div>

                  {/* Attendance Section */}
                  {event.attendance && event.attendance.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-secondary mb-2">{t('scheduling.attendance')}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {event.attendance.map((record) => {
                          const StatusIcon = attendanceStatusIcons[record.status].icon;
                          const statusColor = attendanceStatusIcons[record.status].color;
                          return (
                            <div key={record.playerId} className="flex items-center space-x-2 text-sm">
                              <StatusIcon className={`w-4 h-4 ${statusColor}`} />
                              <span className="text-gray-700">{record.playerName}</span>
                              <span className="text-xs text-gray-500 ml-auto capitalize">
                                {record.status.replace('_', ' ')}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar View Placeholder */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
        <h2 className="text-xl font-bold text-secondary mb-4">{t('scheduling.calendarView')}</h2>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Full calendar view coming soon</p>
          <p className="text-sm text-gray-500 mt-2">Integrated calendar with team and club level views</p>
        </div>
      </div>

      {/* Add Event Modal */}
      <AddEventModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddEvent}
      />
    </div>
  );
}
