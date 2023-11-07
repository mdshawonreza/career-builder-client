import { Tab, TabList } from "react-tabs";


const TabsMenu = ({handleFilterJob,setAllJobs,allCategoriesJob}) => {
    return (
        <>
         <TabList className="menu-tab flex justify-around ">
                <Tab className="btn  btn-outline" onClick={() => setAllJobs(allCategoriesJob)}>All jobs</Tab>

                <Tab className="btn  btn-outline " onClick={() => handleFilterJob('On Site Job')}>On Site Job</Tab>

                <Tab className="btn  btn-outline" onClick={() => handleFilterJob('Remote Job')}>Remote Job</Tab>

                <Tab className="btn  btn-outline" onClick={() => handleFilterJob('Hybrid Job')}>Hybrid Job</Tab>

                <Tab className="btn  btn-outline" onClick={() => handleFilterJob('Part Time')}>Part Time</Tab>

            </TabList>
            
        </>
    );
};

export default TabsMenu;