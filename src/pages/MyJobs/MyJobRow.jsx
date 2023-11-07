import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const MyJobRow = ({ job, handleDelete }) => {
    const { _id, jobTitle, userName,  photo, applicationDeadline } = job



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline hover:bg-[#1c306f] hover:text-orange-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
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
            </td>
            <td>
                <h2 className="text-lg">{userName}</h2>
            </td>
            <td className="font-semibold">{applicationDeadline}</td>
            <th>
                <Link to={`/update/${_id}`}>
                    <button className="btn btn-outline hover:bg-[#1c306f] ">Update</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyJobRow;

MyJobRow.propTypes={
    job:PropTypes.object,
    handleDelete:PropTypes.func
}