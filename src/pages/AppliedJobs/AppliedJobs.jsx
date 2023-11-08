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
         <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                appliedJobs.map(appliedJob=><AppliedJobCard key={appliedJob._id} appliedJob={appliedJob} ></AppliedJobCard>)
            }
        </div>
       </div>
    );
};

export default AppliedJobs;