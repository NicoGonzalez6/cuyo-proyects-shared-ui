import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);

const foundationFonts = Object.keys(theme.fontSize);

export const Fonts = () => {
  return (
    <div className="cc-flex cc-items-center cc-gap-5 cc-flex-wrap">
      {foundationFonts.map((key) => {
        const fontSize = theme.fontSize[key][0];
        const lineHeight = theme.fontSize[key][10];
        return (
          <div className="cc-w-[120px] cc-h-[80px] cc-bg-primary-500 cc-text-white cc-rounded-lg cc-flex cc-items-center cc-justify-center cc-p-4">
            <p
              className="cc-flex cc-items-center cc-justify-center"
              style={{ fontSize: fontSize, lineHeight: lineHeight }}
            >
              {key}
            </p>
          </div>
        );
      })}
    </div>
  );
};
