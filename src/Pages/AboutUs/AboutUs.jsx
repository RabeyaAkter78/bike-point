import { FaAward, FaRegSmile, FaUserAlt, FaUserShield } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";



const AboutUs = () => {
    return (
        <div className="">
            <SectionTitle
                heading={"About us"}
                subHeading={""}
            >
            </SectionTitle>

            <div className="hero min-h-screen bg-orange-500 my-20" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Experience the Joy of Biking with Bike Point</h1>
                        <p className="mb-5">Welcome to Bike Point, your ultimate destination for all things biking. At Bike Point, we are passionate about providing high-quality bicycles and accessories to enthusiasts and professionals alike. Our journey began with a simple love for biking, and over the years, we have grown into a trusted name in the cycling community. We offer a wide range of bikes, from mountain and road bikes to electric and hybrid models, ensuring that every rider finds their perfect match. Our dedicated team is committed to exceptional customer service, guiding you through every step of your biking adventure. Whether you are a seasoned cyclist or just starting, Bike Point is here to support your journey with the best products and expert advice. Ride with us and experience the joy and freedom that biking brings.

                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;