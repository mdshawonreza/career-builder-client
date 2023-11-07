import { useLoaderData } from "react-router-dom";
import AllJobCard from "./AllJobCard";
import { useEffect } from "react";
import { useState } from "react";


const AllJobs = () => {

    const[allJobs,setAllJobs]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setAllJobs(data))
    },[])
    
   
    return (
        <div>


            <div className="max-w-5xl mx-auto">
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
                                {/* row 1 */}
                                {
                                    allJobs.map(allJob => <AllJobCard key={allJob._id} allJob={allJob}></AllJobCard>)
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