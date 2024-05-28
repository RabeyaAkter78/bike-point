import Banner from "../../Components/Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import AllProduct from "../AllProduct/AllProduct";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <AllProduct></AllProduct>
         <AboutUs></AboutUs>
         <ContactUs></ContactUs>
        </div>
    );
};

export default Home;