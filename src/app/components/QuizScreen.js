'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  IconButton,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const optionLetters = ['A', 'B', 'C', 'D'];

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
}) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const getOptionStyle = (optionIndex) => {
    if (!isVerified) {
      if (selectedOption === optionIndex) {
        return {
          border: '2px solid #5C6BC0',
          bgcolor: 'rgba(92, 107, 192, 0.1)',
        };
      }
      return {
        border: '2px solid rgba(92, 107, 192, 0.12)',
        bgcolor: 'transparent',
        '&:hover': {
          border: '2px solid rgba(92, 107, 192, 0.3)',
          bgcolor: 'rgba(92, 107, 192, 0.05)',
        },
      };
    }

    // Verified state
    if (optionIndex === question.correctIndex) {
      return {
        border: '2px solid #66BB6A',
        bgcolor: 'rgba(102, 187, 106, 0.1)',
      };
    }
    if (selectedOption === optionIndex && optionIndex !== question.correctIndex) {
      return {
        border: '2px solid #EF5350',
        bgcolor: 'rgba(239, 83, 80, 0.1)',
      };
    }
    return {
      border: '2px solid rgba(92, 107, 192, 0.08)',
      bgcolor: 'transparent',
      opacity: 0.5,
    };
  };

  const getOptionIcon = (optionIndex) => {
    if (!isVerified) return null;
    if (optionIndex === question.correctIndex) {
      return <CheckCircleRoundedIcon sx={{ color: '#66BB6A', fontSize: 22 }} />;
    }
    if (selectedOption === optionIndex && optionIndex !== question.correctIndex) {
      return <CancelRoundedIcon sx={{ color: '#EF5350', fontSize: 22 }} />;
    }
    return null;
  };

  return (
    <Box sx={{ minHeight: '100vh', pb: 4 }}>
      {/* Top bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          bgcolor: 'rgba(10, 14, 26, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(92, 107, 192, 0.1)',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ py: 1.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Pregunta {currentIndex + 1} de {totalQuestions}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip
                  icon={<TaskAltRoundedIcon sx={{ fontSize: 14 }} />}
                  label={stats.correct}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(102, 187, 106, 0.12)',
                    color: '#66BB6A',
                    fontWeight: 700,
                    height: 26,
                    '& .MuiChip-icon': { color: '#66BB6A' },
                  }}
                />
                <Chip
                  icon={<HighlightOffRoundedIcon sx={{ fontSize: 14 }} />}
                  label={stats.wrong}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(239, 83, 80, 0.12)',
                    color: '#EF5350',
                    fontWeight: 700,
                    height: 26,
                    '& .MuiChip-icon': { color: '#EF5350' },
                  }}
                />
              </Box>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 6,
                borderRadius: 3,
                bgcolor: 'rgba(92, 107, 192, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 3,
                  background: 'linear-gradient(90deg, #5C6BC0, #26A69A)',
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ pt: 3 }}>
        {/* Topic chip */}
        <Box className="animate-slide-in" sx={{ mb: 2 }}>
          <Chip
            label={`Tema ${question.tema}: ${question.temaTitle}`}
            size="small"
            sx={{
              bgcolor: 'rgba(92, 107, 192, 0.1)',
              color: '#9FA8DA',
              fontWeight: 500,
              fontSize: '0.75rem',
            }}
          />
        </Box>

        {/* Question */}
        <Card
          className="glass-card animate-slide-in"
          sx={{ mb: 3 }}
        >
          <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                fontWeight: 500,
                lineHeight: 1.7,
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                whiteSpace: 'pre-line',
              }}
            >
              {question.question}
            </Typography>
          </CardContent>
        </Card>

        {/* Options */}
        <Box className="animate-slide-in" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
          {question.options.map((option, index) => (
            <Box
              key={index}
              onClick={() => onSelectOption(index)}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                p: { xs: 2, sm: 2.5 },
                borderRadius: '14px',
                cursor: isVerified ? 'default' : 'pointer',
                transition: 'all 0.25s ease',
                ...getOptionStyle(index),
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  bgcolor: isVerified && index === question.correctIndex
                    ? 'rgba(102, 187, 106, 0.15)'
                    : isVerified && selectedOption === index && index !== question.correctIndex
                      ? 'rgba(239, 83, 80, 0.15)'
                      : selectedOption === index
                        ? 'rgba(92, 107, 192, 0.2)'
                        : 'rgba(92, 107, 192, 0.08)',
                  mt: 0.2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: isVerified && index === question.correctIndex
                      ? '#66BB6A'
                      : isVerified && selectedOption === index && index !== question.correctIndex
                        ? '#EF5350'
                        : selectedOption === index
                          ? '#7986CB'
                          : '#9FA8DA',
                  }}
                >
                  {optionLetters[index]}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: isVerified && index === question.correctIndex
                    ? '#81C784'
                    : isVerified && selectedOption === index && index !== question.correctIndex
                      ? '#E57373'
                      : 'text.primary',
                  fontWeight: isVerified && index === question.correctIndex ? 600 : 400,
                  flex: 1,
                  fontSize: { xs: '0.88rem', sm: '0.95rem' },
                  lineHeight: 1.6,
                }}
              >
                {option}
              </Typography>
              {getOptionIcon(index)}
            </Box>
          ))}
        </Box>

        {/* Feedback message */}
        {isVerified && (
          <Box
            className="animate-fade-in"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              borderRadius: '12px',
              mb: 3,
              bgcolor: selectedOption === question.correctIndex
                ? 'rgba(102, 187, 106, 0.08)'
                : 'rgba(239, 83, 80, 0.08)',
              border: `1px solid ${selectedOption === question.correctIndex
                ? 'rgba(102, 187, 106, 0.2)'
                : 'rgba(239, 83, 80, 0.2)'}`,
            }}
          >
            {selectedOption === question.correctIndex ? (
              <>
                <CheckCircleRoundedIcon sx={{ color: '#66BB6A', fontSize: 28 }} />
                <Typography sx={{ color: '#81C784', fontWeight: 500 }}>
                  ¡Correcto! 🎉
                </Typography>
              </>
            ) : (
              <>
                <CancelRoundedIcon sx={{ color: '#EF5350', fontSize: 28 }} />
                <Typography sx={{ color: '#E57373', fontWeight: 500 }}>
                  Incorrecto — La respuesta correcta es la <strong>{optionLetters[question.correctIndex]}</strong>
                </Typography>
              </>
            )}
          </Box>
        )}

        {/* Action buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {!isVerified ? (
            <>
              <Button
                variant="contained"
                onClick={onVerify}
                disabled={selectedOption === null}
                startIcon={<VerifiedRoundedIcon />}
                sx={{
                  background: selectedOption !== null
                    ? 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 100%)'
                    : undefined,
                  py: 1.5,
                  px: 4,
                  fontSize: '1rem',
                  boxShadow: selectedOption !== null
                    ? '0 6px 24px rgba(92, 107, 192, 0.35)'
                    : 'none',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7986CB 0%, #5C6BC0 100%)',
                  },
                }}
              >
                Verificar
              </Button>
              <Button
                variant="outlined"
                onClick={onSkip}
                startIcon={<SkipNextRoundedIcon />}
                sx={{
                  borderColor: 'rgba(92, 107, 192, 0.3)',
                  color: 'text.secondary',
                  py: 1.5,
                  px: 3,
                  '&:hover': {
                    borderColor: 'rgba(92, 107, 192, 0.5)',
                    bgcolor: 'rgba(92, 107, 192, 0.05)',
                  },
                }}
              >
                Saltar
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              onClick={onNext}
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                background: 'linear-gradient(135deg, #26A69A 0%, #00897B 100%)',
                py: 1.5,
                px: 5,
                fontSize: '1rem',
                boxShadow: '0 6px 24px rgba(38, 166, 154, 0.35)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4DB6AC 0%, #26A69A 100%)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {isLastQuestion ? 'Ver Resultados' : 'Siguiente'}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
