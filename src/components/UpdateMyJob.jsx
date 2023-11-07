import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyJob = () => {
    const job = useLoaderData()

    const {_id, jobTitle, userName, jobCategory, salaryRange, jobDescription, jobPostingDate, applicationDeadline, photo } = job

    const handleUpdateJob = event => {

        event.preventDefault();
        const form = event.target;

        const jobTitle = form.jobTitle.value;
        const userName = form.userName.value;
        const jobCategory = form.jobCategory.value;
        const salaryRange = form.salaryRange.value;
        const jobDescription = form.jobDescription.value;
        const jobPostingDate = form.jobPostingDate.value;
        const applicationDeadline = form.applicationDeadline.value;
        const jobApplicantsNumber = form.jobApplicantsNumber.value;
        const photo = form.photo.value;

        const updateJob = { jobTitle, userName, jobCategory, salaryRange, jobDescription, jobPostingDate, applicationDeadline, jobApplicantsNumber, photo };

        console.log(updateJob)
        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }


    console.log(job)
    return (
        <div className="bg-[#F4F3F0] max-w-6xl mx-auto p-14 md:p-24">
            <h2 className="text-center text-3xl font-bold mb-8" >Update a Job</h2>
            <form onSubmit={handleUpdateJob}>
                {/* form Job Title and User Name row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="jobTitle" defaultValue={jobTitle} placeholder="Enter Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="userName" defaultValue={userName} placeholder="Enter User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Job Category and Salary range row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="jobCategory" defaultValue={jobCategory} placeholder="Enter Job Category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:ml-4 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Salary range</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="salaryRange" defaultValue={salaryRange} placeholder="Enter Salary range" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Job Description and Job Posting Date */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="jobDescription" placeholder="Enter Job Description" defaultValue={jobDescription} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Posting Date</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="jobPostingDate" defaultValue={jobPostingDate} placeholder="Enter Job Posting Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Application Deadline and Job Applicants Number */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <label className="input-group">

                            <input type="date" name="applicationDeadline" defaultValue={applicationDeadline} placeholder="Enter Application Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:ml-4  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Job Applicants Number</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="jobApplicantsNumber" defaultValue="0" placeholder="Enter Job Applicants Number" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo URl row */}
                <div className="md:flex mb-6 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URl" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Update job" className="btn text-white btn-block bg-orange-600 hover:bg-orange-700" />
            </form>
        </div>
    );
};

export default UpdateMyJob;