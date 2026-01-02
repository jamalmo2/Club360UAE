import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import { Upload } from 'lucide-react';

interface UploadVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (video: any) => void;
}

export default function UploadVideoModal({ isOpen, onClose, onSave }: UploadVideoModalProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVideo = {
      id: `video-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      uploadDate: new Date().toISOString(),
      duration: '0:00',
      thumbnail: null,
    };
    onSave(newVideo);
    setFormData({
      title: '',
      description: '',
      tags: '',
    });
    setFile(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('videos.uploadVideo')} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('videos.videoFile')} *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <label className="cursor-pointer">
              <span className="text-primary hover:text-primary-dark font-medium">
                {t('videos.clickToUpload')}
              </span>
              <input
                type="file"
                accept="video/*"
                required
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
            {file && (
              <p className="mt-2 text-sm text-gray-600">{file.name}</p>
            )}
            <p className="mt-2 text-xs text-gray-500">MP4, AVI, MOV up to 500MB</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('videos.title')} *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('videos.title')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('videos.description')}
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('videos.description')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('videos.tags')} ({t('videos.commaSeparated')})
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('videos.commaSeparated')}
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
            {t('videos.upload')}
          </button>
        </div>
      </form>
    </Modal>
  );
}
