'use client';

import ThemeToggle from './ThemeToggle';

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
    <div className="quiz-viewport">
      {/* Sleek M3 Top App Bar */}
      <header className="quiz-top-bar">
        {/* Left: App title & question counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: 'var(--md-sys-shape-corner-small)',
              backgroundColor: 'var(--md-sys-color-primary-container)',
              color: 'var(--md-sys-color-on-primary-container)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              health_and_safety
            </span>
          </div>

          <span className="md-typescale-title-medium" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
            Quiz Isapres
          </span>

          <span
            className="md-typescale-label-small"
            style={{
              padding: '3px 8px',
              borderRadius: 'var(--md-sys-shape-corner-full)',
              backgroundColor: 'var(--md-sys-color-surface-container-highest)',
              color: 'var(--md-sys-color-on-surface)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>

        {/* Center: Topic (Desktop only or truncated) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: 'var(--md-sys-shape-corner-full)',
            backgroundColor: 'var(--md-sys-color-secondary-container)',
            color: 'var(--md-sys-color-on-secondary-container)',
            maxWidth: '450px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          className="desktop-topic-pill"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            folder
          </span>
          <span className="md-typescale-label-medium" style={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Tema {question.tema}: {question.temaTitle}
          </span>
        </div>

        {/* Right: Score counts, Home & Theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              className="md-typescale-label-small"
              style={{
                padding: '3px 8px',
                borderRadius: 'var(--md-sys-shape-corner-full)',
                backgroundColor: 'var(--md-sys-color-success-container)',
                color: 'var(--md-sys-color-on-success-container)',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
              }}
              title="Respuestas correctas"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                check
              </span>
              {stats.correct}
            </span>

            <span
              className="md-typescale-label-small"
              style={{
                padding: '3px 8px',
                borderRadius: 'var(--md-sys-shape-corner-full)',
                backgroundColor: 'var(--md-sys-color-error-container)',
                color: 'var(--md-sys-color-on-error-container)',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
              }}
              title="Respuestas incorrectas"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                close
              </span>
              {stats.wrong}
            </span>
          </div>

          <button
            onClick={onExit}
            title="Volver al menú principal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: 'var(--md-sys-shape-corner-full)',
              border: 'none',
              background: 'transparent',
              color: 'var(--md-sys-color-on-surface-variant)',
              cursor: 'pointer',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              home
            </span>
          </button>

          <ThemeToggle />
        </div>
      </header>

      {/* 3px M3 Linear Progress Bar */}
      <div style={{ width: '100%', height: '3px', backgroundColor: 'var(--md-sys-color-surface-container-highest)' }}>
        <div
          style={{
            height: '100%',
            width: `${Math.round(progressValue * 100)}%`,
            backgroundColor: 'var(--md-sys-color-primary)',
            transition: 'width 0.25s cubic-bezier(0.2, 0, 0, 1)',
          }}
        />
      </div>

      {/* Main 2-Column Split Container (No Scroll) */}
      <main className="quiz-main-container">
        {/* Left Column: Question Prompt */}
        <section className="quiz-question-card m3-animate-in">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '3px 8px',
                borderRadius: 'var(--md-sys-shape-corner-small)',
                backgroundColor: 'var(--md-sys-color-surface-container-highest)',
                color: 'var(--md-sys-color-on-surface-variant)',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.5px',
              }}
            >
              PREGUNTA #{question.id}
            </span>

            <span
              className="md-typescale-label-small"
              style={{
                color: 'var(--md-sys-color-on-surface-variant)',
                fontWeight: 600,
              }}
            >
              Tema {question.tema}: {question.temaTitle}
            </span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
            <h2
              className="md-typescale-title-large quiz-question-text"
              style={{
                fontWeight: 600,
                lineHeight: 1.45,
                color: 'var(--md-sys-color-on-surface)',
                whiteSpace: 'pre-line',
                margin: 0,
              }}
            >
              {question.question}
            </h2>
          </div>
        </section>

        {/* Right Column: Options & Controls */}
        <section className="quiz-options-card">
          {/* Options List */}
          <div className="quiz-options-list">
            {question.options.map((optionText, idx) => {
              const letter = LETTERS[idx] || `${idx + 1}`;
              const isSelected = selectedOption === idx;
              const isThisCorrect = isVerified && idx === question.correctIndex;
              const isThisWrongSelected = isVerified && isSelected && idx !== question.correctIndex;

              let itemClasses = 'm3-option-item quiz-option-btn';
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

                  <div style={{ flex: 1, textAlign: 'left', lineHeight: 1.4 }}>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: isSelected || isThisCorrect ? 600 : 400,
                        color: 'inherit',
                        fontSize: '14px',
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
                        style={{ color: 'var(--md-sys-color-success)', fontSize: '22px' }}
                      >
                        check_circle
                      </span>
                    )}
                    {isThisWrongSelected && (
                      <span
                        className="material-symbols-outlined"
                        style={{ color: 'var(--md-sys-color-error)', fontSize: '22px' }}
                      >
                        cancel
                      </span>
                    )}
                    {!isVerified && (
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
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
                              width: '8px',
                              height: '8px',
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
          </div>

          {/* Feedback Banner (when verified) */}
          {isVerified && (
            <div
              className="m3-animate-in"
              style={{
                padding: '10px 14px',
                borderRadius: 'var(--md-sys-shape-corner-medium)',
                backgroundColor: isCorrect
                  ? 'var(--md-sys-color-success-container)'
                  : 'var(--md-sys-color-error-container)',
                color: isCorrect
                  ? 'var(--md-sys-color-on-success-container)'
                  : 'var(--md-sys-color-on-error-container)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flexShrink: 0,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '22px',
                  color: isCorrect ? 'var(--md-sys-color-success)' : 'var(--md-sys-color-error)',
                }}
              >
                {isCorrect ? 'check_circle' : 'cancel'}
              </span>
              <div style={{ flex: 1 }}>
                <span style={{ fontWeight: 700, fontSize: '13px', display: 'block' }}>
                  {isCorrect ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta'}
                </span>
                <span style={{ fontSize: '12px', opacity: 0.9, lineHeight: 1.3, display: 'block' }}>
                  {isCorrect
                    ? 'Alternativa acertada según la pauta oficial.'
                    : `Correcta: ${LETTERS[question.correctIndex]}. ${question.options[question.correctIndex]}`}
                </span>
              </div>
            </div>
          )}

          {/* Action Button Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              paddingTop: '6px',
              flexShrink: 0,
            }}
          >
            {!isVerified ? (
              <>
                <md-outlined-button
                  onClick={onSkip}
                  style={{
                    '--md-outlined-button-container-shape': '9999px',
                    '--md-outlined-button-container-height': '42px',
                    fontSize: '14px',
                  }}
                >
                  <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '18px' }}>
                    skip_next
                  </span>
                  Saltar
                </md-outlined-button>

                <md-filled-button
                  onClick={onVerify}
                  disabled={selectedOption === null}
                  style={{
                    '--md-filled-button-container-shape': '9999px',
                    '--md-filled-button-container-height': '44px',
                    fontSize: '14px',
                    fontWeight: '600',
                    padding: '0 24px',
                  }}
                >
                  <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '18px' }}>
                    check
                  </span>
                  Verificar Respuesta
                </md-filled-button>
              </>
            ) : (
              <md-filled-button
                onClick={onNext}
                style={{
                  width: '100%',
                  '--md-filled-button-container-shape': '9999px',
                  '--md-filled-button-container-height': '46px',
                  fontSize: '15px',
                  fontWeight: '600',
                }}
              >
                {currentIndex < totalQuestions - 1 ? 'Siguiente Pregunta' : 'Ver Resultados Finales'}
                <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '20px' }}>
                  arrow_forward
                </span>
              </md-filled-button>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-topic-pill {
            display: inline-flex !important;
          }
        }
      `}</style>
    </div>
  );
}
