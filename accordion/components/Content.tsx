import React from "react";

const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p>
      {children}
    </p>
  );
};

export default Content;
