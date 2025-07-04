import React from 'react';
import { User, LogOut, Shield } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  user: any;
  onLogout: () => void;
  onAdminToggle: () => void;
  showAdmin: boolean;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, onAdminToggle, showAdmin }) => {
  const { t } = useLanguage();

  return (
    <header className="bg-brawl-gray/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-brawl-blue to-brawl-purple rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold gradient-text">
              {t('welcome')}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            <div className="flex items-center space-x-2 text-gray-300">
              <User className="w-5 h-5" />
              <span className="font-medium">{user.username}</span>
            </div>

            {user.isAdmin && (
              <button
                onClick={onAdminToggle}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  showAdmin
                    ? 'bg-brawl-purple text-white'
                    : 'bg-brawl-purple/20 text-brawl-purple hover:bg-brawl-purple/30'
                }`}
              >
                {t('adminPanel')}
              </button>
            )}

            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span>{t('logout')}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;