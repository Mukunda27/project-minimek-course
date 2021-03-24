import React from "react";

import { Header, Container } from "semantic-ui-react";
import "./App.css";

import TabBar from "features/tab/tabbar";
import UnitInfo from "features/unitInfo/unitInfo";
import Pilots from "features/Pilots/Pilots";
import Mechs from "features/mechs/mechs";
import UnitOrganization from "features/unitOrganization/unitOrganization";

function App() {
  const tabs = [
    { name: "unitInfo", label: "Unit Info", component: UnitInfo },
    { name: "pilots", label: "Pilots", component: Pilots },
    { name: "mechs", label: "Mechs", component: Mechs },
    {
      name: "unitOrganization",
      label: "Unit Organization",
      component: UnitOrganization,
    },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">
          Project Mini-Mek
        </Header>
      </div>
      <Container>
        <TabBar tabs={tabs} size="massive" />
      </Container>
    </div>
  );
}

export default App;
