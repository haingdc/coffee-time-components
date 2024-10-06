import React from "react";
import './accordion.css';

export type DetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement> & React.PropsWithChildren;

const Details: React.FC<DetailsProps> = ({ children, ...rest }) => {
  return (
    <details {...rest} className="accordion">
      {children}
    </details>
  );
};

export default Details;