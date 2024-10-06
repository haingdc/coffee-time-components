import React from "react";

const Summary: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <summary>
      {children}
    </summary>
  );
};

export default Summary;
