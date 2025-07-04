import React from 'react';
import { Target, Shield, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TacticsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const tactics = [
    {
      id: 'positioning',
      icon: Target,
      title: {
        tr: 'Pozisyonlama',
        en: 'Positioning'
      },
      description: {
        tr: 'Doğru pozisyon almak, savaşın kaderini belirler. Haritayı iyi tanıyın ve avantajlı konumları kullanın.',
        en: 'Proper positioning determines the fate of battle. Know the map well and use advantageous positions.'
      },
      tips: {
        tr: [
          'Çalılıklarda saklanın',
          'Yüksek yerlerden avantaj sağlayın',
          'Duvarları kalkan olarak kullanın',
          'Kaçış yollarını planlayın'
        ],
        en: [
          'Hide in bushes',
          'Gain advantage from high ground',
          'Use walls as shields',
          'Plan escape routes'
        ]
      }
    },
    {
      id: 'teamwork',
      icon: Users,
      title: {
        tr: 'Takım Çalışması',
        en: 'Teamwork'
      },
      description: {
        tr: 'Brawl Stars bir takım oyunudur. Koordinasyon ve iletişim başarının anahtarıdır.',
        en: 'Brawl Stars is a team game. Coordination and communication are keys to success.'
      },
      tips: {
        tr: [
          'Takım arkadaşlarınızı destekleyin',
          'Aynı hedefi odaklayın',
          'Süperleri koordine edin',
          'Birlikte hareket edin'
        ],
        en: [
          'Support your teammates',
          'Focus the same target',
          'Coordinate supers',
          'Move together'
        ]
      }
    },
    {
      id: 'resource-management',
      icon: Zap,
      title: {
        tr: 'Kaynak Yönetimi',
        en: 'Resource Management'
      },
      description: {
        tr: 'Süper, mühimmat ve pozisyon gibi kaynakları akıllıca yönetin.',
        en: 'Manage resources like super, ammo, and position wisely.'
      },
      tips: {
        tr: [
          'Süperinizi doğru zamanda kullanın',
          'Mühimmatınızı boşa harcamayın',
          'Güçlendirmeleri stratejik alın',
          'Enerji yönetimi yapın'
        ],
        en: [
          'Use your super at the right time',
          'Don\'t waste your ammo',
          'Take power-ups strategically',
          'Manage energy efficiently'
        ]
      }
    },
    {
      id: 'adaptation',
      icon: Shield,
      title: {
        tr: 'Adaptasyon',
        en: 'Adaptation'
      },
      description: {
        tr: 'Her oyun farklıdır. Duruma göre stratejinizi değiştirin ve esnek olun.',
        en: 'Every game is different. Change your strategy according to the situation and be flexible.'
      },
      tips: {
        tr: [
          'Düşman takımını analiz edin',
          'Harita özelliklerini kullanın',
          'Oyun moduna göre taktik değiştirin',
          'Hızlı karar verin'
        ],
        en: [
          'Analyze enemy team',
          'Use map features',
          'Change tactics based on game mode',
          'Make quick decisions'
        ]
      }
    }
  ];

  return (
    <section className="py-16 bg-brawl-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            {t('tacticsStrategy')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('tacticsDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tactics.map((tactic) => {
            const IconComponent = tactic.icon;
            return (
              <div key={tactic.id} className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-8 glow-border card-hover">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brawl-blue to-brawl-purple rounded-full flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {tactic.title[language]}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tactic.description[language]}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-brawl-blue mb-4">
                    {language === 'tr' ? 'Temel İpuçları:' : 'Key Tips:'}
                  </h4>
                  <ul className="space-y-2">
                    {tactic.tips[language].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-brawl-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-brawl-blue/10 to-brawl-purple/10 rounded-lg p-8 border border-brawl-blue/20">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            {language === 'tr' ? 'Pro İpucu' : 'Pro Tip'}
          </h3>
          <p className="text-gray-300 text-center text-lg leading-relaxed">
            {language === 'tr' 
              ? 'En iyi oyuncular sürekli öğrenmeye devam eder. Her maçtan sonra performansınızı analiz edin ve hatalarınızdan ders çıkarın. Sabır ve pratik ile herkes profesyonel seviyeye ulaşabilir.'
              : 'The best players never stop learning. Analyze your performance after each match and learn from your mistakes. With patience and practice, anyone can reach professional level.'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default TacticsSection;