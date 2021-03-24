import React from "react";
import { Menu } from "semantic-ui-react";
import ToggleDisplay from "../../common/componnts/toggle-display";
import Tab from "./tab";

import { connect } from "react-redux";
import { selectCurrentTab } from "features/tab/tabsSelector";
import { selectTab } from "features/tab/tabsAction";

const mapState = (state) => {
  console.log(state);
  const currentTab = selectCurrentTab(state);
  return { currentTab };
};

const actions = { onTabClick: selectTab };

export const TabBar = (props) => {
  const { tabs, currentTab, onTabClick, ...otherProps } = props;

  console.log(currentTab);
  const tabItems = tabs.map((tabInfo) => {
    const { name, label } = tabInfo;

    return (
      <Tab
        key={name}
        name={name}
        label={label}
        active={currentTab === name}
        onClick={(tabName) => {
          onTabClick(tabName);
        }}
      />
    );
  });

  const tabPanels = tabs.map((tabInfo) => {
    const { name, component: TabComponent } = tabInfo;

    return (
      <ToggleDisplay show={name === currentTab}>
        <TabComponent />
      </ToggleDisplay>
    );
  });

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
    </div>
  );
};

export default connect(mapState, actions)(TabBar);
