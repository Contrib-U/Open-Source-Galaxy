import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const Home = () => {
  return (
    <div className="container">
      Homepage
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>OPEN PROJECTS</Tab>
          <Tab>UPCOMING PROJECTS</Tab>
          <Tab>CLOSED PROJECTS</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Home;
