import React from "react";
import iconsDocs from "@cuyo-proyects/shared-assets/dist/icons/codepoints.json";

const iconsArray = Object.keys(iconsDocs);

export const CcIcons = () => {
  return (
    <div className="cc-flex cc-flex-wrap cc-gap-5" data-testid="CcIcons">
      {iconsArray.map((icon, i) => {
        return (
          <span
            key={i}
            className="cc-w-[80px] cc-h-[80px] cc-bg-neutral-100 cc-flex cc-justify-center cc-items-center cc-rounded-lg cc-shadow-lg cc-cursor-pointer hover:cc-scale-105"
            onClick={() => navigator.clipboard.writeText(`icon-${icon}`)}
          >
            <i className={`icon-${icon} cc-text-3xl`} />
          </span>
        );
      })}
    </div>
  );
};