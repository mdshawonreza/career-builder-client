import { useState } from "react";
import { Tab, TabList,  Tabs } from "react-tabs";
import TabsMenu from "./TabsMenu";
import { Link } from "react-router-dom";

const TabsJobs = ({allCategoriesJob}) => {

    console.log(allCategoriesJob)
    const [allJobs, setAllJobs] = useState(allCategoriesJob)

    const handleFilterJob = (cateItem) => {
        const updatedJobs = allCategoriesJob.filter((currentJob) => {
            return currentJob.jobCategory === cateItem
        })
        setAllJobs(updatedJobs)
    }
    return (
        <Tabs className=" mt-10">

           <TabsMenu
            
           handleFilterJob={handleFilterJob}
           allCategoriesJob={allCategoriesJob}
           setAllJobs={setAllJobs}

           ></TabsMenu>




            <div className=" mt-16 max-w-[340px] md:max-w-3xl lg:max-w-5xl   mx-auto grid
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {
                    allJobs.map((job) => {
                        const { _id, photo,userName ,jobTitle,jobPostingDate,applicationDeadline,salaryRange,jobApplicantsNumber} = job

                        return (
                            <div key={_id} className=" relative flex flex-col text-gray-700 bg-white shadow-md w-[340px] rounded-xl bg-clip-border">
                                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                    <img
                                        className="w-full h-full"
                                        src={photo}
                                        alt="img-blur-shadow"

                                    />
                                </div>
                                <div className="p-6">
                                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {jobTitle}
                                    </h5>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Published by {userName}
                                    </p>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Job Posting Date : {jobPostingDate}
                                    </p>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Application Deadline : {applicationDeadline}
                                    </p>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Salary range : {salaryRange}
                                    </p>
                                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                    Job Applicants Number : {jobApplicantsNumber}
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <Link to={`/details/${_id}`}>
                                    <button
                                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        View Details
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }

            </div>





        </Tabs>
    );
};

export default TabsJobs;