import React, { Component } from "react";
import TabBar from "./tabbar";

class TabBarcontainer extends Component {
  constructor(props) {
    super(props);
    const { tabs = [{ name: null }] } = props;
    const firstTab = tabs[0];
    this.state = {
      currentTab: firstTab.name,
    };
  }

  onTabClick = (name) => {
    this.setState({ currentTab: name });
  };

  render() {
    const { tabs, ...otherProps } = this.props;
    const { currentTab } = this.state;

    return (
      <TabBar
        {...otherProps}
        currentTab={currentTab}
        onTabClick={this.onTabClick}
        tabs={tabs}
      />
    );
  }
}

export default TabBarcontainer;
