'use client';

import { useState, useMemo, useCallback } from 'react';
import questions from '@/data/questions';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const [screen, setScreen] = useState('welcome'); // 'welcome' | 'quiz' | 'results'
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: { selected, correct, verified, skipped } }
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const startQuiz = useCallback(({ mode, tema, limit }) => {
    let pool = [...questions];

    if (mode === 'tema' && tema) {
      pool = pool.filter((q) => q.tema === tema);
    }

    let shuffled = shuffleArray(pool);

    if (limit && shuffled.length > limit) {
      shuffled = shuffled.slice(0, limit);
    }

    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setSelectedOption(null);
    setIsVerified(false);
    setScreen('quiz');
  }, []);

  const handleSelectOption = useCallback(
    (optionIndex) => {
      if (!isVerified) {
        setSelectedOption(optionIndex);
      }
    },
    [isVerified]
  );

  const handleVerify = useCallback(() => {
    if (selectedOption === null) return;
    const currentQuestion = shuffledQuestions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correctIndex;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selected: selectedOption,
        correctIndex: currentQuestion.correctIndex,
        correct: isCorrect,
        verified: true,
        skipped: false,
      },
    }));
    setIsVerified(true);
  }, [selectedOption, shuffledQuestions, currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsVerified(false);
    } else {
      setScreen('results');
    }
  }, [currentIndex, shuffledQuestions.length]);

  const handleSkip = useCallback(() => {
    const currentQuestion = shuffledQuestions[currentIndex];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selected: null,
        correctIndex: currentQuestion.correctIndex,
        correct: false,
        verified: true,
        skipped: true,
      },
    }));

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsVerified(false);
    } else {
      setScreen('results');
    }
  }, [currentIndex, shuffledQuestions]);

  const handleRestart = useCallback(() => {
    setScreen('welcome');
    setShuffledQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setSelectedOption(null);
    setIsVerified(false);
  }, []);

  const handleRetryWrong = useCallback(() => {
    const wrongIds = Object.entries(answers)
      .filter(([_, a]) => !a.correct)
      .map(([id]) => parseInt(id));

    const wrongQuestions = questions.filter((q) => wrongIds.includes(q.id));
    const shuffled = shuffleArray(wrongQuestions);

    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setSelectedOption(null);
    setIsVerified(false);
    setScreen('quiz');
  }, [answers]);

  const stats = useMemo(() => {
    const entries = Object.values(answers);
    const correct = entries.filter((a) => a.correct).length;
    const wrong = entries.filter((a) => !a.correct && !a.skipped).length;
    const skipped = entries.filter((a) => a.skipped).length;
    return { correct, wrong, skipped, total: entries.length };
  }, [answers]);

  return (
    <div>
      {screen === 'welcome' && (
        <WelcomeScreen onStart={startQuiz} totalQuestions={questions.length} />
      )}

      {screen === 'quiz' && shuffledQuestions.length > 0 && (
        <QuizScreen
          question={shuffledQuestions[currentIndex]}
          currentIndex={currentIndex}
          totalQuestions={shuffledQuestions.length}
          selectedOption={selectedOption}
          isVerified={isVerified}
          onSelectOption={handleSelectOption}
          onVerify={handleVerify}
          onNext={handleNext}
          onSkip={handleSkip}
          stats={stats}
          onExit={handleRestart}
        />
      )}

      {screen === 'results' && (
        <ResultsScreen
          answers={answers}
          questions={questions}
          shuffledQuestions={shuffledQuestions}
          stats={stats}
          onRestart={handleRestart}
          onRetryWrong={handleRetryWrong}
        />
      )}
    </div>
  );
}
