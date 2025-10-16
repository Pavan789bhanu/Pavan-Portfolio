import React, { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    setDark(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <header className={`sticky top-0 z-40 backdrop-blur border-b transition
      ${scrolled ? 'bg-white/70 dark:bg-[#0f1115]/70 shadow-sm' : 'bg-white/60 dark:bg-[#0f1115]/60'}`}>
      <nav className="sectionWrap py-3 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg">Pavan-<span className="text-brand-600">AI/ML</span></a>
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}
                 className="text-gray-700 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-600">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="h-9 w-9 grid place-items-center rounded-full border border-white/60 dark:border-white/10
                     hover:bg-white/70 dark:hover:bg-white/[0.07]"
          title="Toggle light/dark"
        >
          {dark ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
