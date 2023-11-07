import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TabsJobs from "../../components/TabsJobs";
import HelpLine from "../../components/HelpLine";

const Home = () => {
    const allCategoriesJob = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
                <TabsJobs allCategoriesJob={allCategoriesJob} ></TabsJobs>
                <HelpLine></HelpLine>
            </div>
        </div>
    );
};

export default Home;