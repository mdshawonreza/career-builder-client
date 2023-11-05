import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const JobCards = () => {
    const [jobs, setJobs] = useState([])

    const params = useParams()
    console.log(params)

    const url = `http://localhost:5000/jobs?jobCategory=${params.jobCategory}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url])
    return (
        <div>
            {
                jobs.map(job=><h2 key={job._id}>{job.jobTitle}</h2>)
            }

        </div>
    );
};

export default JobCards;