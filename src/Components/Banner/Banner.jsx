import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden mb-36">
            <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
                controls
            >
                <source src="/public/banner.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
                <h1 className="text-4xl md:text-6xl font-bold">Ride Into Adventure</h1>
                <p className="mt-4 text-xl md:text-2xl"> Welcome to Bike Point <br />Explore our premium range of bikes and gear up for your next adventure.</p>

                <Link to={"/allProducts"}>
                    <button className="mt-6 px-8 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition duration-300">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;