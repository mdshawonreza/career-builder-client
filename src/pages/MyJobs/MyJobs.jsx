import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyJobRow from "./MyJobRow";
import Swal from "sweetalert2";

const MyJobs = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)

    const [jobs, setJobs] = useState([])


    const url = `http://localhost:5000/jobs?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url])
    
    const handleDelete=_id=>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if (result.isConfirmed){
                fetch(`http://localhost:5000/jobs/${_id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if (data.deletedCount>0) {
                        Swal.fire(
                            'Deleted!',
                            'Your circular has been deleted.',
                            'success'
                        )
                        const remaining=jobs.filter(job=>job._id !==_id)
                        setJobs(remaining)
                    }
                })
            }
        })
    }

    return (
        <div className="max-w-5xl mx-auto">
            <div>
                <div className="text-center my-12"><h2 className="text-4xl font-bold pb-4 border-b-2 border-orange-500">My jobs</h2></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm md:text-lg font-semibold">
                                <th>
                                    
                                </th>
                                <th>Job</th>
                                {/* <th>Published Person</th> */}
                                <th>Apply Deadline</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                jobs.map(job => <MyJobRow key={job._id} handleDelete={handleDelete} job={job}></MyJobRow>)
                            }



                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;