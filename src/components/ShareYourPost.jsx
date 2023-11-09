import { Link } from "react-router-dom";


const ShareYourPost = () => {
    return (
        <div>
            <div className="bg-[#373751] py-14 border-b-8 border-orange-500 ">
                <div className=" max-w-[380px] md:max-w-3xl lg:max-w-5xl  mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h2 className="text-3xl text-white font-bold  max-w-5xl mx-auto">
                        SHARE YOUR FEELING AFTER GETTING <br />JOB BY OUR COMPANY
                        </h2>
                        <p className="text-white mt-3">Maximize your job hunt success with our company! Share your post and harness the power <br /> of social connections for a better career. Leverage referrals and networking to secure your <br /> dream job. Join us now and unlock new opportunities on your career path.</p>
                    </div>
                    <div className="">
                        <Link to="/feedback">
                        <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg ">Feedback</button>
                        </Link>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default ShareYourPost;