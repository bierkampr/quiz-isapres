'use client';

import { useState } from 'react';
import TopAppBar from './TopAppBar';

const TEMAS = [
  { id: 1, title: 'Regulación Agente de Ventas', count: 10, icon: 'badge' },
  { id: 2, title: 'Plan de Salud, Beneficios y Contratos', count: 19, icon: 'description' },
  { id: 3, title: 'Cobertura Enfermedades Catastróficas (CAEC)', count: 15, icon: 'health_and_safety' },
  { id: 4, title: 'Garantías Explícitas en Salud (GES)', count: 16, icon: 'verified_user' },
  { id: 5, title: 'Afiliación, Cotizaciones y Excedentes', count: 22, icon: 'payments' },
  { id: 6, title: 'Licencias Médicas y Fiscalización', count: 21, icon: 'gavel' },
];

export default function WelcomeScreen({ onStart, totalQuestions = 103 }) {
  const [selectedMode, setSelectedMode] = useState('all'); // 'all' | '25' | '50' | 'tema'
  const [selectedTema, setSelectedTema] = useState(1);

  const handleStart = () => {
    onStart({
      mode: selectedMode,
      tema: selectedMode === 'tema' ? selectedTema : null,
      limit: selectedMode === '25' ? 25 : selectedMode === '50' ? 50 : null,
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopAppBar title="Quiz Isapres" subtitle="Material Design 3" />

      <main
        style={{
          flex: 1,
          maxWidth: '840px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 16px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* M3 Hero Section */}
        <section
          className="m3-card-elevated m3-animate-in"
          style={{
            padding: '32px 24px',
            textAlign: 'center',
            backgroundColor: 'var(--md-sys-color-surface-container)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: 'var(--md-sys-shape-corner-full)',
              backgroundColor: 'var(--md-sys-color-primary-container)',
              color: 'var(--md-sys-color-on-primary-container)',
              marginBottom: '16px',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              verified
            </span>
            <span className="md-typescale-label-medium" style={{ fontWeight: 600 }}>
              Examen Oficial • 103 Preguntas
            </span>
          </div>

          <h2
            className="md-typescale-headline-large"
            style={{
              fontWeight: 700,
              color: 'var(--md-sys-color-on-surface)',
              marginBottom: '12px',
              lineHeight: 1.25,
            }}
          >
            Preparación para Examen de Isapres
          </h2>

          <p
            className="md-typescale-body-large"
            style={{
              color: 'var(--md-sys-color-on-surface-variant)',
              maxWidth: '620px',
              margin: '0 auto 28px',
              lineHeight: 1.5,
            }}
          >
            Practica con las preguntas oficiales de la prueba. Preguntas en orden aleatorio,
            verificación instantánea con respuestas correctas destacadas según la pauta oficial.
          </p>

          {/* Feature Highlights Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              textAlign: 'left',
              marginBottom: '28px',
            }}
          >
            <div
              className="m3-card-outlined"
              style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'var(--md-sys-color-surface-container-low)',
              }}
            >
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
                  flexShrink: 0,
                }}
              >
                <span className="material-symbols-outlined">shuffle</span>
              </div>
              <div>
                <h4 className="md-typescale-title-small" style={{ fontWeight: 600, margin: 0 }}>
                  Orden Aleatorio
                </h4>
                <p className="md-typescale-body-small" style={{ margin: 0, color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Nunca en el mismo orden
                </p>
              </div>
            </div>

            <div
              className="m3-card-outlined"
              style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'var(--md-sys-color-surface-container-low)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--md-sys-shape-corner-medium)',
                  backgroundColor: 'var(--md-sys-color-secondary-container)',
                  color: 'var(--md-sys-color-on-secondary-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <h4 className="md-typescale-title-small" style={{ fontWeight: 600, margin: 0 }}>
                  Feedback Inmediato
                </h4>
                <p className="md-typescale-body-small" style={{ margin: 0, color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Muestra la respuesta correcta
                </p>
              </div>
            </div>

            <div
              className="m3-card-outlined"
              style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                backgroundColor: 'var(--md-sys-color-surface-container-low)',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--md-sys-shape-corner-medium)',
                  backgroundColor: 'var(--md-sys-color-tertiary-container)',
                  color: 'var(--md-sys-color-on-tertiary-container)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <h4 className="md-typescale-title-small" style={{ fontWeight: 600, margin: 0 }}>
                  Desglose Final
                </h4>
                <p className="md-typescale-body-small" style={{ margin: 0, color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Revisa y reintenta falladas
                </p>
              </div>
            </div>
          </div>

          {/* Practice Mode Selector */}
          <div style={{ marginBottom: '24px', textAlign: 'left' }}>
            <label
              className="md-typescale-label-large"
              style={{ display: 'block', marginBottom: '10px', fontWeight: 600, color: 'var(--md-sys-color-on-surface)' }}
            >
              Elige cómo practicar:
            </label>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button
                onClick={() => setSelectedMode('all')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: `1px solid ${selectedMode === 'all' ? 'transparent' : 'var(--md-sys-color-outline)'}`,
                  backgroundColor: selectedMode === 'all' ? 'var(--md-sys-color-primary)' : 'transparent',
                  color: selectedMode === 'all' ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-on-surface)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  all_inclusive
                </span>
                Todas (103 preguntas)
              </button>

              <button
                onClick={() => setSelectedMode('25')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: `1px solid ${selectedMode === '25' ? 'transparent' : 'var(--md-sys-color-outline)'}`,
                  backgroundColor: selectedMode === '25' ? 'var(--md-sys-color-primary)' : 'transparent',
                  color: selectedMode === '25' ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-on-surface)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  bolt
                </span>
                Rápida (25 preguntas)
              </button>

              <button
                onClick={() => setSelectedMode('50')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: `1px solid ${selectedMode === '50' ? 'transparent' : 'var(--md-sys-color-outline)'}`,
                  backgroundColor: selectedMode === '50' ? 'var(--md-sys-color-primary)' : 'transparent',
                  color: selectedMode === '50' ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-on-surface)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  timelapse
                </span>
                Media Prueba (50 preguntas)
              </button>

              <button
                onClick={() => setSelectedMode('tema')}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: `1px solid ${selectedMode === 'tema' ? 'transparent' : 'var(--md-sys-color-outline)'}`,
                  backgroundColor: selectedMode === 'tema' ? 'var(--md-sys-color-primary)' : 'transparent',
                  color: selectedMode === 'tema' ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-on-surface)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  category
                </span>
                Por Tema específico
              </button>
            </div>

            {selectedMode === 'tema' && (
              <div style={{ marginTop: '16px' }}>
                <label className="md-typescale-label-medium" style={{ display: 'block', marginBottom: '8px' }}>
                  Selecciona el tema a practicar:
                </label>
                <select
                  value={selectedTema}
                  onChange={(e) => setSelectedTema(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--md-sys-shape-corner-medium)',
                    border: '1px solid var(--md-sys-color-outline)',
                    backgroundColor: 'var(--md-sys-color-surface)',
                    color: 'var(--md-sys-color-on-surface)',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                  }}
                >
                  {TEMAS.map((t) => (
                    <option key={t.id} value={t.id}>
                      Tema {t.id}: {t.title} ({t.count} preguntas)
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          <div>
            <md-filled-button
              onClick={handleStart}
              style={{
                '--md-filled-button-container-height': '54px',
                '--md-filled-button-container-shape': '9999px',
                fontSize: '16px',
                fontWeight: '600',
                padding: '0 32px',
              }}
            >
              <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '22px' }}>
                play_arrow
              </span>
              Iniciar Quiz
            </md-filled-button>
          </div>
        </section>

        {/* Temas Detail Section */}
        <section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--md-sys-color-primary)' }}>
              topic
            </span>
            <h3 className="md-typescale-title-large" style={{ fontWeight: 600, margin: 0 }}>
              Contenidos Evaluados (103 Preguntas)
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px',
            }}
          >
            {TEMAS.map((tema) => (
              <div
                key={tema.id}
                className="m3-card-outlined"
                style={{
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  backgroundColor: 'var(--md-sys-color-surface-container-lowest)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--md-sys-shape-corner-medium)',
                      backgroundColor: 'var(--md-sys-color-surface-container-high)',
                      color: 'var(--md-sys-color-on-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      {tema.icon}
                    </span>
                  </div>
                  <div>
                    <h5 className="md-typescale-title-small" style={{ fontWeight: 600, margin: 0 }}>
                      Tema {tema.id}
                    </h5>
                    <p
                      className="md-typescale-body-small"
                      style={{
                        margin: 0,
                        color: 'var(--md-sys-color-on-surface-variant)',
                        lineHeight: 1.3,
                      }}
                    >
                      {tema.title}
                    </p>
                  </div>
                </div>

                <span
                  className="md-typescale-label-small"
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--md-sys-shape-corner-full)',
                    backgroundColor: 'var(--md-sys-color-secondary-container)',
                    color: 'var(--md-sys-color-on-secondary-container)',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tema.count} preguntas
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
