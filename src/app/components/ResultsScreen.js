'use client';

import { useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';

const optionLetters = ['A', 'B', 'C', 'D'];

export default function ResultsScreen({
  answers,
  questions,
  shuffledQuestions,
  stats,
  onRestart,
  onRetryWrong,
}) {
  const percentage = Math.round((stats.correct / stats.total) * 100);

  const getGradeInfo = () => {
    if (percentage >= 90) return { emoji: '🏆', label: '¡Excelente!', color: '#66BB6A' };
    if (percentage >= 70) return { emoji: '🎉', label: '¡Aprobado!', color: '#4DB6AC' };
    if (percentage >= 50) return { emoji: '💪', label: 'Casi...', color: '#FFA726' };
    return { emoji: '📚', label: 'A estudiar más', color: '#EF5350' };
  };

  const grade = getGradeInfo();

  // Group wrong answers by topic
  const wrongByTema = useMemo(() => {
    const groups = {};
    shuffledQuestions.forEach(q => {
      const answer = answers[q.id];
      if (answer && !answer.correct) {
        if (!groups[q.tema]) {
          groups[q.tema] = {
            title: q.temaTitle,
            questions: [],
          };
        }
        groups[q.tema].questions.push({
          ...q,
          userAnswer: answer.selected,
          skipped: answer.skipped,
        });
      }
    });
    return groups;
  }, [answers, shuffledQuestions]);

  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Box sx={{ minHeight: '100vh', pb: 6, pt: 4 }}>
      <Container maxWidth="md">
        {/* Score Card */}
        <Card
          className="glass-card animate-fade-in"
          sx={{ mb: 4, overflow: 'visible' }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 5 }, textAlign: 'center' }}>
            {/* Circular Progress */}
            <Box sx={{ position: 'relative', display: 'inline-flex', mb: 3 }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="rgba(92, 107, 192, 0.1)"
                  strokeWidth="8"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke={grade.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 80 80)"
                  style={{
                    transition: 'stroke-dashoffset 1.5s ease-out',
                  }}
                />
              </svg>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 800, color: grade.color }}>
                  {percentage}%
                </Typography>
              </Box>
            </Box>

            <Typography variant="h4" sx={{ mb: 1, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              {grade.emoji} {grade.label}
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              {percentage >= 70
                ? '¡Felicitaciones! Estás preparado/a para el examen.'
                : 'Sigue practicando, ¡tú puedes!'}
            </Typography>

            {/* Stats */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, sm: 4 }, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#66BB6A' }}>
                  {stats.correct}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Correctas
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(92, 107, 192, 0.15)' }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#EF5350' }}>
                  {stats.wrong}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Incorrectas
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(92, 107, 192, 0.15)' }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#FFA726' }}>
                  {stats.skipped}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Saltadas
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(92, 107, 192, 0.15)' }} />
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#7986CB' }}>
                  {stats.total}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Total
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
          <Button
            variant="contained"
            onClick={onRestart}
            startIcon={<ReplayRoundedIcon />}
            sx={{
              background: 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 100%)',
              py: 1.5,
              px: 4,
              fontSize: '1rem',
              boxShadow: '0 6px 24px rgba(92, 107, 192, 0.35)',
              '&:hover': {
                background: 'linear-gradient(135deg, #7986CB 0%, #5C6BC0 100%)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Volver a empezar
          </Button>
          {stats.wrong + stats.skipped > 0 && (
            <Button
              variant="outlined"
              onClick={onRetryWrong}
              startIcon={<RefreshRoundedIcon />}
              sx={{
                borderColor: '#EF5350',
                color: '#EF5350',
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                '&:hover': {
                  borderColor: '#E57373',
                  bgcolor: 'rgba(239, 83, 80, 0.05)',
                },
              }}
            >
              Reintentar falladas ({stats.wrong + stats.skipped})
            </Button>
          )}
        </Box>

        {/* Wrong Answers Detail */}
        {Object.keys(wrongByTema).length > 0 && (
          <Box className="animate-fade-in">
            <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary', fontWeight: 600 }}>
              📋 Preguntas a repasar
            </Typography>

            {Object.entries(wrongByTema)
              .sort(([a], [b]) => parseInt(a) - parseInt(b))
              .map(([temaNum, temaData]) => (
                <Accordion
                  key={temaNum}
                  sx={{
                    bgcolor: 'rgba(19, 24, 41, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(92, 107, 192, 0.1)',
                    mb: 1.5,
                    borderRadius: '12px !important',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { mb: 1.5 },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreRoundedIcon sx={{ color: 'text.secondary' }} />}
                    sx={{ px: 2.5 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Chip
                        label={`Tema ${temaNum}`}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(239, 83, 80, 0.1)',
                          color: '#E57373',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                        }}
                      />
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                        {temaData.title}
                      </Typography>
                      <Chip
                        label={temaData.questions.length}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(239, 83, 80, 0.08)',
                          color: '#EF5350',
                          fontWeight: 700,
                          height: 22,
                          minWidth: 22,
                        }}
                      />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 2.5, pb: 2.5 }}>
                    {temaData.questions.map((q, qi) => (
                      <Box
                        key={q.id}
                        sx={{
                          p: 2,
                          mb: qi < temaData.questions.length - 1 ? 1.5 : 0,
                          borderRadius: '10px',
                          bgcolor: 'rgba(10, 14, 26, 0.5)',
                          border: '1px solid rgba(92, 107, 192, 0.08)',
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            mb: 1.5,
                            fontWeight: 500,
                            lineHeight: 1.6,
                            whiteSpace: 'pre-line',
                            fontSize: '0.85rem',
                          }}
                        >
                          {q.question.length > 200 ? q.question.substring(0, 200) + '...' : q.question}
                        </Typography>

                        {q.skipped ? (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SkipNextRoundedIcon sx={{ color: '#FFA726', fontSize: 18 }} />
                            <Typography variant="caption" sx={{ color: '#FFA726', fontWeight: 500 }}>
                              Saltada
                            </Typography>
                          </Box>
                        ) : (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CancelRoundedIcon sx={{ color: '#EF5350', fontSize: 18 }} />
                            <Typography variant="caption" sx={{ color: '#E57373' }}>
                              Respondiste: <strong>{optionLetters[q.userAnswer]}</strong>
                            </Typography>
                          </Box>
                        )}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                          <CheckCircleRoundedIcon sx={{ color: '#66BB6A', fontSize: 18 }} />
                          <Typography variant="caption" sx={{ color: '#81C784' }}>
                            Correcta: <strong>{optionLetters[q.correctIndex]}.</strong> {q.options[q.correctIndex]}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
