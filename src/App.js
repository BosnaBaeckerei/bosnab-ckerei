import { useState, useEffect } from 'react';
import AOS from 'aos';
import '@/App.css';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/sections/HomeSection';
import MenuSection from '@/components/sections/MenuSection';
import GallerySection from '@/components/sections/GallerySection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import { translations } from '@/data/translations';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('de');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
    });

    const savedLang = localStorage.getItem('bosna-language');
    if (savedLang && ['de', 'en', 'bs'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('bosna-language', lang);
  };

  const handleSectionChange = (section) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 400);
  };

  const t = translations[language];

  return (
    <div className="App min-h-screen w-full overflow-hidden">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        language={language}
        onLanguageChange={handleLanguageChange}
        translations={t}
      />

      {/* Main Content - properly positioned for desktop sidebar */}
      <main className="min-h-screen w-full md:pl-56 relative">
        <div className={`w-full h-screen transition-all duration-500 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          {activeSection === 'home' && <HomeSection translations={t} />}
          {activeSection === 'menu' && <MenuSection translations={t} language={language} />}
          {activeSection === 'gallery' && <GallerySection translations={t} />}
          {activeSection === 'about' && <AboutSection translations={t} />}
          {activeSection === 'contact' && <ContactSection translations={t} />}
        </div>
      </main>
    </div>
  );
}

export default App;