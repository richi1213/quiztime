import React from 'react';

type NextButtonProps = {
  onClick: () => void;
};

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Next Question</button>;
};

export default NextButton;
