import { Upload, Search, Play, Tag } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UploadVideoModal from '../components/UploadVideoModal';

export default function Videos() {
  const { t } = useTranslation();
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUploadVideo = (newVideo: any) => {
    alert(`Video "${newVideo.title}" has been uploaded successfully!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary">{t('videos.title')}</h1>
          <p className="text-gray-600 mt-1">{t('videos.description')}</p>
        </div>
        <button 
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)] flex items-center space-x-2 mt-4 md:mt-0"
        >
          <Upload className="w-4 h-4" />
          <span>{t('videos.uploadVideo')}</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex-1 relative mb-4 md:mb-0 md:mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('videos.searchVideos')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button 
            onClick={() => alert('Filter by tag options coming soon!')}
            className="bg-white hover:bg-gray-50 text-neutral font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md flex items-center space-x-2"
          >
            <Tag className="w-4 h-4" />
            <span>{t('videos.filterByTag')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => alert('Video player coming soon!')}
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative group">
                <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  5:23
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-secondary mb-1">Match Highlights - U-16 Elite</h3>
                <p className="text-sm text-gray-500 mb-2">January 7, 2024</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Highlights</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">U-16</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Video Modal */}
      <UploadVideoModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSave={handleUploadVideo}
      />
    </div>
  );
}
