import React from 'react';
import iconCaret from '../../../images/icons/caret.svg';

export type SummaryProps = React.DetailsHTMLAttributes<HTMLSummaryElement> & React.PropsWithChildren;

const Summary: React.FC<SummaryProps> = ({ children, ...htmlSummaryProps }) => {
  return (
    <summary {...htmlSummaryProps}>
      <span className="arrow">
        <img src={iconCaret} alt="Arrow Icon" className="arrow-icon" />
      </span>
      {children}
    </summary>
  );
};

export default Summary;
