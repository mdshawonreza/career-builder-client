
import { Link } from 'react-router-dom';
import { Tab } from 'react-tabs';
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const {jobCategory}=category
    return (
        <div>
            <Link to={`/categoryJobs/${jobCategory}`}>
                <Tab key={category._id} className="btn ">{category.jobCategory}</Tab>
            </Link>
        </div>
    );
};

Category.propTypes={
    category:PropTypes.object
}

export default Category;