import React from 'react';

type ResultsProps = {
  score: number;
  totalScore: number;
  correctAnswers: number;
  onRestart: () => void;
};

const Results: React.FC<ResultsProps> = ({
  score,
  totalScore,
  correctAnswers,
  onRestart,
}) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Score Gained: {score} / {totalScore}
      </p>
      <p>Correct Answers: {correctAnswers}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Results;
