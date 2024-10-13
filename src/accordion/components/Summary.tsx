import React from 'react';
import iconCaret from '../../../images/icons/caret.svg';

const Summary: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <summary>
      <span className="arrow">
        <img src={iconCaret} alt="Arrow Icon" className="arrow-icon" />
      </span>
      {children}
    </summary>
  );
};

export default Summary;
