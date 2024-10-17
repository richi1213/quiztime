import React, { useState } from 'react';

import QuizQuestion from './QuizQuestion';
import QuizOptions from './QuizOptions';
import NextButton from './NextButton';
import Results from './Results';
import { Quiz as QuizType, Variant } from '../data/data';

type QuizProps = {
  quiz: QuizType;
};

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleSelectVariant = (variant: Variant) => {
    if (variant.isCorrect) {
      setScore((prevScore) => prevScore + currentQuestion.score);
      setCorrectAnswers((prevCount) => prevCount + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <Results
        score={score}
        totalScore={quiz.questions.reduce((total, q) => total + q.score, 0)}
        correctAnswers={correctAnswers}
        onRestart={handleRestartQuiz}
      />
    );
  }

  return (
    <div>
      <QuizQuestion question={currentQuestion} />
      <QuizOptions
        variants={currentQuestion.variants}
        onSelect={handleSelectVariant}
      />
      <NextButton onClick={handleNextQuestion} />
    </div>
  );
};

export default Quiz;
