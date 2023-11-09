import React from 'react';
import { useRef } from 'react';

const Feedback = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z9grx78', 'template_uchokvb', form.current, 'bX4WvkEhlrCHLW83Q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className=' '>
            <div className='bg-base-300 rounded-md max-w-5xl mx-auto my-16 p-16'>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-[500px] rounded-xl bg-clip-border max-w-5xl mx-auto">
                    <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#121f4a] to-[#2d51c7] bg-clip-border shadow-[#516196]">
                        <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                            Send Your Feedback
                        </h3>
                    </div>
                    <form ref={form} onSubmit={sendEmail} >
                        <div className="flex flex-col gap-4 p-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text" name="user_name"
                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#121f4a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#121f4a] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#121f4a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#121f4a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your Name
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="email" name="user_email"
                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#121f4a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#121f4a] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#121f4a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#121f4a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your Email
                                </label>
                            </div>
                            <div className="relative h-40 w-full min-w-[200px]">
                                <textarea
                                    name="message"
                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#121f4a] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#121f4a] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#121f4a] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#121f4a] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Your Message
                                </label>
                            </div>

                        </div>
                        <div className="p-6 pt-0">
                            <input
                                className="block w-full select-none rounded-lg bg-gradient-to-tr from-[#121f4a] to-[#3259d7] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#47578d] transition-all hover:shadow-lg hover:shadow-[#5f78c9] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                                value="Send"
                            >

                            </input>

                        </div>
                    </form>
                </div>
            
            </div>
        </div>
    );
};

export default Feedback;