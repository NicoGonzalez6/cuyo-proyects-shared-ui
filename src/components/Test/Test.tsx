import React from "react";

export const TestComponent: React.FC<{ children: string }> = ({ children }) => {
  return (
    <p data-testid="TestComponent" className="cc-text-secondary-400">
      {children}
    </p>
  );
};
