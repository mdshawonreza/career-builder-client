import { useLoaderData } from "react-router-dom";
import AllJobCard from "./AllJobCard";
import { useEffect } from "react";
import { useState } from "react";


const AllJobs = () => {

    const [allJobs, setAllJobs] = useState([])
    const [search,setSearch]=useState("")
    console.log(search)

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])


    return (
        <div>



            <div className="max-w-5xl mx-auto">
                <div className="form-control ">
                    <div className="input-group">
                        <input onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder="Search…" className="input input-bordered text-orange-600 font-medium w-full" />
                        <button className="btn btn-square bg-yellow-400 hover:bg-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="my-8">
                    <h2>All Jobs : {allJobs.length}</h2>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-lg font-semibold">
                                    {/* <th>

                                    </th> */}
                                    <th>Published Person</th>
                                    <th>Job Title</th>
                                    <th>Job Posting Date</th>
                                    <th>Application Deadline</th>
                                    <th>Salary range</th>

                                </tr>
                            </thead>
                            <tbody>
                                {

                                }
                                {/* row 1 */}
                                {
                                    allJobs.filter((item)=>{
                                        return search.toLowerCase()===""
                                        ?item
                                        :item.jobCategory.toLowerCase().includes(search)
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