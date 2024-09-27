import HeroSection from "../components/HomePage/HeroSection";
import MapSection from "../components/HomePage/MapSection";
import ReviewSlider from "../components/HomePage/ReviewSlider";
import ServicesSection from "../components/HomePage/ServicesSection";

const Home = () => {

    return (
        <>
            <HeroSection />
            <ReviewSlider />
            <ServicesSection />
            <MapSection />
        </>
    );
};

export default Home;