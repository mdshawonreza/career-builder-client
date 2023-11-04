import Banner from "../../components/Banner";
import Jobs from "../../components/Jobs";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <div className="max-w-[580px] md:max-w-3xl lg:max-w-5xl mx-auto">
                    <Jobs></Jobs>
                </div>
            </div>
        </div>
    );
};

export default Home;