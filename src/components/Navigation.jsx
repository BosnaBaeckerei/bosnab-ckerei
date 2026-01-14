import { Home, UtensilsCrossed, Image, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navigation = ({
  activeSection,
  onSectionChange,
  language,
  onLanguageChange,
  translations,
}) => {
  const navItems = [
    { id: "home", icon: Home, label: translations.nav.home },
    { id: "menu", icon: UtensilsCrossed, label: translations.nav.menu },
    { id: "gallery", icon: Image, label: translations.nav.gallery },
    { id: "about", icon: Info, label: translations.nav.about },
    { id: "contact", icon: Phone, label: translations.nav.contact },
  ];

  const languages = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "bs", label: "BS" },
  ];

  return (
    <>
      {/* Floating Language Switcher (MOBILE ONLY) */}
      <div className="md:hidden fixed z-[60] right-3 top-3">
        <div
          className="flex gap-1 p-1 rounded-xl shadow-xl border border-white/20 backdrop-blur-md"
          style={{ background: "linear-gradient(180deg, #731919 0%, #E52B2B 100%)" }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`px-2.5 py-1.5 text-xs rounded-lg transition-smooth font-medium ${
                language === lang.code
                  ? "bg-white text-primary"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Navigation - Left Sidebar */}
      <nav
        className="hidden md:flex fixed left-0 top-0 bottom-0 z-50 w-56 flex-col"
        style={{ background: "linear-gradient(180deg, #731919 0%, #E52B2B 100%)" }}
      >
        {/* Logo (NO animation) */}
        <div className="p-4 border-b border-white/20 cursor-pointer">
          <img
            src="/logo.png"
            alt="Bosna Logo"
            className="w-full h-auto logo-blue-shadow"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col gap-1.5 p-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => onSectionChange(item.id)}
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start transition-smooth hover:bg-white/20 text-sm ${
                    activeSection === item.id
                      ? "bg-white/30 text-white shadow-lg scale-105"
                      : "text-white/90 hover:scale-105"
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Language Switcher (DESKTOP - inside sidebar) */}
        <div className="p-3 border-t border-white/20">
          <div className="flex gap-1">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                variant="ghost"
                size="sm"
                className={`flex-1 transition-smooth hover:bg-white/20 text-xs ${
                  language === lang.code ? "bg-white text-primary" : "text-white/90"
                }`}
              >
                {lang.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{ background: "linear-gradient(180deg, #731919 0%, #E52B2B 100%)" }}
      >
        <div className="flex items-center justify-around px-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex flex-col items-center gap-0.5 transition-smooth px-2 py-1.5 rounded-lg ${
                  activeSection === item.id
                    ? "bg-white/30 text-white scale-110"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
