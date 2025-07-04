export const translations = {
  tr: {
    // Auth
    login: 'Giriş Yap',
    register: 'Kayıt Ol',
    username: 'Kullanıcı Adı',
    password: 'Şifre',
    loginButton: 'Giriş Yap',
    registerButton: 'Kayıt Ol',
    logout: 'Çıkış Yap',
    adminPanel: 'Admin Panel',
    
    // Validation
    usernameRequired: 'Kullanıcı adı gerekli',
    passwordMinLength: 'Şifre en az 4 karakter olmalı',
    loginFailed: 'Giriş başarısız',
    userExists: 'Bu kullanıcı adı zaten kullanılıyor',
    
    // Main Content
    welcome: 'Brawl Stars Akademisi',
    welcomeDesc: 'Profesyonel eğitim platformuna hoş geldiniz',
    heroTitle: 'Brawl Stars Esports Akademisi',
    heroSubtitle: 'Profesyonel oyuncu olmak için gereken tüm bilgileri burada öğrenin',
    
    // Sections
    metaAnalysis: 'Meta Analizi',
    metaDesc: 'Güncel meta değişikliklerini takip edin',
    tacticsStrategy: 'Taktik & Strateji',
    tacticsDesc: 'Profesyonel taktikleri öğrenin',
    characterGuide: 'Karakter Rehberi',
    characterDesc: 'Tüm karakterlerin detaylı analizleri',
    community: 'Topluluk',
    communityDesc: 'Diğer oyuncularla etkileşime geçin',
    
    // Admin
    adminPanelTitle: 'Admin Panel',
    addUpdate: 'Yeni Güncelleme Ekle',
    editUpdate: 'Güncelleme Düzenle',
    title: 'Başlık',
    category: 'Kategori',
    priority: 'Öncelik',
    content: 'İçerik',
    save: 'Kaydet',
    update: 'Güncelle',
    cancel: 'İptal',
    delete: 'Sil',
    edit: 'Düzenle',
    
    // Priority
    low: 'Düşük',
    medium: 'Orta',
    high: 'Yüksek',
    
    // Categories
    meta: 'Meta Analizi',
    tactics: 'Taktik & Strateji',
    brawlers: 'Karakter Rehberi',
    communityCategory: 'Topluluk'
  },
  en: {
    // Auth
    login: 'Login',
    register: 'Register',
    username: 'Username',
    password: 'Password',
    loginButton: 'Login',
    registerButton: 'Register',
    logout: 'Logout',
    adminPanel: 'Admin Panel',
    
    // Validation
    usernameRequired: 'Username is required',
    passwordMinLength: 'Password must be at least 4 characters',
    loginFailed: 'Login failed',
    userExists: 'This username is already taken',
    
    // Main Content
    welcome: 'Brawl Stars Academy',
    welcomeDesc: 'Welcome to the professional training platform',
    heroTitle: 'Brawl Stars Esports Academy',
    heroSubtitle: 'Learn everything you need to become a professional player',
    
    // Sections
    metaAnalysis: 'Meta Analysis',
    metaDesc: 'Follow current meta changes',
    tacticsStrategy: 'Tactics & Strategy',
    tacticsDesc: 'Learn professional tactics',
    characterGuide: 'Character Guide',
    characterDesc: 'Detailed analysis of all characters',
    community: 'Community',
    communityDesc: 'Interact with other players',
    
    // Admin
    adminPanelTitle: 'Admin Panel',
    addUpdate: 'Add New Update',
    editUpdate: 'Edit Update',
    title: 'Title',
    category: 'Category',
    priority: 'Priority',
    content: 'Content',
    save: 'Save',
    update: 'Update',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    
    // Priority
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    
    // Categories
    meta: 'Meta Analysis',
    tactics: 'Tactics & Strategy',
    brawlers: 'Character Guide',
    communityCategory: 'Community'
  }
};

export type Language = 'tr' | 'en';
export type TranslationKey = keyof typeof translations.tr;

export const getTranslation = (lang: Language, key: TranslationKey): string => {
  return translations[lang][key] || translations.tr[key];
};