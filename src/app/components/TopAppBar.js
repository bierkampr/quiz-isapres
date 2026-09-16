'use client';

import ThemeToggle from './ThemeToggle';

export default function TopAppBar({ title = 'Quiz Isapres', subtitle, onRestart, showRestart = false }) {
  return (
    <header className="m3-top-app-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--md-sys-shape-corner-medium)',
            backgroundColor: 'var(--md-sys-color-primary-container)',
            color: 'var(--md-sys-color-on-primary-container)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
            health_and_safety
          </span>
        </div>
        <div>
          <h1 className="md-typescale-title-large" style={{ margin: 0, fontWeight: 600 }}>
            {title}
          </h1>
          {subtitle && (
            <p className="md-typescale-body-small" style={{ margin: 0, color: 'var(--md-sys-color-on-surface-variant)' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {showRestart && onRestart && (
          <button
            onClick={onRestart}
            title="Volver al inicio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--md-sys-shape-corner-full)',
              border: 'none',
              background: 'transparent',
              color: 'var(--md-sys-color-on-surface-variant)',
              cursor: 'pointer',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
              home
            </span>
          </button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
