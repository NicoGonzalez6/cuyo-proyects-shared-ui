import React from "react";
import { CcTabsProps } from "./CcTabs.types";
import { CcTab } from "../CcTab/CcTab";
import { CcTabsDefaultStyles } from "./CcTabs.styles";

export const CcTabs: React.FC<CcTabsProps> = ({ tabs, onClick }) => {
  return (
    <div data-testid="CcTabs" className={CcTabsDefaultStyles}>
      {tabs.map((tab, i) => {
        return (
          <CcTab
            label={tab.label}
            disabled={tab.disabled}
            icon={tab.icon}
            isActive={tab.isActive}
            notificationValue={tab.notificationValue}
            notification={tab.notification}
            onClick={() => onClick(i.toString())}
            key={i}
          />
        );
      })}
    </div>
  );
};
