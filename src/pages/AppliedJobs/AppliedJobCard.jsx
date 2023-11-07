

const AppliedJobCard = ({ appliedJob }) => {
    const { name, email, resumeLink ,jobTitle} = appliedJob

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Applied Job: {jobTitle}</p>
                <p>Email: {email}</p>
                <p>Resume Link: {resumeLink}</p>
            </div>
        </div>
    );
};

export default AppliedJobCard;