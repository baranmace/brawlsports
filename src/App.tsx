import React, { useState, useEffect } from 'react';
import { User, Shield } from 'lucide-react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminPanel from './components/AdminPanel';
import MainContent from './components/MainContent';
import Header from './components/Header';

interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: User) => {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setShowAdmin(false);
  };

  const handleAdminAccess = () => {
    if (currentUser?.isAdmin) {
      setShowAdmin(true);
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brawl-dark via-brawl-blue/20 to-brawl-purple/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-brawl-blue to-brawl-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold gradient-text mb-2">
                Brawl Stars Akademisi
              </h1>
              <p className="text-gray-300">
                Profesyonel eğitim platformuna hoş geldiniz
              </p>
            </div>

            <div className="bg-brawl-gray/50 backdrop-blur-sm rounded-lg p-6 glow-border">
              <div className="flex mb-6">
                <button
                  onClick={() => setShowLogin(true)}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    showLogin
                      ? 'bg-gradient-to-r from-brawl-blue to-brawl-purple text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Giriş Yap
                </button>
                <button
                  onClick={() => setShowLogin(false)}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    !showLogin
                      ? 'bg-gradient-to-r from-brawl-blue to-brawl-purple text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Kayıt Ol
                </button>
              </div>

              {showLogin ? (
                <LoginForm onLogin={handleLogin} />
              ) : (
                <RegisterForm onRegister={handleLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showAdmin && currentUser.isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brawl-dark via-brawl-blue/20 to-brawl-purple/20">
        <Header 
          user={currentUser} 
          onLogout={handleLogout} 
          onAdminToggle={() => setShowAdmin(false)}
          showAdmin={showAdmin}
        />
        <AdminPanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brawl-dark via-brawl-blue/20 to-brawl-purple/20">
      <Header 
        user={currentUser} 
        onLogout={handleLogout} 
        onAdminToggle={handleAdminAccess}
        showAdmin={showAdmin}
      />
      <MainContent />
    </div>
  );
}

export default App;