import { useLoaderData } from "react-router-dom";
import AllJobCard from "./AllJobCard";
import { useEffect } from "react";
import { useState } from "react";


const AllJobs = () => {

    const [allJobs, setAllJobs] = useState([])
    const [search, setSearch] = useState("")
    console.log(search)

    useEffect(() => {
        fetch('https://career-builder-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])


    return (
        <div>



            <div className="max-w-5xl mx-auto">

                <div className="my-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-3">Find Your <span className="text-orange-500">Next</span> Job</h2>
                        <p className="text-gray-600 text-lg mb-6">Discover diverse job listings and opportunities tailored to your skills and <br /> career aspirations. Find your future.</p>
                    </div>
                    <div className="w-1/2 mx-auto mb-10">
                        <div className="form-control ">
                            <div className="input-group">
                                <input onChange={(e) => { setSearch(e.target.value) }} type="text" placeholder="Search…" className="input input-bordered text-orange-600 font-medium w-full" />
                                <button className="btn btn-square bg-yellow-400 hover:bg-yellow-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8">
                    <div className="border-[1px] border-orange-500 my-6"></div>
                    </div>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-xs md:text-lg font-semibold">
                                    {/* <th>

                                    </th> */}
                                    <th>Published</th>
                                    <th>Job Title</th>
                                    <th>Posting Date</th>
                                    <th>Deadline</th>
                                    <th>Salary </th>

                                </tr>
                            </thead>
                            <tbody>
                                {

                                }
                                {/* row 1 */}
                                {
                                    allJobs.filter((item) => {
                                        return search.toLowerCase() === ""
                                            ? item
                                            : item.jobCategory.toLowerCase().includes(search)
                                    }).map(allJob => <AllJobCard key={allJob._id} allJob={allJob}></AllJobCard>)
                                }



                            </tbody>



                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllJobs;


