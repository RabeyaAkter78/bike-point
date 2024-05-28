import { FaLocationArrow, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { useRef } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const ContactUs = () => {
    const form = useRef();
    

    return (
        <div className="">
            <SectionTitle
                heading={"Contact us"}
                SubHeading={"Feel free to reach out to us with any questions, inquiries, or to schedule a visit. We would love to hear from you!"}
            ></SectionTitle>

            <div className="flex gap-14 min-h-screen items-center justify-center  my-14 bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-100">
                        <form ref={form}  className="card-body">
                            <h4 className="font-medium text-2xl">We are just a click away! feel free to write us.</h4>
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" name="from_name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Your Email" name="user_email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Phone Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <textarea className=" border-2 p-2" placeholder="Write Message" name="message" id="" cols="10" rows="5"></textarea>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-orange-500 hover:bg-orange-700 text-white mt-3">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* indicator */}
                    <div className="flex flex-col gap-8 mr-8 ">
                        <div className="indicator mb-8 bg-orange-100">
                            <div className="indicator-item indicator-start">
                                <button className="btn bg-orange-500 hover:bg-orange-700 text-white"><FaPhoneAlt></FaPhoneAlt></button>
                            </div>
                            <div className="card border shadow-lg shadow-black w-96">
                                <div className="card-body">
                                    <h2 className="card-title ">Tell Us</h2>
                                    <p>01234567890</p>

                                </div>
                            </div>
                        </div>
                        <div className="indicator mb-8 bg-orange-100">
                            <div className="indicator-item indicator-start">
                                <button className=" btn bg-orange-500 hover:bg-orange-700 text-white"><FaMailBulk></FaMailBulk></button>
                            </div>
                            <div className="card border shadow-lg shadow-black w-96">
                                <div className="card-body">
                                    <h2 className="card-title ">Drop Mail</h2>
                                    <p>bikepoint@example.com</p>

                                </div>
                            </div>
                        </div>
                        <div className="indicator mb-8 bg-orange-100">
                            <div className="indicator-item indicator-start">
                                <button className=" btn bg-orange-500 hover:bg-orange-700 text-white"><FaLocationArrow></FaLocationArrow></button>
                            </div>
                            <div className="card border shadow-lg shadow-black w-96">
                                <div className="card-body">
                                    <h2 className="card-title ">Loaction</h2>
                                    <p>Dhaka Bangladesh</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ContactUs;