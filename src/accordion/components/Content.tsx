import React from "react";

const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="accordion-content">
      {children}
    </div>
  );
};

export default Content;
