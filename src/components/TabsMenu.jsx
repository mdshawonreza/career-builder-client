import { Tab, TabList } from "react-tabs";


const TabsMenu = ({handleFilterJob,setAllJobs,allCategoriesJob}) => {
    return (
        <>
         <TabList className="menu-tab flex justify-around bg-base-300 border-2 p-6 rounded-md flex-col md:flex-row gap-5 max-w-[300px] md:max-w-3xl lg:max-w-5xl mx-auto  ">
                <Tab className="btn bg-white  btn-outline hover:bg-[#192a60]" onClick={() => setAllJobs(allCategoriesJob)}>All jobs</Tab>

                <Tab className="btn bg-white btn-outline hover:bg-[#192a60] " onClick={() => handleFilterJob('On Site Job')}>On Site Job</Tab>

                <Tab className="btn bg-white btn-outline hover:bg-[#192a60]" onClick={() => handleFilterJob('Remote Job')}>Remote Job</Tab>

                <Tab className="btn bg-white btn-outline hover:bg-[#192a60]" onClick={() => handleFilterJob('Hybrid Job')}>Hybrid Job</Tab>

                <Tab className="btn bg-white btn-outline hover:bg-[#192a60]" onClick={() => handleFilterJob('Part Time')}>Part Time</Tab>

            </TabList>
            
        </>
    );
};

export default TabsMenu;