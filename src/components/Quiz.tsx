import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizOptions from './QuizOptions';
import NextButton from './NextButton';
import { Quiz as QuizType, Variant } from '../data/data';

type QuizProps = {
  quiz: QuizType;
};

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // State to track the score

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleSelectVariant = (variant: Variant) => {
    // Increment score if the selected variant is correct
    if (variant.isCorrect) {
      setScore((prevScore) => prevScore + currentQuestion.score);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(
        `Quiz completed! Your total score is: ${score} / ${quiz.questions.reduce(
          (total, q) => total + q.score,
          0
        )}`
      );
    }
  };

  return (
    <div>
      {/* <QuizHeader name={quiz.name} /> */}
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
