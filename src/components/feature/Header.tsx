import { useState, useEffect, useCallback } from 'react';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'こだわり', href: '#concept' },
  { label: 'メニュー', href: '#menu' },
  { label: '基本情報', href: '#info' },
  { label: 'アクセス', href: '#access' },
  { label: 'お問い合わせ', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-background-50 border-b border-secondary-200'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="cursor-pointer flex-shrink-0"
          >
            <span className="text-xl md:text-2xl font-heading font-bold text-foreground-50 tracking-wide">
            <img src={logo} alt="焼肉兄弟" className="w-16 h-16" />          
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="whitespace-nowrap cursor-pointer px-4 py-2 text-foreground-50 text-sm font-label hover:text-accent-500 transition-colors duration-200 rounded-md hover:text-accent-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:03-5875-2371"
              className="whitespace-nowrap cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-foreground-50 font-label font-medium rounded-md hover:bg-primary-600 transition-colors duration-300 text-sm"
            >
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
              電話予約
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden cursor-pointer w-10 h-10 flex items-center justify-center rounded-md text-foreground-300 hover:text-foreground-50 transition-colors duration-200"
            aria-label={mobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={mobileMenuOpen}
          >
            <i className={`text-xl w-5 h-5 flex items-center justify-center ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background-50 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="whitespace-nowrap cursor-pointer py-4 text-foreground-200 text-lg font-label border-b border-secondary-200 hover:text-accent-500 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 pt-6 border-t border-secondary-200">
            <a
              href="tel:03-5875-2371"
              onClick={() => setMobileMenuOpen(false)}
              className="whitespace-nowrap cursor-pointer w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-500 text-foreground-50 font-label font-medium rounded-md hover:bg-primary-600 transition-colors duration-300 text-base"
            >
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center"></i>
              03-5875-2371
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}