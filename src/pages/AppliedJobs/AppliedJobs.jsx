import { useContext, useEffect, useState } from "react";
import AppliedJobCard from "./AppliedJobCard";
import { AuthContext } from "../../providers/AuthProvider";


const AppliedJobs = () => {
    
    const {user}=useContext(AuthContext)
    console.log(user.email)


    const [appliedJobs,setAppliedJobs]=useState([])

    const url =`https://career-builder-server.vercel.app/appliedJobs?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAppliedJobs(data))
    },[url])


    return (
       <div className="max-w-[340px] md:max-w-3xl lg:max-w-4xl mx-auto">
             <div className="text-center max-w-[200px] md:max-w-2xl mx-auto my-12"><h2 className="text-2xl md:text-4xl font-bold pb-4 border-b-2 border-orange-500">My Applied Jobs</h2></div>
         <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                appliedJobs.map(appliedJob=><AppliedJobCard key={appliedJob._id} appliedJob={appliedJob} ></AppliedJobCard>)
            }
        </div>
       </div>
    );
};

export default AppliedJobs;