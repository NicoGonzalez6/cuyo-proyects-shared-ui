import React from "react";

export const TestComponent: React.FC = ({ children }: { children: string }) => {
  return <p className="cc-text-secondary-400">{children}</p>;
};
