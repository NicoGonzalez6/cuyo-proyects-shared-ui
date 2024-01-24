import { CCTabProps } from "../CcTab/CcTab.types";

export interface CcTabsProps {
  tabs: CCTabProps[];
  onClick: (id?: string) => void;
}
