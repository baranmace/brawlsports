import React, { useState } from 'react';
import { Search, Star, Zap, Shield, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Brawler {
  id: string;
  name: string;
  rarity: 'Starting' | 'Rare' | 'Super Rare' | 'Epic' | 'Mythic' | 'Legendary';
  type: 'Damage Dealer' | 'Tank' | 'Support' | 'Assassin' | 'Marksman' | 'Controller' | 'Artillery';
  health: number;
  damage: number;
  description: {
    tr: string;
    en: string;
  };
  tips: {
    tr: string[];
    en: string[];
  };
  counters: {
    tr: string[];
    en: string[];
  };
  synergies: {
    tr: string[];
    en: string[];
  };
}

const BrawlersSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  // 4 Temmuz 2025 tarihindeki güncel karakterler - Güncel enderliklerle
  const brawlers: Brawler[] = [
    // Starting (Eski Common)
    { 
      id: 'shelly', 
      name: 'Shelly', 
      rarity: 'Starting', 
      type: 'Damage Dealer', 
      health: 4200, 
      damage: 420, 
      description: {
        tr: 'Yakın mesafe savaşçısı, saçma tüfeği ile geniş alan hasarı verir',
        en: 'Close-range fighter who deals wide area damage with her shotgun'
      },
      tips: {
        tr: ['Yakın mesafede savaş', 'Süper ile duvarları kır', 'Çalılıklarda saklan'],
        en: ['Fight at close range', 'Break walls with super', 'Hide in bushes']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Piper', 'Brock'],
        en: ['Long-range brawlers', 'Piper', 'Brock']
      },
      synergies: {
        tr: ['Tank karakterler', 'Bull', 'El Primo'],
        en: ['Tank brawlers', 'Bull', 'El Primo']
      }
    },
    { 
      id: 'nita', 
      name: 'Nita', 
      rarity: 'Starting', 
      type: 'Damage Dealer', 
      health: 4200, 
      damage: 980, 
      description: {
        tr: 'Ayı çağırabilen savaşçı, grup savaşlarında etkili',
        en: 'Fighter who can summon a bear, effective in team fights'
      },
      tips: {
        tr: ['Ayını stratejik kullan', 'Grup savaşlarında etkili', 'Ayı ile baskı yap'],
        en: ['Use bear strategically', 'Effective in team fights', 'Apply pressure with bear']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Colt', 'Rico'],
        en: ['High damage brawlers', 'Colt', 'Rico']
      },
      synergies: {
        tr: ['Destek karakterler', 'Poco', 'Pam'],
        en: ['Support brawlers', 'Poco', 'Pam']
      }
    },
    { 
      id: 'colt', 
      name: 'Colt', 
      rarity: 'Starting', 
      type: 'Marksman', 
      health: 3360, 
      damage: 448, 
      description: {
        tr: 'Uzun menzilli nişancı, hızlı ateş eden tabancalar kullanır',
        en: 'Long-range marksman who uses rapid-fire pistols'
      },
      tips: {
        tr: ['Mesafeyi koru', 'Hedefleme becerini geliştir', 'Açık alanlarda savaş'],
        en: ['Keep distance', 'Improve aiming skills', 'Fight in open areas']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Mortis', 'Edgar'],
        en: ['Fast brawlers', 'Mortis', 'Edgar']
      },
      synergies: {
        tr: ['Tank karakterler', 'Bull', 'Frank'],
        en: ['Tank brawlers', 'Bull', 'Frank']
      }
    },
    { 
      id: 'bull', 
      name: 'Bull', 
      rarity: 'Starting', 
      type: 'Tank', 
      health: 7000, 
      damage: 448, 
      description: {
        tr: 'Yakın mesafe tankı, çalılıklarda görünmezlik kazanır',
        en: 'Close-range tank who gains invisibility in bushes'
      },
      tips: {
        tr: ['Çalılıklarda saklan', 'Yakın mesafeye gel', 'Süper ile duvarları kır'],
        en: ['Hide in bushes', 'Get close', 'Break walls with super']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Piper', 'Brock'],
        en: ['Long-range brawlers', 'Piper', 'Brock']
      },
      synergies: {
        tr: ['Destek karakterler', 'Poco', 'Byron'],
        en: ['Support brawlers', 'Poco', 'Byron']
      }
    },
    { 
      id: 'jessie', 
      name: 'Jessie', 
      rarity: 'Starting', 
      type: 'Controller', 
      health: 3360, 
      damage: 1260, 
      description: {
        tr: 'Taret kurabilen mühendis, zıplayan mermiler kullanır',
        en: 'Engineer who can build turrets and uses bouncing projectiles'
      },
      tips: {
        tr: ['Tareti stratejik yerlere koy', 'Zıplayan mermileri kullan', 'Grup halindeki düşmanlara odaklan'],
        en: ['Place turret strategically', 'Use bouncing shots', 'Focus on grouped enemies']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Thrower karakterler'],
        en: ['Long-range brawlers', 'Thrower brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Diğer kontrol karakterleri'],
        en: ['Tank brawlers', 'Other control brawlers']
      }
    },
    { 
      id: 'brock', 
      name: 'Brock', 
      rarity: 'Starting', 
      type: 'Artillery', 
      health: 2800, 
      damage: 1568, 
      description: {
        tr: 'Roket fırlatan bombardımancı, yüksek hasar verir',
        en: 'Rocket-launching artillery who deals high damage'
      },
      tips: {
        tr: ['Yüksek yerlerden ateş et', 'Duvarların arkasından vur', 'Mesafeyi koru'],
        en: ['Shoot from high ground', 'Attack from behind walls', 'Keep distance']
      },
      counters: {
        tr: ['Hızlı yaklaşan karakterler', 'Mortis', 'Edgar'],
        en: ['Fast approaching brawlers', 'Mortis', 'Edgar']
      },
      synergies: {
        tr: ['Tank karakterler', 'Duvar kıran karakterler'],
        en: ['Tank brawlers', 'Wall-breaking brawlers']
      }
    },
    { 
      id: 'dynamike', 
      name: 'Dynamike', 
      rarity: 'Starting', 
      type: 'Artillery', 
      health: 2800, 
      damage: 1260, 
      description: {
        tr: 'Dinamit atan yaşlı madenci, duvarların arkasından saldırabilir',
        en: 'Old miner who throws dynamite and can attack from behind walls'
      },
      tips: {
        tr: ['Duvarların arkasından at', 'Süper ile kaç', 'Timing önemli'],
        en: ['Throw from behind walls', 'Escape with super', 'Timing is important']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Mortis', 'Edgar'],
        en: ['Fast brawlers', 'Mortis', 'Edgar']
      },
      synergies: {
        tr: ['Tank karakterler', 'Diğer thrower karakterler'],
        en: ['Tank brawlers', 'Other thrower brawlers']
      }
    },
    { 
      id: 'bo', 
      name: 'Bo', 
      rarity: 'Starting', 
      type: 'Controller', 
      health: 4200, 
      damage: 644, 
      description: {
        tr: 'Mayın döşeyen avcı, çalılıklarda görünmezlik kazanır',
        en: 'Hunter who plants mines and gains invisibility in bushes'
      },
      tips: {
        tr: ['Mayınları stratejik yerlere koy', 'Çalılıklarda görünmezlik', 'Takım ile koordine ol'],
        en: ['Place mines strategically', 'Use bush invisibility', 'Coordinate with team']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Thrower karakterler'],
        en: ['Long-range brawlers', 'Thrower brawlers']
      },
      synergies: {
        tr: ['Yakın mesafe karakterler', 'Tank karakterler'],
        en: ['Close-range brawlers', 'Tank brawlers']
      }
    },

    // Rare
    { 
      id: 'el-primo', 
      name: 'El Primo', 
      rarity: 'Rare', 
      type: 'Tank', 
      health: 8400, 
      damage: 504, 
      description: {
        tr: 'Güreşçi tank, süper ile uzun mesafe atlayabilir',
        en: 'Wrestling tank who can jump long distances with his super'
      },
      tips: {
        tr: ['Yakın mesafeye gel', 'Süper ile atlayarak yaklaş', 'Çalılıklarda bekle'],
        en: ['Get close', 'Jump close with super', 'Wait in bushes']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Piper', 'Brock'],
        en: ['Long-range brawlers', 'Piper', 'Brock']
      },
      synergies: {
        tr: ['Destek karakterler', 'Poco', 'Byron'],
        en: ['Support brawlers', 'Poco', 'Byron']
      }
    },
    { 
      id: 'barley', 
      name: 'Barley', 
      rarity: 'Rare', 
      type: 'Artillery', 
      health: 2800, 
      damage: 1120, 
      description: {
        tr: 'Şişe fırlatan barmen, alan hasarı verir',
        en: 'Bottle-throwing bartender who deals area damage'
      },
      tips: {
        tr: ['Duvarların arkasından at', 'Alanı kontrol et', 'Grup halindeki düşmanlara odaklan'],
        en: ['Throw from behind walls', 'Control area', 'Focus on grouped enemies']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Diğer thrower karakterler'],
        en: ['Tank brawlers', 'Other thrower brawlers']
      }
    },
    { 
      id: 'poco', 
      name: 'Poco', 
      rarity: 'Rare', 
      type: 'Support', 
      health: 4200, 
      damage: 980, 
      description: {
        tr: 'İyileştiren müzisyen, takım arkadaşlarını iyileştirir',
        en: 'Healing musician who heals teammates'
      },
      tips: {
        tr: ['Takım arkadaşlarını iyileştir', 'Güvenli mesafede kal', 'Grup savaşlarında etkili'],
        en: ['Heal teammates', 'Stay at safe distance', 'Effective in team fights']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Assassin karakterler'],
        en: ['High damage brawlers', 'Assassin brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Tüm takım'],
        en: ['Tank brawlers', 'Entire team']
      }
    },
    { 
      id: 'rosa', 
      name: 'Rosa', 
      rarity: 'Rare', 
      type: 'Tank', 
      health: 6300, 
      damage: 644, 
      description: {
        tr: 'Botanikçi tank, çalılıklarda hızla hareket eder',
        en: 'Botanist tank who moves fast in bushes'
      },
      tips: {
        tr: ['Çalılıklarda savaş', 'Süper ile hasar azalt', 'Yakın mesafede etkili'],
        en: ['Fight in bushes', 'Reduce damage with super', 'Effective at close range']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Açık alan savaşları'],
        en: ['Long-range brawlers', 'Open area fights']
      },
      synergies: {
        tr: ['Yakın mesafe karakterler', 'Destek karakterler'],
        en: ['Close-range brawlers', 'Support brawlers']
      }
    },

    // Super Rare
    { 
      id: 'rico', 
      name: 'Rico', 
      rarity: 'Super Rare', 
      type: 'Marksman', 
      health: 3360, 
      damage: 448, 
      description: {
        tr: 'Zıplayan mermili robot, duvarlardan sekdirerek saldırır',
        en: 'Robot with bouncing bullets who attacks by ricocheting off walls'
      },
      tips: {
        tr: ['Duvarlardan sekdir', 'Dar alanlarda etkili', 'Açıları hesapla'],
        en: ['Bounce off walls', 'Effective in narrow areas', 'Calculate angles']
      },
      counters: {
        tr: ['Açık alanlarda zor', 'Hızlı karakterler'],
        en: ['Difficult in open areas', 'Fast brawlers']
      },
      synergies: {
        tr: ['Kontrol karakterleri', 'Tank karakterler'],
        en: ['Control brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'darryl', 
      name: 'Darryl', 
      rarity: 'Super Rare', 
      type: 'Tank', 
      health: 6300, 
      damage: 336, 
      description: {
        tr: 'Yuvarlanabilen robot, süper ile hızla yaklaşır',
        en: 'Rolling robot who quickly approaches with his super'
      },
      tips: {
        tr: ['Süper ile yaklaş', 'Sürpriz saldırılar yap', 'Çalılıklarda bekle'],
        en: ['Approach with super', 'Make surprise attacks', 'Wait in bushes']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Kontrol karakterleri'],
        en: ['Long-range brawlers', 'Control brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer tank karakterler'],
        en: ['Support brawlers', 'Other tank brawlers']
      }
    },
    { 
      id: 'penny', 
      name: 'Penny', 
      rarity: 'Super Rare', 
      type: 'Controller', 
      health: 3920, 
      damage: 1176, 
      description: {
        tr: 'Top fırlatan korsan, zıplayan mermiler ve top kullanır',
        en: 'Pirate who shoots cannons, uses bouncing projectiles and cannon'
      },
      tips: {
        tr: ['Topu stratejik yerlere koy', 'Zıplayan mermileri kullan', 'Grup düşmanlarına odaklan'],
        en: ['Place cannon strategically', 'Use bouncing shots', 'Focus on grouped enemies']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Uzun menzilli karakterler'],
        en: ['Fast brawlers', 'Long-range brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Diğer kontrol karakterleri'],
        en: ['Tank brawlers', 'Other control brawlers']
      }
    },
    { 
      id: 'carl', 
      name: 'Carl', 
      rarity: 'Super Rare', 
      type: 'Damage Dealer', 
      health: 4480, 
      damage: 1064, 
      description: {
        tr: 'Kazma fırlatan jeolog, boomerang etkisi ile saldırır',
        en: 'Geologist who throws pickaxe with boomerang effect'
      },
      tips: {
        tr: ['Kazmayı geri yakala', 'Duvarların arkasından vur', 'Menzili iyi kullan'],
        en: ['Catch pickaxe on return', 'Attack from behind walls', 'Use range well']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Yakın mesafe savaşçıları'],
        en: ['Fast brawlers', 'Close-range fighters']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'jacky', 
      name: 'Jacky', 
      rarity: 'Super Rare', 
      type: 'Tank', 
      health: 6300, 
      damage: 1260, 
      description: {
        tr: 'Matkap kullanan işçi, süper ile düşmanları çeker',
        en: 'Construction worker with drill who pulls enemies with super'
      },
      tips: {
        tr: ['Yakın mesafede savaş', 'Süper ile çek', 'Duvarları kır'],
        en: ['Fight at close range', 'Pull with super', 'Break walls']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Hasar karakterleri'],
        en: ['Support brawlers', 'Damage dealers']
      }
    },
    { 
      id: 'gus', 
      name: 'Gus', 
      rarity: 'Super Rare', 
      type: 'Support', 
      health: 3360, 
      damage: 1008, 
      description: {
        tr: 'Hayalet çağıran çocuk, takım arkadaşlarını korur',
        en: 'Ghost-summoning child who protects teammates'
      },
      tips: {
        tr: ['Hayaleti koruma için kullan', 'Takım arkadaşlarını destekle', 'Güvenli mesafede kal'],
        en: ['Use ghost for protection', 'Support teammates', 'Stay at safe distance']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Assassin karakterler'],
        en: ['High damage brawlers', 'Assassin brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Tüm takım'],
        en: ['Tank brawlers', 'Entire team']
      }
    },

    // Epic
    { 
      id: 'piper', 
      name: 'Piper', 
      rarity: 'Epic', 
      type: 'Marksman', 
      health: 2800, 
      damage: 2128, 
      description: {
        tr: 'Uzun menzilli keskin nişancı, mesafe arttıkça hasar artar',
        en: 'Long-range sniper whose damage increases with distance'
      },
      tips: {
        tr: ['Mesafeyi koru', 'Yüksek yerlerden ateş et', 'Süper ile kaç'],
        en: ['Keep distance', 'Shoot from high ground', 'Escape with super']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Duvar yapan karakterler'],
        en: ['Tank brawlers', 'Wall-building brawlers']
      }
    },
    { 
      id: 'pam', 
      name: 'Pam', 
      rarity: 'Epic', 
      type: 'Support', 
      health: 5600, 
      damage: 420, 
      description: {
        tr: 'İyileştirme istasyonu kuran anne, takımını destekler',
        en: 'Mother who builds healing station and supports team'
      },
      tips: {
        tr: ['İstasyonu güvenli yere koy', 'Takımını destekle', 'Grup savaşlarında etkili'],
        en: ['Place station in safe area', 'Support team', 'Effective in team fights']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Thrower karakterler'],
        en: ['Long-range brawlers', 'Thrower brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Tüm takım'],
        en: ['Tank brawlers', 'Entire team']
      }
    },
    { 
      id: 'frank', 
      name: 'Frank', 
      rarity: 'Epic', 
      type: 'Tank', 
      health: 8400, 
      damage: 1568, 
      description: {
        tr: 'Yavaş ama güçlü tank, süper ile düşmanları sersemletir',
        en: 'Slow but powerful tank who stuns enemies with super'
      },
      tips: {
        tr: ['Süper ile sersemlet', 'Takım ile birlikte hareket et', 'Timing önemli'],
        en: ['Stun with super', 'Move with team', 'Timing is important']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Uzun menzilli karakterler'],
        en: ['Fast brawlers', 'Long-range brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Hasar karakterleri'],
        en: ['Support brawlers', 'Damage dealers']
      }
    },
    { 
      id: 'bibi', 
      name: 'Bibi', 
      rarity: 'Epic', 
      type: 'Damage Dealer', 
      health: 4480, 
      damage: 1568, 
      description: {
        tr: 'Beyzbol sopası kullanan genç, şarjlı saldırılar yapar',
        en: 'Young girl with baseball bat who makes charged attacks'
      },
      tips: {
        tr: ['Yakın mesafede savaş', 'Süper ile top fırlat', 'Şarjlı saldırı kullan'],
        en: ['Fight at close range', 'Throw ball with super', 'Use charged attack']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Destek karakterler'],
        en: ['Tank brawlers', 'Support brawlers']
      }
    },
    { 
      id: 'bea', 
      name: 'Bea', 
      rarity: 'Epic', 
      type: 'Marksman', 
      health: 2800, 
      damage: 1120, 
      description: {
        tr: 'Arı temalı bilim insanı, şarjlı saldırılar yapar',
        en: 'Bee-themed scientist who makes charged attacks'
      },
      tips: {
        tr: ['İlk vuruşu şarj et', 'Mesafeyi koru', 'Süper ile yavaşlat'],
        en: ['Charge first shot', 'Keep distance', 'Slow with super']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'nani', 
      name: 'Nani', 
      rarity: 'Epic', 
      type: 'Marksman', 
      health: 2800, 
      damage: 1008, 
      description: {
        tr: 'Robot kontrol eden karakter, üç mermi atar',
        en: 'Robot controller who shoots three projectiles'
      },
      tips: {
        tr: ['3 mermiyi birden vur', 'Süper ile kontrol et', 'Mesafeyi koru'],
        en: ['Hit all 3 shots', 'Control with super', 'Keep distance']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Kontrol karakterleri', 'Tank karakterler'],
        en: ['Control brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'edgar', 
      name: 'Edgar', 
      rarity: 'Epic', 
      type: 'Assassin', 
      health: 3360, 
      damage: 756, 
      description: {
        tr: 'Hızlı saldıran suikastçı, süper ile atlar',
        en: 'Fast-attacking assassin who jumps with super'
      },
      tips: {
        tr: ['Süper ile atla', 'Hızlı saldırılar yap', 'Zayıf hedefleri avla'],
        en: ['Jump with super', 'Make fast attacks', 'Hunt weak targets']
      },
      counters: {
        tr: ['Tank karakterler', 'Grup savaşları'],
        en: ['Tank brawlers', 'Team fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'griff', 
      name: 'Griff', 
      rarity: 'Epic', 
      type: 'Damage Dealer', 
      health: 3920, 
      damage: 448, 
      description: {
        tr: 'Para fırlatan işadamı, yakın mesafede etkili',
        en: 'Money-throwing businessman, effective at close range'
      },
      tips: {
        tr: ['Yakın mesafede etkili', 'Süper ile para topla', 'Grup düşmanlarına odaklan'],
        en: ['Effective at close range', 'Collect money with super', 'Focus on grouped enemies']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'grom', 
      name: 'Grom', 
      rarity: 'Epic', 
      type: 'Artillery', 
      health: 3360, 
      damage: 1344, 
      description: {
        tr: 'Bomba atan demolitionist, alan hasarı verir',
        en: 'Bomb-throwing demolitionist who deals area damage'
      },
      tips: {
        tr: ['Duvarların arkasından at', 'Alanı kontrol et', 'Grup düşmanlarına odaklan'],
        en: ['Throw from behind walls', 'Control area', 'Focus on grouped enemies']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Uzun menzilli karakterler'],
        en: ['Fast brawlers', 'Long-range brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Diğer thrower karakterler'],
        en: ['Tank brawlers', 'Other thrower brawlers']
      }
    },
    { 
      id: 'bonnie', 
      name: 'Bonnie', 
      rarity: 'Epic', 
      type: 'Marksman', 
      health: 2800, 
      damage: 560, 
      description: {
        tr: 'İki forma sahip karakter, top ve robot formu',
        en: 'Dual-form character with cannon and robot forms'
      },
      tips: {
        tr: ['Formu duruma göre değiştir', 'Mesafeyi ayarla', 'Her formun avantajını kullan'],
        en: ['Switch form based on situation', 'Adjust distance', 'Use each form\'s advantage']
      },
      counters: {
        tr: ['Çok yönlü karakterler', 'Adaptasyon gerektiren durumlar'],
        en: ['Versatile brawlers', 'Situations requiring adaptation']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'gale', 
      name: 'Gale', 
      rarity: 'Epic', 
      type: 'Support', 
      health: 3920, 
      damage: 448, 
      description: {
        tr: 'Rüzgar esen temizlikçi, düşmanları iter',
        en: 'Wind-blowing janitor who pushes enemies'
      },
      tips: {
        tr: ['Süper ile it', 'Takımını destekle', 'Pozisyon kontrolü yap'],
        en: ['Push with super', 'Support team', 'Control positioning']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Hasar karakterleri'],
        en: ['Tank brawlers', 'Damage dealers']
      }
    },
    { 
      id: 'colette', 
      name: 'Colette', 
      rarity: 'Epic', 
      type: 'Damage Dealer', 
      health: 3360, 
      damage: 504, 
      description: {
        tr: 'Yüzde hasar veren karakter, yüksek canlı hedeflere etkili',
        en: 'Percentage damage dealer, effective against high-health targets'
      },
      tips: {
        tr: ['Yüksek canlı hedeflere odaklan', 'Süper ile bitir', 'Tank karakterlere karşı etkili'],
        en: ['Focus on high-health targets', 'Finish with super', 'Effective against tanks']
      },
      counters: {
        tr: ['Düşük canlı karakterler', 'Hızlı karakterler'],
        en: ['Low-health brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Destek karakterler'],
        en: ['Tank brawlers', 'Support brawlers']
      }
    },
    { 
      id: 'belle', 
      name: 'Belle', 
      rarity: 'Epic', 
      type: 'Marksman', 
      health: 3360, 
      damage: 1176, 
      description: {
        tr: 'İşaretleyen kovboy, hedefleri takım için işaretler',
        en: 'Marking cowgirl who marks targets for team'
      },
      tips: {
        tr: ['Hedefi işaretle', 'Takım ile koordine ol', 'Uzun menzilli saldırılar'],
        en: ['Mark targets', 'Coordinate with team', 'Long-range attacks']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Yakın mesafe savaşçıları'],
        en: ['Fast brawlers', 'Close-range fighters']
      },
      synergies: {
        tr: ['Hasar karakterleri', 'Tüm takım'],
        en: ['Damage dealers', 'Entire team']
      }
    },
    { 
      id: 'ash', 
      name: 'Ash', 
      rarity: 'Epic', 
      type: 'Tank', 
      health: 7000, 
      damage: 1120, 
      description: {
        tr: 'Öfkelenen temizlikçi, hasar aldıkça güçlenir',
        en: 'Angry janitor who gets stronger as he takes damage'
      },
      tips: {
        tr: ['Hasar aldıkça güçlen', 'Yakın mesafede savaş', 'Öfke seviyesini yönet'],
        en: ['Get stronger with damage', 'Fight at close range', 'Manage rage level']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Kite eden karakterler'],
        en: ['Long-range brawlers', 'Kiting brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'İyileştiren karakterler'],
        en: ['Support brawlers', 'Healing brawlers']
      }
    },
    { 
      id: 'lola', 
      name: 'Lola', 
      rarity: 'Epic', 
      type: 'Damage Dealer', 
      health: 3360, 
      damage: 1568, 
      description: {
        tr: 'Ego yaratıcısı aktris, ikiz saldırılar yapar',
        en: 'Ego-creating actress who makes twin attacks'
      },
      tips: {
        tr: ['Ego ile çifte saldır', 'Pozisyonu iyi ayarla', 'Ego yerleştirmesini optimize et'],
        en: ['Double attack with ego', 'Position well', 'Optimize ego placement']
      },
      counters: {
        tr: ['Alan hasarı karakterler', 'Hızlı karakterler'],
        en: ['Area damage brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'sam', 
      name: 'Sam', 
      rarity: 'Epic', 
      type: 'Assassin', 
      health: 4480, 
      damage: 840, 
      description: {
        tr: 'Robotic kol kullanan karakter, yakın mesafe savaşçısı',
        en: 'Character with robotic arm, close-range fighter'
      },
      tips: {
        tr: ['Yakın mesafede savaş', 'Süper ile yaklaş', 'Robotic kolu etkili kullan'],
        en: ['Fight at close range', 'Approach with super', 'Use robotic arm effectively']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Destek karakterler'],
        en: ['Tank brawlers', 'Support brawlers']
      }
    },
    { 
      id: 'mandy', 
      name: 'Mandy', 
      rarity: 'Epic', 
      type: 'Marksman', 
      health: 2800, 
      damage: 1400, 
      description: {
        tr: 'Şeker temalı nişancı, penetrasyon saldırıları yapar',
        en: 'Candy-themed marksman who makes penetrating attacks'
      },
      tips: {
        tr: ['Mesafeyi koru', 'Süper ile penetrasyon', 'Sıralı hedeflere odaklan'],
        en: ['Keep distance', 'Penetrate with super', 'Focus on lined targets']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'maisie', 
      name: 'Maisie', 
      rarity: 'Epic', 
      type: 'Artillery', 
      health: 3360, 
      damage: 1176, 
      description: {
        tr: 'Zıplayan bomba atan karakter, duvarlardan sekdirir',
        en: 'Character who throws bouncing bombs that ricochet off walls'
      },
      tips: {
        tr: ['Bombayı sekdir', 'Duvarların arkasından vur', 'Açıları hesapla'],
        en: ['Bounce bombs', 'Attack from behind walls', 'Calculate angles']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Açık alan savaşları'],
        en: ['Fast brawlers', 'Open area fights']
      },
      synergies: {
        tr: ['Kontrol karakterleri', 'Tank karakterler'],
        en: ['Control brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'hank', 
      name: 'Hank', 
      rarity: 'Epic', 
      type: 'Tank', 
      health: 7000, 
      damage: 1008, 
      description: {
        tr: 'Balık temalı tank, suda güçlenir',
        en: 'Fish-themed tank who gets stronger in water'
      },
      tips: {
        tr: ['Suda güçlen', 'Yakın mesafede savaş', 'Su alanlarını kullan'],
        en: ['Get stronger in water', 'Fight at close range', 'Use water areas']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Kuru alan savaşları'],
        en: ['Long-range brawlers', 'Dry area fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Su haritalarında tüm takım'],
        en: ['Support brawlers', 'Entire team on water maps']
      }
    },
    { 
      id: 'pearl', 
      name: 'Pearl', 
      rarity: 'Epic', 
      type: 'Damage Dealer', 
      health: 3920, 
      damage: 1176, 
      description: {
        tr: 'Isı sistemi olan karakter, sürekli ateş eder',
        en: 'Character with heat system who fires continuously'
      },
      tips: {
        tr: ['Isıyı yönet', 'Sürekli ateş et', 'Soğuma sürelerini hesapla'],
        en: ['Manage heat', 'Fire continuously', 'Calculate cooldown times']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Destek karakterler'],
        en: ['Tank brawlers', 'Support brawlers']
      }
    },
    { 
      id: 'larry-lawrie', 
      name: 'Larry & Lawrie', 
      rarity: 'Epic', 
      type: 'Controller', 
      health: 3360, 
      damage: 896, 
      description: {
        tr: 'İkiz robot güvenlik, birlikte çalışırlar',
        en: 'Twin robot security who work together'
      },
      tips: {
        tr: ['İkisini koordine et', 'Alanı kontrol et', 'Takım halinde hareket et'],
        en: ['Coordinate both', 'Control area', 'Move as team']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Alan hasarı karakterler'],
        en: ['High damage brawlers', 'Area damage brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer kontrol karakterleri'],
        en: ['Support brawlers', 'Other control brawlers']
      }
    },
    { 
      id: 'angelo', 
      name: 'Angelo', 
      rarity: 'Epic', 
      type: 'Marksman', 
      health: 2800, 
      damage: 1120, 
      description: {
        tr: 'Melek temalı nişancı, uçarak kaçabilir',
        en: 'Angel-themed marksman who can fly to escape'
      },
      tips: {
        tr: ['Uçarak kaç', 'Yüksekten ateş et', 'Pozisyon avantajı kullan'],
        en: ['Fly to escape', 'Shoot from above', 'Use positional advantage']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Uzun menzilli karakterler'],
        en: ['Fast brawlers', 'Long-range brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'berry', 
      name: 'Berry', 
      rarity: 'Epic', 
      type: 'Support', 
      health: 4200, 
      damage: 896, 
      description: {
        tr: 'Meyve temalı destek, takımını iyileştirir',
        en: 'Fruit-themed support who heals team'
      },
      tips: {
        tr: ['Takımını iyileştir', 'Güvenli mesafede kal', 'Grup savaşlarında etkili'],
        en: ['Heal team', 'Stay at safe distance', 'Effective in team fights']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Assassin karakterler'],
        en: ['High damage brawlers', 'Assassin brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Tüm takım'],
        en: ['Tank brawlers', 'Entire team']
      }
    },

    // Mythic
    { 
      id: 'mortis', 
      name: 'Mortis', 
      rarity: 'Mythic', 
      type: 'Assassin', 
      health: 4480, 
      damage: 1260, 
      description: {
        tr: 'Vampir suikastçı, hızlı hareket eder ve can çalar',
        en: 'Vampire assassin who moves fast and steals health'
      },
      tips: {
        tr: ['Hızlı hareket et', 'Zayıf hedefleri avla', 'Süper ile can çal'],
        en: ['Move fast', 'Hunt weak targets', 'Steal health with super']
      },
      counters: {
        tr: ['Tank karakterler', 'Grup savaşları'],
        en: ['Tank brawlers', 'Team fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'tara', 
      name: 'Tara', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3920, 
      damage: 840, 
      description: {
        tr: 'Gölge çağıran mistik, düşmanları toplar',
        en: 'Shadow-summoning mystic who groups enemies'
      },
      tips: {
        tr: ['Süper ile topla', 'Gölgeleri kullan', 'Grup savaşlarında etkili'],
        en: ['Group with super', 'Use shadows', 'Effective in team fights']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Hasar karakterleri', 'Alan hasarı karakterler'],
        en: ['Damage dealers', 'Area damage brawlers']
      }
    },
    { 
      id: 'gene', 
      name: 'Gene', 
      rarity: 'Mythic', 
      type: 'Support', 
      health: 4200, 
      damage: 1008, 
      description: {
        tr: 'Lamba cini, düşmanları çeker ve takımını destekler',
        en: 'Lamp genie who pulls enemies and supports team'
      },
      tips: {
        tr: ['Süper ile çek', 'Takımını destekle', 'İzole hedefleri yakala'],
        en: ['Pull with super', 'Support team', 'Catch isolated targets']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Hasar karakterleri', 'Tank karakterler'],
        en: ['Damage dealers', 'Tank brawlers']
      }
    },
    { 
      id: 'max', 
      name: 'Max', 
      rarity: 'Mythic', 
      type: 'Support', 
      health: 3360, 
      damage: 448, 
      description: {
        tr: 'Süper hızlı destek, takıma hız verir',
        en: 'Super fast support who gives speed to team'
      },
      tips: {
        tr: ['Takıma hız ver', 'Hareket halinde kal', 'Pozisyon avantajı kullan'],
        en: ['Give speed to team', 'Stay mobile', 'Use positional advantage']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Kontrol karakterleri'],
        en: ['High damage brawlers', 'Control brawlers']
      },
      synergies: {
        tr: ['Tüm karakterler', 'Özellikle yakın mesafe savaşçıları'],
        en: ['All brawlers', 'Especially close-range fighters']
      }
    },
    { 
      id: 'mr-p', 
      name: 'Mr. P', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3360, 
      damage: 1008, 
      description: {
        tr: 'Penguen porter çağıran, sürekli baskı yapar',
        en: 'Penguin porter summoner who applies constant pressure'
      },
      tips: {
        tr: ['Porter istasyonu kur', 'Mesafeyi koru', 'Sürekli baskı yap'],
        en: ['Build porter station', 'Keep distance', 'Apply constant pressure']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer kontrol karakterleri'],
        en: ['Support brawlers', 'Other control brawlers']
      }
    },
    { 
      id: 'sprout', 
      name: 'Sprout', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3360, 
      damage: 1120, 
      description: {
        tr: 'Duvar oluşturan bitki, alanı kontrol eder',
        en: 'Wall-creating plant who controls area'
      },
      tips: {
        tr: ['Duvar ile kontrol et', 'Takımını destekle', 'Stratejik duvar yerleştir'],
        en: ['Control with walls', 'Support team', 'Place walls strategically']
      },
      counters: {
        tr: ['Duvar kıran karakterler', 'Thrower karakterler'],
        en: ['Wall-breaking brawlers', 'Thrower brawlers']
      },
      synergies: {
        tr: ['Kontrol karakterleri', 'Uzun menzilli karakterler'],
        en: ['Control brawlers', 'Long-range brawlers']
      }
    },
    { 
      id: 'byron', 
      name: 'Byron', 
      rarity: 'Mythic', 
      type: 'Support', 
      health: 2800, 
      damage: 1120, 
      description: {
        tr: 'İksir atan doktor, dostları iyileştirir düşmanları zehirler',
        en: 'Potion-throwing doctor who heals allies and poisons enemies'
      },
      tips: {
        tr: ['Dostları iyileştir', 'Düşmanları zehirle', 'Mesafeyi koru'],
        en: ['Heal allies', 'Poison enemies', 'Keep distance']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Tüm takım'],
        en: ['Tank brawlers', 'Entire team']
      }
    },
    { 
      id: 'squeak', 
      name: 'Squeak', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3360, 
      damage: 1120, 
      description: {
        tr: 'Yapışkan bomba atan köpek, alan kontrolü yapar',
        en: 'Sticky bomb-throwing dog who controls area'
      },
      tips: {
        tr: ['Bombayı yapıştır', 'Alanı kontrol et', 'Grup düşmanlarına odaklan'],
        en: ['Stick bombs', 'Control area', 'Focus on grouped enemies']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Diğer kontrol karakterleri'],
        en: ['Tank brawlers', 'Other control brawlers']
      }
    },
    { 
      id: 'buzz', 
      name: 'Buzz', 
      rarity: 'Mythic', 
      type: 'Assassin', 
      health: 4480, 
      damage: 1176, 
      description: {
        tr: 'Kanca atan cankurtaran, süper şarj ederek yaklaşır',
        en: 'Hook-throwing lifeguard who charges super to approach'
      },
      tips: {
        tr: ['Kanca ile yaklaş', 'Süper şarj et', 'Su alanlarında güçlü'],
        en: ['Approach with hook', 'Charge super', 'Strong in water areas']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Grup savaşları'],
        en: ['Long-range brawlers', 'Team fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'eve', 
      name: 'Eve', 
      rarity: 'Mythic', 
      type: 'Damage Dealer', 
      health: 3360, 
      damage: 896, 
      description: {
        tr: 'Yumurta bırakan kraliçe, suda güçlenir',
        en: 'Egg-laying queen who gets stronger in water'
      },
      tips: {
        tr: ['Yumurtaları stratejik yerleştir', 'Suda güçlen', 'Bölgeyi kontrol et'],
        en: ['Place eggs strategically', 'Get stronger in water', 'Control territory']
      },
      counters: {
        tr: ['Alan hasarı karakterler', 'Hızlı karakterler'],
        en: ['Area damage brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Kontrol karakterleri', 'Su haritalarında tüm takım'],
        en: ['Control brawlers', 'Entire team on water maps']
      }
    },
    { 
      id: 'janet', 
      name: 'Janet', 
      rarity: 'Mythic', 
      type: 'Marksman', 
      health: 3360, 
      damage: 1120, 
      description: {
        tr: 'Uçabilen pilot, havadan saldırır',
        en: 'Flying pilot who attacks from air'
      },
      tips: {
        tr: ['Uçarak kaç', 'Yüksekten ateş et', 'Pozisyon avantajı kullan'],
        en: ['Fly to escape', 'Shoot from above', 'Use positional advantage']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Uzun menzilli karakterler'],
        en: ['Fast brawlers', 'Long-range brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'otis', 
      name: 'Otis', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3360, 
      damage: 896, 
      description: {
        tr: 'Sessizlik veren sanatçı, süper kullanımını engeller',
        en: 'Silencing artist who prevents super usage'
      },
      tips: {
        tr: ['Süper ile sustur', 'Mesafeyi koru', 'Önemli hedefleri sustur'],
        en: ['Silence with super', 'Keep distance', 'Silence important targets']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Hasar karakterleri', 'Tank karakterler'],
        en: ['Damage dealers', 'Tank brawlers']
      }
    },
    { 
      id: 'buster', 
      name: 'Buster', 
      rarity: 'Mythic', 
      type: 'Tank', 
      health: 7000, 
      damage: 1120, 
      description: {
        tr: 'Kalkan kullanan tank, süper saldırıları bloklar',
        en: 'Shield-using tank who blocks super attacks'
      },
      tips: {
        tr: ['Kalkanı akıllıca kullan', 'Yakın mesafede savaş', 'Süperleri blokla'],
        en: ['Use shield wisely', 'Fight at close range', 'Block supers']
      },
      counters: {
        tr: ['Penetrasyon karakterler', 'Normal saldırı odaklı karakterler'],
        en: ['Penetration brawlers', 'Normal attack focused brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Hasar karakterleri'],
        en: ['Support brawlers', 'Damage dealers']
      }
    },
    { 
      id: 'gray', 
      name: 'Gray', 
      rarity: 'Mythic', 
      type: 'Support', 
      health: 3360, 
      damage: 1008, 
      description: {
        tr: 'Portal açan büyücü, takımını teleport eder',
        en: 'Portal-opening wizard who teleports team'
      },
      tips: {
        tr: ['Portal ile takımını taşı', 'Stratejik pozisyonla', 'Kaçış yolları oluştur'],
        en: ['Transport team with portal', 'Position strategically', 'Create escape routes']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Sürekli baskı yapan karakterler'],
        en: ['Fast brawlers', 'Constant pressure brawlers']
      },
      synergies: {
        tr: ['Tüm karakterler', 'Özellikle yavaş karakterler'],
        en: ['All brawlers', 'Especially slow brawlers']
      }
    },
    { 
      id: 'willow', 
      name: 'Willow', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3360, 
      damage: 1120, 
      description: {
        tr: 'Zihin kontrolü yapan cadı, düşmanları kontrol eder',
        en: 'Mind-controlling witch who controls enemies'
      },
      tips: {
        tr: ['Düşmanı kontrol et', 'Güvenli mesafede kal', 'Önemli hedefleri kontrol et'],
        en: ['Control enemies', 'Stay at safe distance', 'Control important targets']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Hasar karakterleri', 'Tank karakterler'],
        en: ['Damage dealers', 'Tank brawlers']
      }
    },
    { 
      id: 'doug', 
      name: 'Doug', 
      rarity: 'Mythic', 
      type: 'Support', 
      health: 4200, 
      damage: 896, 
      description: {
        tr: 'Sosisli satan destek, takımını besler ve güçlendirir',
        en: 'Hot dog selling support who feeds and strengthens team'
      },
      tips: {
        tr: ['Takımını besle', 'Güvenli alanda kal', 'Sosisleri stratejik dağıt'],
        en: ['Feed team', 'Stay in safe area', 'Distribute hot dogs strategically']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Assassin karakterler'],
        en: ['High damage brawlers', 'Assassin brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Tüm takım'],
        en: ['Tank brawlers', 'Entire team']
      }
    },
    { 
      id: 'chuck', 
      name: 'Chuck', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3920, 
      damage: 1008, 
      description: {
        tr: 'Tren kullanan karakter, ray döşeyerek hareket eder',
        en: 'Train-using character who moves by laying tracks'
      },
      tips: {
        tr: ['Ray döşe', 'Hızla hareket et', 'Stratejik rotalar oluştur'],
        en: ['Lay tracks', 'Move fast', 'Create strategic routes']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Açık alan savaşları'],
        en: ['Fast brawlers', 'Open area fights']
      },
      synergies: {
        tr: ['Kontrol karakterleri', 'Uzun menzilli karakterler'],
        en: ['Control brawlers', 'Long-range brawlers']
      }
    },
    { 
      id: 'charlie', 
      name: 'Charlie', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3360, 
      damage: 1120, 
      description: {
        tr: 'Örümcek kontrol eden karakter, ağ kurar',
        en: 'Spider-controlling character who builds webs'
      },
      tips: {
        tr: ['Örümcekleri kullan', 'Alanı kontrol et', 'Ağ stratejileri geliştir'],
        en: ['Use spiders', 'Control area', 'Develop web strategies']
      },
      counters: {
        tr: ['Alan hasarı karakterler', 'Hızlı karakterler'],
        en: ['Area damage brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer kontrol karakterleri'],
        en: ['Support brawlers', 'Other control brawlers']
      }
    },
    { 
      id: 'mico', 
      name: 'Mico', 
      rarity: 'Mythic', 
      type: 'Assassin', 
      health: 4200, 
      damage: 1176, 
      description: {
        tr: 'Maymun suikastçı, çevik hareket eder',
        en: 'Monkey assassin who moves agilely'
      },
      tips: {
        tr: ['Hızlı hareket et', 'Sürpriz saldırılar', 'Çeviklik avantajı kullan'],
        en: ['Move fast', 'Surprise attacks', 'Use agility advantage']
      },
      counters: {
        tr: ['Tank karakterler', 'Grup savaşları'],
        en: ['Tank brawlers', 'Team fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'melodie', 
      name: 'Melodie', 
      rarity: 'Mythic', 
      type: 'Assassin', 
      health: 3920, 
      damage: 1008, 
      description: {
        tr: 'Müzik temalı suikastçı, ritim tutar',
        en: 'Music-themed assassin who keeps rhythm'
      },
      tips: {
        tr: ['Ritim tut', 'Hızlı saldırılar', 'Müzik avantajı kullan'],
        en: ['Keep rhythm', 'Fast attacks', 'Use music advantage']
      },
      counters: {
        tr: ['Tank karakterler', 'Grup savaşları'],
        en: ['Tank brawlers', 'Team fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'lily', 
      name: 'Lily', 
      rarity: 'Mythic', 
      type: 'Assassin', 
      health: 3360, 
      damage: 1260, 
      description: {
        tr: 'Ninja suikastçı, görünmezlik kullanır',
        en: 'Ninja assassin who uses invisibility'
      },
      tips: {
        tr: ['Görünmezlik kullan', 'Sürpriz saldırılar', 'Ninja teknikleri'],
        en: ['Use invisibility', 'Surprise attacks', 'Ninja techniques']
      },
      counters: {
        tr: ['Alan hasarı karakterler', 'Grup savaşları'],
        en: ['Area damage brawlers', 'Team fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'clancy', 
      name: 'Clancy', 
      rarity: 'Mythic', 
      type: 'Controller', 
      health: 3920, 
      damage: 1120, 
      description: {
        tr: 'Denizci kontrol karakteri, alan hakimiyeti kurar',
        en: 'Naval control character who establishes area dominance'
      },
      tips: {
        tr: ['Alanı kontrol et', 'Takımını destekle', 'Denizcilik avantajı kullan'],
        en: ['Control area', 'Support team', 'Use naval advantage']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Uzun menzilli karakterler'],
        en: ['Fast brawlers', 'Long-range brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Diğer kontrol karakterleri'],
        en: ['Tank brawlers', 'Other control brawlers']
      }
    },

    // Legendary
    { 
      id: 'spike', 
      name: 'Spike', 
      rarity: 'Legendary', 
      type: 'Controller', 
      health: 3360, 
      damage: 896, 
      description: {
        tr: 'Kaktüs kontrol karakteri, alan hasarı ve yavaşlatma',
        en: 'Cactus control character with area damage and slowing'
      },
      tips: {
        tr: ['Süper ile yavaşlat', 'Mesafeyi koru', 'Alan kontrolü yap'],
        en: ['Slow with super', 'Keep distance', 'Control area']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Hasar karakterleri', 'Tank karakterler'],
        en: ['Damage dealers', 'Tank brawlers']
      }
    },
    { 
      id: 'crow', 
      name: 'Crow', 
      rarity: 'Legendary', 
      type: 'Assassin', 
      health: 2800, 
      damage: 448, 
      description: {
        tr: 'Zehirli karga, düşmanları zehirler ve takip eder',
        en: 'Poisonous crow who poisons and tracks enemies'
      },
      tips: {
        tr: ['Zehirle ve kaç', 'Zayıf hedefleri bitir', 'Hareket halinde kal'],
        en: ['Poison and escape', 'Finish weak targets', 'Stay mobile']
      },
      counters: {
        tr: ['Tank karakterler', 'İyileştiren karakterler'],
        en: ['Tank brawlers', 'Healing brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'leon', 
      name: 'Leon', 
      rarity: 'Legendary', 
      type: 'Assassin', 
      health: 3920, 
      damage: 504, 
      description: {
        tr: 'Görünmez suikastçı, yakın mesafede yüksek hasar',
        en: 'Invisible assassin with high close-range damage'
      },
      tips: {
        tr: ['Görünmezlik ile yaklaş', 'Sürpriz saldırılar', 'Yakın mesafede etkili'],
        en: ['Approach with invisibility', 'Surprise attacks', 'Effective at close range']
      },
      counters: {
        tr: ['Tank karakterler', 'Grup savaşları'],
        en: ['Tank brawlers', 'Team fights']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'sandy', 
      name: 'Sandy', 
      rarity: 'Legendary', 
      type: 'Support', 
      health: 4200, 
      damage: 896, 
      description: {
        tr: 'Kum fırtınası yaratan, takımını gizler',
        en: 'Sandstorm creator who hides team'
      },
      tips: {
        tr: ['Takımını gizle', 'Alan kontrolü', 'Grup savaşlarında etkili'],
        en: ['Hide team', 'Area control', 'Effective in team fights']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Alan hasarı karakterler'],
        en: ['Long-range brawlers', 'Area damage brawlers']
      },
      synergies: {
        tr: ['Yakın mesafe karakterler', 'Tüm takım'],
        en: ['Close-range brawlers', 'Entire team']
      }
    },
    { 
      id: 'amber', 
      name: 'Amber', 
      rarity: 'Legendary', 
      type: 'Controller', 
      health: 3360, 
      damage: 420, 
      description: {
        tr: 'Ateş kontrolcüsü, sürekli ateş eder',
        en: 'Fire controller who shoots continuously'
      },
      tips: {
        tr: ['Yakıtı yönet', 'Sürekli ateş et', 'Alan kontrolü yap'],
        en: ['Manage fuel', 'Fire continuously', 'Control area']
      },
      counters: {
        tr: ['Uzun menzilli karakterler', 'Hızlı karakterler'],
        en: ['Long-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Destek karakterler'],
        en: ['Tank brawlers', 'Support brawlers']
      }
    },
    { 
      id: 'meg', 
      name: 'Meg', 
      rarity: 'Legendary', 
      type: 'Damage Dealer', 
      health: 3360, 
      damage: 448, 
      description: {
        tr: 'Mech pilotu, robot forma dönüşebilir',
        en: 'Mech pilot who can transform into robot form'
      },
      tips: {
        tr: ['Mech formunu stratejik kullan', 'Süper şarj et', 'Forma göre taktik değiştir'],
        en: ['Use mech form strategically', 'Charge super', 'Change tactics based on form']
      },
      counters: {
        tr: ['Yüksek hasarlı karakterler', 'Kontrol karakterleri'],
        en: ['High damage brawlers', 'Control brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Tank karakterler'],
        en: ['Support brawlers', 'Tank brawlers']
      }
    },
    { 
      id: 'chester', 
      name: 'Chester', 
      rarity: 'Legendary', 
      type: 'Damage Dealer', 
      health: 3360, 
      damage: 1008, 
      description: {
        tr: 'Rastgele süperler kullanan joker, öngörülemez',
        en: 'Joker with random supers, unpredictable'
      },
      tips: {
        tr: ['Süperleri akıllıca kullan', 'Adaptasyon yeteneği geliştir', 'Sürpriz avantajı kullan'],
        en: ['Use supers wisely', 'Develop adaptation skills', 'Use surprise advantage']
      },
      counters: {
        tr: ['Tutarlı karakterler', 'Öngörülebilir durumlar'],
        en: ['Consistent brawlers', 'Predictable situations']
      },
      synergies: {
        tr: ['Esnek takım kompozisyonları', 'Adaptif oyuncular'],
        en: ['Flexible team compositions', 'Adaptive players']
      }
    },
    { 
      id: 'cordelius', 
      name: 'Cordelius', 
      rarity: 'Legendary', 
      type: 'Assassin', 
      health: 4200, 
      damage: 1120, 
      description: {
        tr: 'Gölge dünyasına çeken mantar, izole savaşlar yapar',
        en: 'Mushroom who pulls into shadow realm, creates isolated fights'
      },
      tips: {
        tr: ['Gölge dünyasını kullan', '1v1 savaşları tercih et', 'İzole hedefleri yakala'],
        en: ['Use shadow realm', 'Prefer 1v1 fights', 'Catch isolated targets']
      },
      counters: {
        tr: ['Grup savaşları', 'Tank karakterler'],
        en: ['Team fights', 'Tank brawlers']
      },
      synergies: {
        tr: ['Destek karakterler', 'Diğer assassin karakterler'],
        en: ['Support brawlers', 'Other assassin brawlers']
      }
    },
    { 
      id: 'kit', 
      name: 'Kit', 
      rarity: 'Legendary', 
      type: 'Support', 
      health: 3920, 
      damage: 896, 
      description: {
        tr: 'Teleport eden kedi, takımını taşır ve destekler',
        en: 'Teleporting cat who transports and supports team'
      },
      tips: {
        tr: ['Teleport ile takımını taşı', 'Stratejik pozisyonla', 'Kaçış yolları oluştur'],
        en: ['Transport team with teleport', 'Position strategically', 'Create escape routes']
      },
      counters: {
        tr: ['Hızlı karakterler', 'Sürekli baskı yapan karakterler'],
        en: ['Fast brawlers', 'Constant pressure brawlers']
      },
      synergies: {
        tr: ['Tüm karakterler', 'Özellikle yavaş karakterler'],
        en: ['All brawlers', 'Especially slow brawlers']
      }
    },
    { 
      id: 'draco', 
      name: 'Draco', 
      rarity: 'Legendary', 
      type: 'Marksman', 
      health: 3360, 
      damage: 1400, 
      description: {
        tr: 'Ejder temalı nişancı, güçlü uzun menzilli saldırılar',
        en: 'Dragon-themed marksman with powerful long-range attacks'
      },
      tips: {
        tr: ['Mesafeyi koru', 'Yüksek hasarı kullan', 'Pozisyon avantajı kullan'],
        en: ['Keep distance', 'Use high damage', 'Use positional advantage']
      },
      counters: {
        tr: ['Yakın mesafe karakterler', 'Hızlı karakterler'],
        en: ['Close-range brawlers', 'Fast brawlers']
      },
      synergies: {
        tr: ['Tank karakterler', 'Destek karakterler'],
        en: ['Tank brawlers', 'Support brawlers']
      }
    }
  ];

  const rarityColors = {
    'Starting': 'from-gray-500 to-gray-600',
    'Rare': 'from-green-500 to-green-600',
    'Super Rare': 'from-blue-500 to-blue-600',
    'Epic': 'from-purple-500 to-purple-600',
    'Mythic': 'from-red-500 to-red-600',
    'Legendary': 'from-yellow-500 to-yellow-600'
  };

  const typeIcons = {
    'Damage Dealer': Target,
    'Tank': Shield,
    'Support': Star,
    'Assassin': Zap,
    'Marksman': Target,
    'Controller': Shield,
    'Artillery': Target
  };

  const filteredBrawlers = brawlers.filter(brawler => {
    const matchesSearch = brawler.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === 'All' || brawler.rarity === selectedRarity;
    const matchesType = selectedType === 'All' || brawler.type === selectedType;
    return matchesSearch && matchesRarity && matchesType;
  });

  const rarities = ['All', 'Starting', 'Rare', 'Super Rare', 'Epic', 'Mythic', 'Legendary'];
  const types = ['All', 'Damage Dealer', 'Tank', 'Support', 'Assassin', 'Marksman', 'Controller', 'Artillery'];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            {t('characterGuide')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('characterDesc')}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Karakter ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-brawl-dark/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-brawl-blue focus:border-transparent text-white placeholder-gray-400"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap gap-2">
              {rarities.map(rarity => (
                <button
                  key={rarity}
                  onClick={() => setSelectedRarity(rarity)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedRarity === rarity
                      ? 'bg-brawl-blue text-white'
                      : 'bg-brawl-gray/50 text-gray-400 hover:text-white'
                  }`}
                >
                  {rarity}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-brawl-purple text-white'
                      : 'bg-brawl-gray/50 text-gray-400 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Brawlers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBrawlers.map((brawler) => {
            const IconComponent = typeIcons[brawler.type];
            return (
              <div key={brawler.id} className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border card-hover">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{brawler.name}</h3>
                  <div className={`w-8 h-8 bg-gradient-to-br ${rarityColors[brawler.rarity]} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${rarityColors[brawler.rarity]} text-white`}>
                    {brawler.rarity}
                  </div>
                  <div className="text-sm text-gray-400">
                    {brawler.type} • {brawler.health} HP • {brawler.damage} DMG
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  {brawler.description[language]}
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-brawl-blue mb-1">
                      {language === 'tr' ? 'İpuçları:' : 'Tips:'}
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {brawler.tips[language].map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-1">
                      {language === 'tr' ? 'Zayıflıkları:' : 'Counters:'}
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {brawler.counters[language].map((counter, index) => (
                        <li key={index}>• {counter}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-1">
                      {language === 'tr' ? 'Sinerjiler:' : 'Synergies:'}
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {brawler.synergies[language].map((synergy, index) => (
                        <li key={index}>• {synergy}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBrawlers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              {language === 'tr' ? 'Aradığınız kriterlere uygun karakter bulunamadı.' : 'No brawlers found matching your criteria.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrawlersSection;