import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
const { theme } = resolveConfig(tailwindConfig);

const foundationColors = Object.values(theme.colors);

const extratColor = (str) => {
  const match = str.match(/--cc-color_(\w+)/);
  if (match && match[1]) {
    return match[1].replace(/_/g, "-");
  } else {
    return null;
  }
};

export const Colors: React.FC = () => (
  <div data-testid="Colors" className="cc-flex cc-flex-wrap cc-gap-8">
    {foundationColors.map((color, i) => {
      return (
        <div key={i} className="cc-flex cc-flex-wrap cc-gap-5">
          {Object.keys(color).length == 11 &&
            Object.keys(color).map((currentColor) => {
              return (
                <div className="cc-flex cc-flex-col cc-items-center cc-gap-2">
                  <div
                    className="cc-h-[80px] cc-w-[80px] cc-flex cc-justify-center cc-items-center cc-rounded-md cc-shadow-md"
                    style={{ background: color[currentColor] }}
                  />
                  <p className="cc-text-sm">
                    {`${extratColor(color[currentColor])}`}
                  </p>
                </div>
              );
            })}
        </div>
      );
    })}
  </div>
);
