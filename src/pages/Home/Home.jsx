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
                <TabsJobs allCategoriesJob={allCategoriesJob} ></TabsJobs>
                <ShareYourPost></ShareYourPost>
                <HelpLine></HelpLine>
            </div>
        </div>
    );
};

export default Home;