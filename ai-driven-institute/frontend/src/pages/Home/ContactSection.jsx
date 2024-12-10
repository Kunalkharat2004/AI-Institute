import axios from "axios";
import useTokenStore from "../../store/userTokenStore";
import { toast,ToastContainer } from "react-toastify";

const ContactSection = () => {

    const {token} = useTokenStore()
    const handleFormSubmit = async(e) => {
     try{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data={
            queryDetails :{
                querySubject: formData.get("subject"),
                query: formData.get("message"),
            }
        };
        
        console.log(data);
        const response = await axios.post("http://localhost:3600/api/query",
            data,
            {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
            }
        )
        console.log(response.status);
        if(response.status === 200){
            toast.success("Query submitted successfully",{
                autoClose: 4000,
            });
        }
        console.log("Response: ", response);
        
        e.target.reset();

     }catch(err){
            console.log(err);
            toast.error("Failed to submit query. Please try again.", {
                autoClose: 4000,
              });
     }
    }
    return (
        <div className="bg-[#fcfbfa] py-16 px-4">
              <ToastContainer/>
            <section id="contact" className="contact section">

                {/* Section Title */}
                <div className="container mx-auto text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
                    <p className="text-lg text-gray-600 mt-2">
                        If you have any query, feel free to contact us.
                    </p>
                </div>

                <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex flex-wrap -mx-4 gap-y-8">

                        {/* Address Section */}
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-[#fcfbfa] shadow-lg md:h-32 rounded-lg p-6 text-center">
                                <i className="bi bi-geo-alt text-4xl text-red-500 mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                                <p className="text-gray-600 text-sm">
                                Nelson Mandela Marg, Vasant Kunj, New Delhi-110070
                                </p>
                            </div>
                        </div>

                        {/* Call Us Section */}
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-[#fcfbfa] md:h-32 shadow-lg rounded-lg p-6 text-center">
                                <i className="bi bi-telephone text-4xl text-blue-500 mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                                <p className="text-gray-600 text-sm">011-26131576-78, 80</p>
                            </div>
                        </div>

                        {/* Email Us Section */}
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="bg-[#fcfbfa] md:h-32 shadow-lg rounded-lg p-6 text-center">
                                <i className="bi bi-envelope text-4xl text-green-500 mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                                <p className="text-gray-600 text-sm">pothole.yolov8@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps and Form */}
                    <div className="flex flex-wrap lg:flex-nowrap mt-12 gap-8">
                        {/* Google Map */}
                        <div className="w-full lg:w-1/2 bg-red-500">
                        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.540008313183!2d77.1543733!3d28.5358021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3522132487%3A0x5decdf23b12670c3!2sAll%20India%20Council%20For%20Technical%20Education%20(AICTE)!5e0!3m2!1sen!2sin!4v1679478932491!5m2!1sen!2sin"
    frameBorder="0"
    style={{ border: 0,width:"100%",height:"100%"}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
></iframe>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-1/2 ">
                            <form
                                onSubmit={handleFormSubmit}
                                method="post"
                                className="bg-[#fcfbfa] shadow-lg lg:h-[25rem]  rounded-lg p-8 space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input border border-gray-300 rounded-lg p-3 w-full"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-input border border-gray-300 rounded-lg p-3 w-full"
                                    placeholder="Subject"
                                    required
                                />
                                <textarea
                                    name="message"
                                    className="form-textarea border border-gray-300 rounded-lg p-3 w-full h-28"
                                    placeholder="Message"
                                    required
                                ></textarea>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              
            </section>
        </div>
    );
};

export default ContactSection;
