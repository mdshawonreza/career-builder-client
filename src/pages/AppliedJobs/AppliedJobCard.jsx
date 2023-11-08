

const AppliedJobCard = ({ appliedJob }) => {
    const { name, email, resumeLink ,jobTitle} = appliedJob

    return (
        <div className="card w-[350px] bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-bold">Applied Job:</span> <span className="text-orange-500 font-semibold">{jobTitle}</span></p>
                <p><span className="font-bold">Email:</span> <span className="text-gray-600 font-semibold">{email}</span></p>
                <p><span className="font-bold">Resume Link:</span> <span className="text-gray-600 font-semibold">{resumeLink}</span></p>
            </div>
        </div>
    );
};

export default AppliedJobCard;