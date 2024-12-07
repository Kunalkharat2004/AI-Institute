import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import useTokenStore from "../../store/userTokenStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const { token } = useTokenStore();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
        queryDetails: {
          querySubject: formData.get("subject"),
          query: formData.get("message"),
        },
      };

      console.log("Form Data: ", data);

      const response = await axios.post(
        "http://localhost:3600/api/query",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response Status: ", response.status);

      if (response.status === 200) {
        toast.success("Query submitted successfully", {
          autoClose: 4000,
        });
      }

      // Reset the form
      e.target.reset();
    } catch (err) {
      console.error("Error: ", err);
      toast.error("Failed to submit query. Please try again.", {
        autoClose: 4000,
      });
    }
  };

  return (
    <>
      <section data-aos="fade-right">
        <ToastContainer />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Have questions about AI-driven inspections? Need support with the
            approval process or feedback on our system? We're here to help!
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              className="w-full md:w-auto bg-transparent border-2 border-gray-500 px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:border-gray-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact
