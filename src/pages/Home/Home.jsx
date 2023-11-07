import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";

import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Home = () => {
    const allCategoriesJob = useLoaderData()
    console.log(allCategoriesJob)
    const [allJobs, setAllJobs] = useState(allCategoriesJob)

    const handleFilterJob = (cateItem) => {
        const updatedJobs = allCategoriesJob.filter((currentJob) => {
            return currentJob.jobCategory === cateItem
        })
        setAllJobs(updatedJobs)
    }
    return (
        <div>
            <div>
                <Banner></Banner>
                <Tabs className="max-w-[580px] md:max-w-3xl lg:max-w-5xl mx-auto mt-10">

                    <TabList className="menu-tab flex justify-around ">
                        <Tab className="btn  btn-outline" onClick={() => setAllJobs(allCategoriesJob)}>All jobs</Tab>

                        <Tab className="btn  btn-outline " onClick={() => handleFilterJob('On Site Job')}>On Site Job</Tab>

                        <Tab className="btn  btn-outline" onClick={() => handleFilterJob('Remote Job')}>Remote Job</Tab>

                        <Tab className="btn  btn-outline" onClick={() => handleFilterJob('Hybrid Job')}>Hybrid Job</Tab>

                        <Tab className="btn  btn-outline" onClick={() => handleFilterJob('Part Time')}>Part Time</Tab>

                    </TabList>




                    <div className="max-w-[580px] md:max-w3xl mt-10  lg:max-w-6xl mx-auto grid grid-cols-3 gap-10">
                        {
                            allJobs.map((job) => {
                                const { _id, photo } = job

                                return (
                                    <div key={_id} className="mr-5 relative flex flex-col text-gray-700 bg-white shadow-md w-[340px] rounded-xl bg-clip-border">
                                        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                            <img
                                                className="w-full h-full"
                                                src={photo}
                                                alt="img-blur-shadow"

                                            />
                                        </div>
                                        <div className="p-6">
                                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                                UI/UX Review Check
                                            </h5>
                                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                                The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                                and near to "Naviglio" where you can enjoy the main night life in
                                                Barcelona.
                                            </p>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <button
                                                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                type="button"
                                                data-ripple-light="true"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>





                </Tabs>
            </div>
        </div>
    );
};

export default Home;