import React from 'react';
import { MessageCircle, Users, Trophy, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CommunitySection: React.FC = () => {
  const { t, language } = useLanguage();

  const communityFeatures = [
    {
      icon: MessageCircle,
      title: {
        tr: 'Tartışma Forumu',
        en: 'Discussion Forum'
      },
      description: {
        tr: 'Diğer oyuncularla stratejileri tartışın ve deneyimlerinizi paylaşın',
        en: 'Discuss strategies with other players and share your experiences'
      }
    },
    {
      icon: Users,
      title: {
        tr: 'Takım Bulma',
        en: 'Team Finding'
      },
      description: {
        tr: 'Seviyenize uygun takım arkadaşları bulun ve birlikte oynayın',
        en: 'Find teammates suitable for your level and play together'
      }
    },
    {
      icon: Trophy,
      title: {
        tr: 'Turnuvalar',
        en: 'Tournaments'
      },
      description: {
        tr: 'Düzenli turnuvalara katılın ve becerilerinizi test edin',
        en: 'Participate in regular tournaments and test your skills'
      }
    },
    {
      icon: Star,
      title: {
        tr: 'Liderlik Tablosu',
        en: 'Leaderboard'
      },
      description: {
        tr: 'Topluluk içindeki sıralamanızı görün ve en iyilerle yarışın',
        en: 'See your ranking in the community and compete with the best'
      }
    }
  ];

  const stats = [
    {
      number: '10,000+',
      label: {
        tr: 'Aktif Üye',
        en: 'Active Members'
      }
    },
    {
      number: '500+',
      label: {
        tr: 'Günlük Maç',
        en: 'Daily Matches'
      }
    },
    {
      number: '50+',
      label: {
        tr: 'Haftalık Turnuva',
        en: 'Weekly Tournaments'
      }
    },
    {
      number: '24/7',
      label: {
        tr: 'Destek',
        en: 'Support'
      }
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            {t('community')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('communityDesc')}
          </p>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brawl-blue to-brawl-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title[language]}
                </h3>
                <p className="text-gray-400">
                  {feature.description[language]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-brawl-blue/10 to-brawl-purple/10 rounded-lg p-8 border border-brawl-blue/20 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Community */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {language === 'tr' ? 'Topluluğa Katıl' : 'Join the Community'}
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {language === 'tr' 
              ? 'Binlerce oyuncuyla birlikte Brawl Stars dünyasında yerinizi alın. Öğrenin, öğretin ve birlikte büyüyün!'
              : 'Take your place in the Brawl Stars world with thousands of players. Learn, teach, and grow together!'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-brawl-blue to-brawl-purple text-white py-3 px-8 rounded-lg font-semibold hover:from-brawl-blue/80 hover:to-brawl-purple/80 transition-all duration-300 transform hover:scale-105">
              {language === 'tr' ? 'Discord\'a Katıl' : 'Join Discord'}
            </button>
            <button className="bg-brawl-gray/50 text-white py-3 px-8 rounded-lg font-semibold hover:bg-brawl-gray/70 transition-all duration-300 border border-gray-600">
              {language === 'tr' ? 'Forum\'u Ziyaret Et' : 'Visit Forum'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;