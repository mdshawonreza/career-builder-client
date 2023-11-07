import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TabsJobs from "../../components/TabsJobs";

const Home = () => {
    const allCategoriesJob = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
                <TabsJobs allCategoriesJob={allCategoriesJob} ></TabsJobs>
            </div>
        </div>
    );
};

export default Home;