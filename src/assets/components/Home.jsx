import Hero from "./Hero";
import Searchresults from "./Searchresults";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChoseUs";
import PopularDeals from "./PopularDeals";
import Download from "./Download";
import Footer from "./Footer";
const Home = () => {

    function bookNow() {
        alert('Are you sure you want to book this car?')
    }
    return ( 
        <div>
            <Hero />
            <Searchresults />
            <HowItWorks />
            <WhyChooseUs />
            <PopularDeals bookNow={bookNow}/>
            <Download />
            <Footer />
        </div>
     );
}
 
export default Home;