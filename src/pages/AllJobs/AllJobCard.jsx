import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const AllJobCard = ({ allJob }) => {
    const { _id, jobTitle, userName,jobPostingDate, applicationDeadline,salaryRange } = allJob
    return (
        <tr>
            {/* <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th> */}
            {/* <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 h-24">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{jobTitle}</div>

                    </div>
                </div>
            </td> */}
            <td>
                <h2 className="text-lg font-semibold">{userName}</h2>
            </td>
            <td>
                <h2 className="text-base font-semibold">{jobTitle}</h2>
            </td>
            <td>
                <h2 className="text-base font-semibold">{jobPostingDate}</h2>
            </td>
            <td className="text-base font-semibold text-orange-500">{applicationDeadline}</td>
            <td className=" text-base font-semibold">$ {salaryRange}</td>
            <th>
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-ghost btn-outline hover:bg-[#121f4a] ">Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllJobCard;
AllJobCard.propTypes = {
    allJob: PropTypes.object
}