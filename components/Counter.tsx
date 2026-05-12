
import React from 'react';

interface CounterProps {
  value: string;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  return (
    <div className="select-none">
      {value}
    </div>
  );
};

export default Counter;
