import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TabsJobs from "../../components/TabsJobs";
import HelpLine from "../../components/HelpLine";
import ShareYourPost from "../../components/ShareYourPost";

const Home = () => {
    const allCategoriesJob = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
                <div >
                <TabsJobs allCategoriesJob={allCategoriesJob} ></TabsJobs>
                </div>
                <ShareYourPost></ShareYourPost>
                <HelpLine></HelpLine>
            </div>
        </div>
    );
};

export default Home;