import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from "@material-tailwind/react";
import Swal from "sweetalert2";




const DetailsJob = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);



    const { user } = useContext(AuthContext)



    const job = useLoaderData([])
    console.log(job)
    const { photo, jobTitle, jobDescription, salaryRange, jobApplicantsNumber } = job

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value;
        const email = form.email.value;
        const resumeLink = form.resumeLink.value;

        const appliedPersonInfo = {
            name, email, resumeLink ,jobTitle
        }

        console.log(appliedPersonInfo)

        fetch('http://localhost:5000/appliedJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedPersonInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Applied successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                   
                }
            })
    }


    return (
        <div className=" flex justify-center items-center  my-8" >
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-[70%]">
                <div className=" flex justify-center relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        className="w-full rounded-t-lg"
                        src={photo}
                        alt="ui/ux review check"
                    />


                </div>

                <div className="p-5">
                    <div>
                        <h4 className="block border-b-2 border-slate-600 pb-2 text-pink-500  font-sans text-3xl font-bold leading-snug tracking-normal antialiased">
                            {jobTitle}
                        </h4>
                    </div>
                    <p className="mt-3 block font-sans text-xl font-semibold  leading-relaxed text-gray-700 antialiased">
                        {jobDescription}
                    </p>

                    <p className="mt-3" > <span className='text-xl  font-bold'>Salary Range:</span> <span className='text-lg font-bold text-zinc-500'> $ <span className="text-black">{salaryRange}</span> </span> </p>

                    <p className="mt-3 text-xl  font-bold">Number of Applicants: {jobApplicantsNumber}</p>

                    <button onClick={handleOpen} className="btn btn-block text-base btn-outline mt-3 mb-2" >Apply </button>



                    <Dialog
                        size="xs"
                        open={open}
                        handler={handleOpen}
                        className="bg-transparent shadow-none"
                    >
                        <Card className="mx-auto w-full max-w-[24rem] p-8 ">


                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <Typography className="-mb-2" variant="h6">
                                    Your Name
                                </Typography>
                                <Input name="name" label="Name" size="lg" defaultValue={user.displayName} />
                                <Typography className="-mb-2" variant="h6">
                                    Your Email
                                </Typography>
                                <Input name="email" label="Email" size="lg" defaultValue={user.email} />
                                <Typography className="-mb-2" variant="h6">
                                    Resume link
                                </Typography>
                                <Input name="resumeLink" label="resume link" size="lg" />



                                <CardFooter className="pt-0">
                                    <button onClick={handleOpen} className="btn btn-block btn-outline">Submit</button>
                                </CardFooter>
                            </form>




                        </Card>
                    </Dialog>
                    {/* <button className="btn btn-block text-base btn-outline mt-3 mb-2" onClick={() => document.getElementById('my_modal_5').showModal()}>Apply </button> */}

                    {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div className=""  >


                                <form  onSubmit={handleSubmit}  >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base font-medium">Name</span>
                                        </label>
                                        <input type="text" name="name" defaultValue={user.displayName} placeholder="Your name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium text-base">Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" defaultValue={user.email} name="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium text-base">Resume link</span>
                                        </label>
                                        <input type="text" placeholder="resume link" name="resumeLink" className="input input-bordered" />
                                    </div>

                                    

                                    <form method="dialog">
                                        
                                        <button className="btn btn-block mt-6 btn-outline ">Submit</button>
                                    </form>



                                </form>

                                <div className="modal-action">
                                    
                                </div>




                            </div>


                        </div>
                    </dialog> */}
                </div>

            </div>
        </div>
    );
};

export default DetailsJob;