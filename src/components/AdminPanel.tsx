import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Update {
  id: string;
  title: string;
  category: 'meta' | 'tactics' | 'brawlers' | 'community';
  priority: 'low' | 'medium' | 'high';
  content: string;
  date: string;
}

const AdminPanel: React.FC = () => {
  const { t } = useLanguage();
  const [updates, setUpdates] = useState<Update[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUpdate, setEditingUpdate] = useState<Update | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'meta' as const,
    priority: 'medium' as const,
    content: ''
  });

  useEffect(() => {
    const savedUpdates = localStorage.getItem('adminUpdates');
    if (savedUpdates) {
      setUpdates(JSON.parse(savedUpdates));
    }
  }, []);

  const saveUpdates = (newUpdates: Update[]) => {
    setUpdates(newUpdates);
    localStorage.setItem('adminUpdates', JSON.stringify(newUpdates));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUpdate) {
      const updatedUpdates = updates.map(update =>
        update.id === editingUpdate.id
          ? { ...update, ...formData }
          : update
      );
      saveUpdates(updatedUpdates);
      setEditingUpdate(null);
    } else {
      const newUpdate: Update = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString('tr-TR')
      };
      saveUpdates([newUpdate, ...updates]);
    }

    setFormData({
      title: '',
      category: 'meta',
      priority: 'medium',
      content: ''
    });
    setShowForm(false);
  };

  const handleEdit = (update: Update) => {
    setEditingUpdate(update);
    setFormData({
      title: update.title,
      category: update.category,
      priority: update.priority,
      content: update.content
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Bu güncellemeyi silmek istediğinizden emin misiniz?')) {
      const filteredUpdates = updates.filter(update => update.id !== id);
      saveUpdates(filteredUpdates);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'meta',
      priority: 'medium',
      content: ''
    });
    setEditingUpdate(null);
    setShowForm(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-900/20 border-red-800';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-800';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-800';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'meta': return 'text-blue-400 bg-blue-900/20 border-blue-800';
      case 'tactics': return 'text-purple-400 bg-purple-900/20 border-purple-800';
      case 'brawlers': return 'text-green-400 bg-green-900/20 border-green-800';
      case 'community': return 'text-orange-400 bg-orange-900/20 border-orange-800';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">
            {t('adminPanelTitle')}
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-brawl-blue to-brawl-purple text-white py-3 px-6 rounded-lg font-semibold hover:from-brawl-blue/80 hover:to-brawl-purple/80 transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            <span>{t('addUpdate')}</span>
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-brawl-gray rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingUpdate ? t('editUpdate') : t('addUpdate')}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('title')}
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-brawl-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-brawl-blue focus:border-transparent text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('category')}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="w-full px-4 py-3 bg-brawl-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-brawl-blue focus:border-transparent text-white"
                    >
                      <option value="meta">{t('meta')}</option>
                      <option value="tactics">{t('tactics')}</option>
                      <option value="brawlers">{t('brawlers')}</option>
                      <option value="community">{t('communityCategory')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {t('priority')}
                    </label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                      className="w-full px-4 py-3 bg-brawl-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-brawl-blue focus:border-transparent text-white"
                    >
                      <option value="low">{t('low')}</option>
                      <option value="medium">{t('medium')}</option>
                      <option value="high">{t('high')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('content')}
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-brawl-dark border border-gray-600 rounded-lg focus:ring-2 focus:ring-brawl-blue focus:border-transparent text-white resize-none"
                    required
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex items-center space-x-2 bg-gradient-to-r from-brawl-blue to-brawl-purple text-white py-3 px-6 rounded-lg font-semibold hover:from-brawl-blue/80 hover:to-brawl-purple/80 transition-all duration-300"
                  >
                    <Save className="w-5 h-5" />
                    <span>{editingUpdate ? t('update') : t('save')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="py-3 px-6 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
                  >
                    {t('cancel')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Updates List */}
        <div className="space-y-6">
          {updates.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Henüz güncelleme eklenmemiş. İlk güncellemeyi eklemek için yukarıdaki butona tıklayın.
              </p>
            </div>
          ) : (
            updates.map((update) => (
              <div key={update.id} className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{update.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(update.category)}`}>
                        {t(update.category)}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(update.priority)}`}>
                        {t(update.priority)}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{update.date}</p>
                    <p className="text-gray-300 leading-relaxed">{update.content}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(update)}
                      className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 rounded-lg transition-all duration-300"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(update.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-all duration-300"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;