import React from 'react';
import { TrendingUp, BarChart3, Zap, Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MetaSection: React.FC = () => {
  const { t } = useLanguage();

  // Admin tarafından eklenecek güncellemeler için boş state
  const metaUpdates: any[] = [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            {t('metaAnalysis')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('metaDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metaUpdates.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-brawl-blue to-brawl-purple rounded-full flex items-center justify-center mx-auto mb-4 opacity-50">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400 text-lg">
                Meta güncellemeleri admin tarafından eklenecek
              </p>
            </div>
          ) : (
            metaUpdates.map((update, index) => (
              <div key={index} className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border card-hover">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border ${
                    update.priority === 'high' ? 'text-red-400 bg-red-900/20 border-red-800' :
                    update.priority === 'medium' ? 'text-yellow-400 bg-yellow-900/20 border-yellow-800' :
                    'text-green-400 bg-green-900/20 border-green-800'
                  }`}>
                    {update.priority === 'high' ? <Zap className="w-3 h-3" /> :
                     update.priority === 'medium' ? <TrendingUp className="w-3 h-3" /> :
                     <BarChart3 className="w-3 h-3" />}
                    <span>{update.priority === 'high' ? 'Yüksek' : update.priority === 'medium' ? 'Orta' : 'Düşük'}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{update.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{update.title}</h3>
                <p className="text-gray-400 mb-4">{update.description}</p>
                
                <button className="w-full bg-gradient-to-r from-brawl-blue/20 to-brawl-purple/20 text-brawl-blue border border-brawl-blue/30 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-brawl-blue/30 hover:to-brawl-purple/30 transition-all duration-300">
                  Detayları Gör
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MetaSection;