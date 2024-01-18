import React from "react";

export const TestComponent: React.FC = ({ text }: { text: string }) => {
  return (
    <button className="cc-bg-primary-500 cc-text-white cc-w-[200px] cc-rounded-md">
      {text}
    </button>
  );
};
