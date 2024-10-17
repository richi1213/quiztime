import React from 'react';
import { Variant } from '../data/data';

type QuizOptionsProps = {
  variants: Variant[];
  onSelect: (variant: Variant) => void;
};

const QuizOptions: React.FC<QuizOptionsProps> = ({ variants, onSelect }) => {
  return (
    <div>
      {variants.map((variant) => (
        <button key={variant.id} onClick={() => onSelect(variant)}>
          {variant.name}
        </button>
      ))}
    </div>
  );
};

export default QuizOptions;
