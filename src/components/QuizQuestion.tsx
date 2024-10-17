import React from 'react';
import { Questions } from '../data/data';

type QuizQuestionProps = {
  question: Questions;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question }) => {
  return <p>{question.name}</p>;
};

export default QuizQuestion;
