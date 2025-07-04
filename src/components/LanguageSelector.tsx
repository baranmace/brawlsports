import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('tr')}
        className={`w-8 h-6 rounded-sm overflow-hidden transition-all duration-300 ${
          language === 'tr' ? 'ring-2 ring-brawl-blue' : 'opacity-70 hover:opacity-100'
        }`}
        title="Türkçe"
      >
        <div className="w-full h-full bg-red-600 relative">
          <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded-sm overflow-hidden transition-all duration-300 ${
          language === 'en' ? 'ring-2 ring-brawl-blue' : 'opacity-70 hover:opacity-100'
        }`}
        title="English"
      >
        <div className="w-full h-full bg-blue-800 relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-red-600"></div>
          </div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-800"></div>
        </div>
      </button>
    </div>
  );
};

export default LanguageSelector;