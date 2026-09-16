'use client';

import { useState, useMemo } from 'react';
import TopAppBar from './TopAppBar';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export default function ResultsScreen({
  answers,
  questions,
  shuffledQuestions,
  stats,
  onRestart,
  onRetryWrong,
}) {
  const [filter, setFilter] = useState('all'); // 'all' | 'wrong' | 'correct'

  const totalAnswered = stats.correct + stats.wrong + stats.skipped;
  const percentage = totalAnswered > 0 ? Math.round((stats.correct / totalAnswered) * 100) : 0;
  const isPassing = percentage >= 75;

  const answeredQuestionsList = useMemo(() => {
    return shuffledQuestions
      .map((q) => {
        const answer = answers[q.id];
        if (!answer) return null;
        return {
          question: q,
          selected: answer.selected,
          correctIndex: q.correctIndex,
          isCorrect: answer.correct,
          skipped: answer.skipped,
        };
      })
      .filter(Boolean);
  }, [shuffledQuestions, answers]);

  const filteredQuestions = useMemo(() => {
    if (filter === 'wrong') return answeredQuestionsList.filter((item) => !item.isCorrect);
    if (filter === 'correct') return answeredQuestionsList.filter((item) => item.isCorrect);
    return answeredQuestionsList;
  }, [answeredQuestionsList, filter]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopAppBar title="Quiz Isapres" subtitle="Resultados Finales" showRestart={true} onRestart={onRestart} />

      <main
        style={{
          flex: 1,
          maxWidth: '840px',
          width: '100%',
          margin: '0 auto',
          padding: '24px 16px 64px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Results Summary Hero Card */}
        <section
          className="m3-card-elevated m3-animate-in"
          style={{
            padding: '36px 24px',
            textAlign: 'center',
            backgroundColor: 'var(--md-sys-color-surface-container)',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isPassing
                ? 'var(--md-sys-color-success-container)'
                : 'var(--md-sys-color-error-container)',
              color: isPassing
                ? 'var(--md-sys-color-on-success-container)'
                : 'var(--md-sys-color-on-error-container)',
              border: `4px solid ${isPassing ? 'var(--md-sys-color-success)' : 'var(--md-sys-color-error)'}`,
            }}
          >
            <span style={{ fontSize: '28px', fontWeight: 800 }}>{percentage}%</span>
            <span className="md-typescale-label-small" style={{ fontWeight: 600 }}>
              PUNTAJE
            </span>
          </div>

          <h2 className="md-typescale-headline-medium" style={{ fontWeight: 700, margin: '0 0 8px' }}>
            {isPassing ? '¡Felicitaciones! Has Aprobado' : '¡Examen Finalizado! Sigue Practicando'}
          </h2>

          <p
            className="md-typescale-body-medium"
            style={{
              color: 'var(--md-sys-color-on-surface-variant)',
              maxWidth: '520px',
              margin: '0 auto 24px',
            }}
          >
            {isPassing
              ? 'Has demostrado un sólido conocimiento de la normativa oficial de Isapres, CAEC, GES y fiscalización.'
              : 'El porcentaje mínimo sugerido para la prueba es de 75%. Revisa a continuación las preguntas falladas y reinténtalas.'}
          </p>

          {/* Stats Badges Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <div
              className="m3-card-outlined"
              style={{
                padding: '16px',
                backgroundColor: 'var(--md-sys-color-surface-container-lowest)',
              }}
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--md-sys-color-primary)', fontSize: '24px' }}>
                format_list_numbered
              </span>
              <div className="md-typescale-headline-small" style={{ fontWeight: 700, margin: '6px 0 2px' }}>
                {totalAnswered}
              </div>
              <div className="md-typescale-label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Total Respondidas
              </div>
            </div>

            <div
              className="m3-card-outlined"
              style={{
                padding: '16px',
                backgroundColor: 'var(--md-sys-color-success-container)',
                color: 'var(--md-sys-color-on-success-container)',
                border: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                check_circle
              </span>
              <div className="md-typescale-headline-small" style={{ fontWeight: 700, margin: '6px 0 2px' }}>
                {stats.correct}
              </div>
              <div className="md-typescale-label-small" style={{ fontWeight: 600 }}>
                Correctas
              </div>
            </div>

            <div
              className="m3-card-outlined"
              style={{
                padding: '16px',
                backgroundColor: 'var(--md-sys-color-error-container)',
                color: 'var(--md-sys-color-on-error-container)',
                border: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                cancel
              </span>
              <div className="md-typescale-headline-small" style={{ fontWeight: 700, margin: '6px 0 2px' }}>
                {stats.wrong}
              </div>
              <div className="md-typescale-label-small" style={{ fontWeight: 600 }}>
                Incorrectas
              </div>
            </div>

            <div
              className="m3-card-outlined"
              style={{
                padding: '16px',
                backgroundColor: 'var(--md-sys-color-surface-container-high)',
                border: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                skip_next
              </span>
              <div className="md-typescale-headline-small" style={{ fontWeight: 700, margin: '6px 0 2px' }}>
                {stats.skipped}
              </div>
              <div className="md-typescale-label-small" style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
                Omitidas
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            {stats.wrong > 0 && (
              <md-filled-button
                onClick={onRetryWrong}
                style={{
                  '--md-filled-button-container-shape': '9999px',
                  '--md-filled-button-container-height': '48px',
                  padding: '0 24px',
                }}
              >
                <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '20px' }}>
                  replay
                </span>
                Reintentar {stats.wrong} Falladas
              </md-filled-button>
            )}

            <md-outlined-button
              onClick={onRestart}
              style={{
                '--md-outlined-button-container-shape': '9999px',
                '--md-outlined-button-container-height': '48px',
                padding: '0 24px',
              }}
            >
              <span className="material-symbols-outlined" slot="icon" style={{ fontSize: '20px' }}>
                home
              </span>
              Volver al Menú Principal
            </md-outlined-button>
          </div>
        </section>

        {/* Detailed Review Section */}
        <section>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '16px',
            }}
          >
            <h3 className="md-typescale-title-large" style={{ fontWeight: 600, margin: 0 }}>
              Revisión Detallada de Respuestas
            </h3>

            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setFilter('all')}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: `1px solid ${filter === 'all' ? 'transparent' : 'var(--md-sys-color-outline)'}`,
                  backgroundColor: filter === 'all' ? 'var(--md-sys-color-primary)' : 'transparent',
                  color: filter === 'all' ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-on-surface)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Todas ({answeredQuestionsList.length})
              </button>

              <button
                onClick={() => setFilter('wrong')}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: `1px solid ${filter === 'wrong' ? 'transparent' : 'var(--md-sys-color-outline)'}`,
                  backgroundColor: filter === 'wrong' ? 'var(--md-sys-color-error)' : 'transparent',
                  color: filter === 'wrong' ? 'var(--md-sys-color-on-error)' : 'var(--md-sys-color-on-surface)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Solo Falladas ({stats.wrong})
              </button>

              <button
                onClick={() => setFilter('correct')}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--md-sys-shape-corner-full)',
                  border: `1px solid ${filter === 'correct' ? 'transparent' : 'var(--md-sys-color-outline)'}`,
                  backgroundColor: filter === 'correct' ? 'var(--md-sys-color-success)' : 'transparent',
                  color: filter === 'correct' ? 'var(--md-sys-color-on-success)' : 'var(--md-sys-color-on-surface)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                Solo Correctas ({stats.correct})
              </button>
            </div>
          </div>

          {/* List of Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredQuestions.map((item, idx) => {
              const q = item.question;
              return (
                <div
                  key={q.id}
                  className="m3-card-outlined"
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--md-sys-color-surface-container-lowest)',
                    borderLeft: `5px solid ${
                      item.isCorrect ? 'var(--md-sys-color-success)' : 'var(--md-sys-color-error)'
                    }`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span
                      className="md-typescale-label-small"
                      style={{
                        padding: '2px 8px',
                        borderRadius: 'var(--md-sys-shape-corner-small)',
                        backgroundColor: 'var(--md-sys-color-surface-container-high)',
                        color: 'var(--md-sys-color-on-surface-variant)',
                        fontWeight: 600,
                      }}
                    >
                      Pregunta #{q.id} • Tema {q.tema}
                    </span>

                    <span
                      className="md-typescale-label-small"
                      style={{
                        padding: '3px 10px',
                        borderRadius: 'var(--md-sys-shape-corner-full)',
                        backgroundColor: item.isCorrect
                          ? 'var(--md-sys-color-success-container)'
                          : 'var(--md-sys-color-error-container)',
                        color: item.isCorrect
                          ? 'var(--md-sys-color-on-success-container)'
                          : 'var(--md-sys-color-on-error-container)',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        {item.isCorrect ? 'check_circle' : 'cancel'}
                      </span>
                      {item.isCorrect ? 'Correcta' : item.skipped ? 'Omitida' : 'Incorrecta'}
                    </span>
                  </div>

                  <p
                    className="md-typescale-title-small"
                    style={{
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: '14px',
                      color: 'var(--md-sys-color-on-surface)',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {q.question}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {q.options.map((opt, optIdx) => {
                      const isCorrectAnswer = optIdx === q.correctIndex;
                      const wasSelectedByUser = optIdx === item.selected;

                      let bg = 'var(--md-sys-color-surface-container-low)';
                      let border = 'transparent';
                      let color = 'var(--md-sys-color-on-surface)';

                      if (isCorrectAnswer) {
                        bg = 'var(--md-sys-color-success-container)';
                        border = 'var(--md-sys-color-success)';
                        color = 'var(--md-sys-color-on-success-container)';
                      } else if (wasSelectedByUser && !item.isCorrect) {
                        bg = 'var(--md-sys-color-error-container)';
                        border = 'var(--md-sys-color-error)';
                        color = 'var(--md-sys-color-on-error-container)';
                      }

                      return (
                        <div
                          key={optIdx}
                          style={{
                            padding: '10px 14px',
                            borderRadius: 'var(--md-sys-shape-corner-medium)',
                            backgroundColor: bg,
                            border: `1px solid ${border}`,
                            color: color,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '14px',
                          }}
                        >
                          <span style={{ fontWeight: 700 }}>{LETTERS[optIdx]}.</span>
                          <span style={{ flex: 1 }}>{opt}</span>
                          {isCorrectAnswer && (
                            <span
                              className="material-symbols-outlined"
                              style={{ color: 'var(--md-sys-color-success)', fontSize: '20px' }}
                              title="Respuesta correcta oficial"
                            >
                              check_circle
                            </span>
                          )}
                          {wasSelectedByUser && !item.isCorrect && (
                            <span
                              className="material-symbols-outlined"
                              style={{ color: 'var(--md-sys-color-error)', fontSize: '20px' }}
                              title="Tu respuesta (incorrecta)"
                            >
                              cancel
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
