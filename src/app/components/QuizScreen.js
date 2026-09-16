'use client';

import { useMemo } from 'react';
import TopAppBar from './TopAppBar';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export default function QuizScreen({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isVerified,
  onSelectOption,
  onVerify,
  onNext,
  onSkip,
  stats,
  onExit,
}) {
  const progressValue = (currentIndex + 1) / totalQuestions;
  const isCorrect = isVerified && selectedOption === question.correctIndex;
  const isWrong = isVerified && selectedOption !== question.correctIndex;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopAppBar
        title="Quiz Isapres"
        subtitle={`Pregunta ${currentIndex + 1} de ${totalQuestions}`}
        showRestart={true}
        onRestart={onExit}
      />

      {/* Material 3 Linear Progress Bar */}
      <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--md-sys-color-surface-container-highest)' }}>
        <div
          style={{
            height: '100%',
            width: `${Math.round(progressValue * 100)}%`,
            backgroundColor: 'var(--md-sys-color-primary)',
            transition: 'width 0.3s cubic-bezier(0.2, 0, 0, 1)',
          }}
        />
      </div>

      <main
        style={{
          flex: 1,
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto',
          padding: '20px 16px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Meta Bar: Tema & Stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--md-sys-shape-corner-full)',
              backgroundColor: 'var(--md-sys-color-secondary-container)',
              color: 'var(--md-sys-color-on-secondary-container)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              folder
            </span>
            <span className="md-typescale-label-medium" style={{ fontWeight: 600 }}>
              Tema {question.tema}: {question.temaTitle}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              className="md-typescale-label-medium"
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--md-sys-shape-corner-full)',
                backgroundColor: 'var(--md-sys-color-success-container)',
                color: 'var(--md-sys-color-on-success-container)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                check
              </span>
              {stats.correct}
            </span>

            <span
              className="md-typescale-label-medium"
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--md-sys-shape-corner-full)',
                backgroundColor: 'var(--md-sys-color-error-container)',
                color: 'var(--md-sys-color-on-error-container)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                close
              </span>
              {stats.wrong}
            </span>
          </div>
        </div>

        {/* Question Card (M3 Elevated) */}
        <section
          className="m3-card-elevated m3-animate-in"
          style={{
            padding: '28px 24px',
            backgroundColor: 'var(--md-sys-color-surface-container-low)',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: 'var(--md-sys-shape-corner-small)',
              backgroundColor: 'var(--md-sys-color-surface-container-highest)',
              color: 'var(--md-sys-color-on-surface-variant)',
              fontWeight: 700,
              fontSize: '12px',
              marginBottom: '12px',
              letterSpacing: '0.5px',
            }}
          >
            PREGUNTA #{question.id}
          </div>

          <h2
            className="md-typescale-title-large"
            style={{
              fontWeight: 600,
              lineHeight: 1.45,
              color: 'var(--md-sys-color-on-surface)',
              whiteSpace: 'pre-line',
            }}
          >
            {question.question}
          </h2>
        </section>

        {/* Options List */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {question.options.map((optionText, idx) => {
            const letter = LETTERS[idx] || `${idx + 1}`;
            const isSelected = selectedOption === idx;
            const isThisCorrect = isVerified && idx === question.correctIndex;
            const isThisWrongSelected = isVerified && isSelected && idx !== question.correctIndex;

            let itemClasses = 'm3-option-item';
            if (isSelected) itemClasses += ' m3-option-selected';
            if (isVerified) itemClasses += ' m3-option-verified';
            if (isThisCorrect) itemClasses += ' m3-option-correct';
            if (isThisWrongSelected) itemClasses += ' m3-option-wrong';

            return (
              <button
                key={idx}
                className={itemClasses}
                onClick={() => onSelectOption(idx)}
                disabled={isVerified}
                type="button"
              >
                <div className="m3-option-badge">{letter}</div>

                <div style={{ flex: 1, textAlign: 'left', lineHeight: 1.45 }}>
                  <span
                    className="md-typescale-body-large"
                    style={{
                      display: 'block',
                      fontWeight: isSelected || isThisCorrect ? 500 : 400,
                      color: 'inherit',
                    }}
                  >
                    {optionText}
                  </span>
                </div>

                {/* Status Indicator Icon */}
                <div style={{ flexShrink: 0, marginTop: '2px' }}>
                  {isThisCorrect && (
                    <span
                      className="material-symbols-outlined"
                      style={{ color: 'var(--md-sys-color-success)', fontSize: '24px' }}
                    >
                      check_circle
                    </span>
                  )}
                  {isThisWrongSelected && (
                    <span
                      className="material-symbols-outlined"
                      style={{ color: 'var(--md-sys-color-error)', fontSize: '24px' }}
                    >
                      cancel
                    </span>
                  )}
                  {!isVerified && (
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: `2px solid ${
                          isSelected ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline)'
                        }`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                      }}
                    >
                      {isSelected && (
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--md-sys-color-primary)',
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </section>

        {/* Post-Verification Feedback Banner */}
        {isVerified && (
          <div
            className="m3-animate-in"
            style={{
              padding: '16px 20px',
              borderRadius: 'var(--md-sys-shape-corner-large)',
              backgroundColor: isCorrect
                ? 'var(--md-sys-color-success-container)'
                : 'var(--md-sys-color-error-container)',
              color: isCorrect
                ? 'var(--md-sys-color-on-success-container)'
                : 'var(--md-sys-color-on-error-container)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '28px',
                color: isCorrect ? 'var(--md-sys-color-success)' : 'var(--md-sys-color-error)',
              }}
            >
              {isCorrect ? 'check_circle' : 'cancel'}
            </span>
            <div>
              <h4 className="md-typescale-title-medium" style={{ margin: 0, fontWeight: 700 }}>
                {isCorrect ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta'}
              </h4>
              <p className="md-typescale-body-medium" style={{ margin: '2px 0 0', opacity: 0.9 }}>
                {isCorrect
                  ? 'Has seleccionado la alternativa correcta destacada en el temario oficial.'
                  : `La opción correcta es la ${LETTERS[question.correctIndex]}: "${
                      question.options[question.correctIndex]
                    }". Ha sido marcada en verde.`}
              </p>
            </div>
          </div>
        )}

        {/* Action Controls Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginTop: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--md-sys-color-outline-variant)',
          }}
        >
          {!isVerified ? (
            <>
              <md-outlined-button
                onClick={onSkip}
                style={{
                  '--md-outlined-button-container-shape': '9999px',
                }}
              >
                <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '20px' }}>
                  skip_next
                </span>
                Saltar
              </md-outlined-button>

              <md-filled-button
                onClick={onVerify}
                disabled={selectedOption === null}
                style={{
                  '--md-filled-button-container-shape': '9999px',
                  '--md-filled-button-container-height': '46px',
                  padding: '0 24px',
                }}
              >
                <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '20px' }}>
                  check
                </span>
                Verificar Respuesta
              </md-filled-button>
            </>
          ) : (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <md-filled-button
                onClick={onNext}
                style={{
                  '--md-filled-button-container-shape': '9999px',
                  '--md-filled-button-container-height': '48px',
                  padding: '0 28px',
                  fontSize: '15px',
                  fontWeight: '600',
                }}
              >
                {currentIndex < totalQuestions - 1 ? 'Siguiente Pregunta' : 'Ver Resultados Finales'}
                <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '20px' }}>
                  arrow_forward
                </span>
              </md-filled-button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
