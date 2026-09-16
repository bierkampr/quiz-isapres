'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check saved theme or system preference
    const saved = localStorage.getItem('m3-theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('m3-theme', nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      title={theme === 'light' ? 'Cambiar a modo oscuro (M3 Dark)' : 'Cambiar a modo claro (M3 Light)'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: 'var(--md-sys-shape-corner-full)',
        border: 'none',
        background: 'var(--md-sys-color-surface-container-high)',
        color: 'var(--md-sys-color-on-surface)',
        cursor: 'pointer',
        transition: 'background 0.2s, transform 0.15s',
      }}
      aria-label="Alternar tema claro y oscuro"
    >
      <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
}
