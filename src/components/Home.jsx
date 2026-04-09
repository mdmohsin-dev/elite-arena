import About from './About/About';
import Banner from './Banner/Banner';
import MembershipPlans from './MembershipPlans';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Review></Review>
            <MembershipPlans></MembershipPlans>
        </div>
    );
};

export default Home;