import { Send, Image, Paperclip, Bell, CheckCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { mockPosts, mockChatMessages } from '../data/mockData';
import { format } from 'date-fns';
import { useState } from 'react';

export default function Communication() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'wall' | 'chat'>('wall');
  const [newPost, setNewPost] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [posts, setPosts] = useState(mockPosts);
  const [messages, setMessages] = useState(mockChatMessages);

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: `post-${Date.now()}`,
        author: 'You',
        content: newPost,
        timestamp: new Date().toISOString(),
        type: 'general' as const,
      };
      setPosts([post, ...posts]);
      setNewPost('');
      alert('Post published successfully!');
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: `msg-${Date.now()}`,
        senderId: 'you',
        senderName: 'You',
        content: newMessage,
        timestamp: new Date().toISOString(),
        read: false,
        teamId: 'team-1',
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary">{t('communication.title')}</h1>
          <p className="text-gray-600 mt-1">{t('communication.description')}</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button 
            onClick={() => alert('Notification settings coming soon!')}
            className="bg-white hover:bg-gray-50 text-neutral font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md flex items-center space-x-2"
          >
            <Bell className="w-4 h-4" />
            <span>{t('communication.notifications')}</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('wall')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'wall'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {t('communication.wallPosts')}
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'chat'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {t('communication.teamChat')}
          </button>
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'wall' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Post Feed */}
          <div className="lg:col-span-2 space-y-4">
            {/* Create Post */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder={t('communication.whatsOnYourMind')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => alert('Image upload coming soon!')}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                      >
                        <Image className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => alert('File attachment coming soon!')}
                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                      >
                        <Paperclip className="w-5 h-5" />
                      </button>
                    </div>
                    <button 
                      onClick={handlePost}
                      className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)]"
                    >
                      {t('communication.post')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-secondary">{post.author}</span>
                        <span className="text-xs text-gray-500">
                          {format(new Date(post.timestamp), 'MMM dd, h:mm a')}
                        </span>
                        {post.type === 'announcement' && (
                          <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-semibold rounded">
                            Announcement
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-3">{post.content}</p>
                      {post.media && post.media.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {post.media.map((_, idx) => (
                            <div key={idx} className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                              <Image className="w-8 h-8 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button 
                          onClick={() => alert('Like functionality coming soon!')}
                          className="hover:text-primary"
                        >
                          {t('communication.like')}
                        </button>
                        <button 
                          onClick={() => alert('Comment functionality coming soon!')}
                          className="hover:text-primary"
                        >
                          {t('communication.comment')}
                        </button>
                        <button 
                          onClick={() => alert('Share functionality coming soon!')}
                          className="hover:text-primary"
                        >
                          {t('communication.share')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Teams/Filter */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
              <h3 className="font-semibold text-secondary mb-3">{t('communication.filterByTeam')}</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary" defaultChecked />
                  <span className="text-sm text-gray-700">{t('communication.allTeams')}</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary" />
                  <span className="text-sm text-gray-700">U-16 Elite</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary" />
                  <span className="text-sm text-gray-700">U-14 Academy</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary" />
                  <span className="text-sm text-gray-700">Senior Team</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
              <h3 className="font-semibold text-secondary mb-3">{t('communication.notificationSettings')}</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-700">{t('communication.pushNotifications')}</span>
                  <input type="checkbox" className="rounded text-primary" defaultChecked />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-700">{t('communication.emailAlerts')}</span>
                  <input type="checkbox" className="rounded text-primary" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-700">{t('communication.smsNotifications')}</span>
                  <input type="checkbox" className="rounded text-primary" />
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat List */}
          <div className="lg:col-span-1 space-y-2">
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
              <input
                type="text"
                placeholder={t('communication.searchConversations')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-0 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-secondary">{t('communication.teamChats')}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                      U16
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-secondary truncate">U-16 Elite</p>
                      <p className="text-sm text-gray-500 truncate">Practice moved to 6 PM today</p>
                    </div>
                    <span className="text-xs text-gray-400">10:05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-0 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    U16
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">U-16 Elite</p>
                    <p className="text-xs text-gray-500">12 {t('communication.members')}</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {msg.senderName.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-sm text-secondary">{msg.senderName}</span>
                        <span className="text-xs text-gray-500">
                          {format(new Date(msg.timestamp), 'h:mm a')}
                        </span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 inline-block">
                        <p className="text-sm text-gray-800">{msg.content}</p>
                      </div>
                      {msg.read && (
                        <div className="mt-1 flex items-center space-x-1">
                          <CheckCheck className="w-4 h-4 text-blue-500" />
                          <span className="text-xs text-gray-400">{t('communication.read')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => alert('File attachment coming soon!')}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder={t('communication.typeAMessage')}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && newMessage.trim()) {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button 
                    onClick={handleSendMessage}
                    type="button"
                    className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)] p-2"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
