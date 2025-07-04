import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginFormProps {
  onLogin: (user: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError(t('usernameRequired'));
      return;
    }

    if (password.length < 4) {
      setError(t('passwordMinLength'));
      return;
    }

    // Admin kontrolü - yeni şifre
    if (username === 'admin' && password === 'baran25brawl') {
      onLogin({
        id: 'admin',
        username: 'admin',
        email: 'admin@brawlacademy.com',
        isAdmin: true
      });
      return;
    }

    // Normal kullanıcı girişi
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);

    if (user) {
      onLogin(user);
    } else {
      setError(t('loginFailed'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t('username')}
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-brawl-dark/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-brawl-blue focus:border-transparent text-white placeholder-gray-400"
            placeholder={t('username')}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t('password')}
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-brawl-dark/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-brawl-blue focus:border-transparent text-white placeholder-gray-400"
            placeholder={t('password')}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-800">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-brawl-blue to-brawl-purple text-white py-3 px-4 rounded-lg font-semibold hover:from-brawl-blue/80 hover:to-brawl-purple/80 transition-all duration-300 transform hover:scale-105"
      >
        {t('loginButton')}
      </button>
    </form>
  );
};

export default LoginForm;