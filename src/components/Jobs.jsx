import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Jobs = () => {
    return (
        <Tabs>
        <TabList className="flex justify-around ">
          <Tab className="btn ">Title 1</Tab>
          <Tab className="btn ">Title 2</Tab>
          <Tab className="btn ">Title 3</Tab>
          <Tab className="btn ">Title 4</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    );
};

export default Jobs;