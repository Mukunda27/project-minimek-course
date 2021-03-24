import { TAB_SELECTED } from "features/tab/tabsConstant";

export function selectTab(tabName) {
  return {
    type: TAB_SELECTED,
    payload: {
      tabName,
    },
  };
}
