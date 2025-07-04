import React from 'react';
import { Trophy, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brawl-blue/10 to-brawl-purple/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{t('heroTitle')}</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-brawl-blue to-brawl-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Profesyonel Eğitim</h3>
              <p className="text-gray-400">En iyi oyunculardan öğrenin ve becerilerinizi geliştirin</p>
            </div>

            <div className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-brawl-purple to-brawl-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Güncel Stratejiler</h3>
              <p className="text-gray-400">Meta değişikliklerini takip edin ve avantaj sağlayın</p>
            </div>

            <div className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-brawl-blue to-brawl-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Aktif Topluluk</h3>
              <p className="text-gray-400">Diğer oyuncularla deneyim paylaşın ve gelişin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;