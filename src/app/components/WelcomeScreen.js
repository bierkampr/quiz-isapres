'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';

export default function WelcomeScreen({ onStart, totalQuestions }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          className="animate-fade-in"
          sx={{
            textAlign: 'center',
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '28px',
              background: 'linear-gradient(135deg, #5C6BC0 0%, #26A69A 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 4,
              boxShadow: '0 8px 32px rgba(92, 107, 192, 0.3)',
            }}
          >
            <SchoolRoundedIcon sx={{ fontSize: 52, color: '#fff' }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7986CB 0%, #4DB6AC 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Quiz Isapres
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontWeight: 400,
              fontSize: { xs: '0.95rem', sm: '1.1rem' },
            }}
          >
            Prepárate para tu examen de agente de ventas
          </Typography>

          {/* Info Card */}
          <Card
            className="glass-card"
            sx={{
              mb: 4,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'translateY(-2px)' },
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mb: 2.5 }}>
                <Chip
                  icon={<QuizRoundedIcon />}
                  label={`${totalQuestions} preguntas`}
                  sx={{
                    bgcolor: 'rgba(92, 107, 192, 0.15)',
                    color: '#7986CB',
                    fontWeight: 600,
                    '& .MuiChip-icon': { color: '#7986CB' },
                  }}
                />
                <Chip
                  icon={<TimerRoundedIcon />}
                  label="Orden aleatorio"
                  sx={{
                    bgcolor: 'rgba(38, 166, 154, 0.15)',
                    color: '#4DB6AC',
                    fontWeight: 600,
                    '& .MuiChip-icon': { color: '#4DB6AC' },
                  }}
                />
              </Box>

              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                Las preguntas aparecerán en <strong style={{ color: '#7986CB' }}>orden aleatorio</strong>.
                Selecciona tu respuesta y presiona <strong style={{ color: '#4DB6AC' }}>Verificar</strong> para
                saber si es correcta. Al finalizar verás tu puntaje total.
              </Typography>
            </CardContent>
          </Card>

          {/* Topics list */}
          <Card
            className="glass-card"
            sx={{
              mb: 4,
              textAlign: 'left',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1.5, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.7rem' }}>
                Temas incluidos
              </Typography>
              {[
                'Regulación Agente de Ventas',
                'Declaración de Salud y Suscripción',
                'Causales de Término de Contrato',
                'Obligaciones del Cotizante y la Isapre',
                'Declaración de Salud',
                'Condiciones Generales del Contrato',
                'Planes de Salud',
                'Cobertura, Arancel y Componentes',
                'Preexistencias, Restricciones y Topes',
                'CAEC, GES y Normativa',
              ].map((topic, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    py: 0.6,
                  }}
                >
                  <Box
                    sx={{
                      width: 22,
                      height: 22,
                      borderRadius: '6px',
                      bgcolor: 'rgba(92, 107, 192, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#7986CB', fontWeight: 700, fontSize: '0.65rem' }}>
                      {i + 1}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>
                    {topic}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Start Button */}
          <Button
            variant="contained"
            size="large"
            onClick={onStart}
            startIcon={<PlayArrowRoundedIcon />}
            sx={{
              background: 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 100%)',
              fontSize: '1.1rem',
              py: 1.8,
              px: 6,
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(92, 107, 192, 0.35)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #7986CB 0%, #5C6BC0 100%)',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 40px rgba(92, 107, 192, 0.45)',
              },
            }}
          >
            Iniciar Quiz
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
