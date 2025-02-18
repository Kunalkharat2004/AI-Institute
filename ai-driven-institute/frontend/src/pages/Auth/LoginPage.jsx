import  { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useTokenStore from "../../store/userTokenStore";
import { fetchPaymentStatus, login } from "../../http/api";
import logo from "../../assets/image/logo.png";
import sampleImage from "../../assets/image/table.png";
import backgroundImage from "../../assets/image/login_cover.jpg";
import formBackgroundImage from "../../assets/image/bg.png";
import "./LoginPage.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [rememberMe, setRememberMe] = useState(false);

  const setToken = useTokenStore((state) => state.setToken);
  const setPaymentStatus = useTokenStore((state) => state.setPaymentStatus);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async (response) => {
      const token = response.data.access_token;
      setToken(token);

      try {
        const { data } = await fetchPaymentStatus();
        setPaymentStatus(data.paymentStatus);
      } catch (err) {
        console.log(err);
      }
      toast.success("Login successful!", {
        autoClose: 3000,
      });
      navigate("/");
    },
    onError: () => {
      toast.error("Incorrect email or password", {
        autoClose: 4000,
      });
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) {
      toast.error("Please fill email and password!", {
        autoClose: 4000,
      });
      return;
    }

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Check if admin credentials are provided
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("auth-token", "admin");
      navigate("/admin/dashboard");
      console.log("Admin logged in");
      
    }

    mutation.mutate({ email, password });
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
    if (!e.target.checked) {
      localStorage.removeItem("auth-token"); // Clear token if "Remember me" is unchecked.
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-bl from-blue-900 to-black text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 mt-20 ml-10">
          {/* Left Section */}
		  <div
            className="md:col-span-8 bg-transparent rounded-lg flex flex-col items-center shadow-cyan-200 mt-3 p-2"
            style={{
              boxShadow: `
                0 0 15px rgba(142, 216, 229, 0.5),
                0 0 30px rgba(142, 216, 229, 0.3),
                0 0 45px rgba(142, 216, 229, 0.2),
                0 0 60px rgba(142, 216, 229, 0.1)
              `,
            }}
          >
            <h4 className="text-lg font-bold text-sky-300 mb-4">
              Approval Process 2025-26 - Timeline Schedule
            </h4>
            <table className="table-auto w-full text-white text-sm">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Particulars / Description</th>
                  <th className="border px-4 py-2 text-center">Start Date</th>
                  <th className="border px-4 py-2 text-center">End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-semibold text-left bg-gray-700" colSpan="3">
                    Group – 1:
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-left">
                    Existing Institutions / Universities offering other than standalone BBA/BCA/BMS
                    programs - Belonging to Central (CR) + Eastern (ER) + Northern (NR) + North West
                    (NWR) Regions
                  </td>
                  <td className="border px-4 py-2 text-center">06 Nov, 2024</td>
                  <td className="border px-4 py-2 text-center">23 Nov, 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold text-left bg-gray-700" colSpan="3">
                    Group – 2:
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-left">
                    Existing Institutions / Universities offering other than standalone BBA/BCA/BMS
                    programs - Belonging to Western (WR) + Southern (SR) + South West (SWR) +
                    South Central (SCR) Regions
                  </td>
                  <td className="border px-4 py-2 text-center">25 Nov, 2024</td>
                  <td className="border px-4 py-2 text-center">09 Dec, 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold text-left bg-gray-700" colSpan="3">
                    Group – 3:
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-left">
                    1. New Technical Institutions / Universities (All Regions)
                    <br />
                    2. New Institutions intend to offer / offering BBA/BCA/BMS
                  </td>
                  <td className="border px-4 py-2 text-center">14 Dec, 2024</td>
                  <td className="border px-4 py-2 text-center">26 Dec, 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold text-left bg-gray-700" colSpan="3">
                    Group – 4:
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-left">
                    Existing Institutions/Universities offering standalone BBA, BCA, or BMS
                    programs, including those already offering other programs outside the AICTE
                    domain, such as humanities, etc.
                  </td>
                  <td className="border px-4 py-2 text-center">30 Dec, 2024</td>
                  <td className="border px-4 py-2 text-center">13 Jan, 2025</td>
                </tr>
              </tbody>
            </table>
            <a
              href="https://www.aicte-india.org/sites/default/files/approval/2025-26/Groupwise-List%20of%20Institutions_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-left font-light animate-color-change"
            >
              Groupwise Bifurcation of Institutions for Approval Process 2025-26
            </a>
          </div>

          {/* Login Form Section */}
          <div className="md:col-span-4 bg-transparent rounded-lg mt-3"
		  		
			>
            <div
              className="flex flex-col items-center bg-sky-600 p-8 rounded-lg shadow-lg w-80 bg-opacity-5"
              style={{
                boxShadow: `
                  0 0 15px rgba(142, 216, 229, 0.5),
                  0 0 30px rgba(142, 216, 229, 0.3),
                  0 0 45px rgba(142, 216, 229, 0.2),
                  0 0 60px rgba(142, 216, 229, 0.1)
                `,
				backgroundImage: `url(${formBackgroundImage})`
              }}
            >
              {/* Logo */}
              <img src={logo} alt="AICTE Logo" className="h-16 w-72 mb-4" />

              {/* Title */}
              <h2 className="text-xl font-bold text-sky-300 mt-6 mb-4">Sign In</h2>

              {/* Form */}
              <form className="w-full" onSubmit={handleOnSubmit}>
                <div className="mb-2">
                  <input
                    type="email"
                    ref={emailRef}
                    placeholder="Email Address"
                    className="w-full p-1 md:p-2 bg-sky-900 text-white text-md md:text-lg rounded-3xl border border-sky-900"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    className="w-full p-1 md:p-2 bg-sky-900 text-white text-md md:text-lg rounded-3xl border border-sky-900"
                    required
                  />
                </div>
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={rememberMe}
                    onChange={handleRememberMe}
                  />
                  <label className="text-sky-300">Remember me</label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-300 text-sky-950 font-semibold rounded-md hover:bg-orange-500 focus:outline-none"
                >
                  Sign In
                </button>
              </form>

              {/* Footer */}
              <div className="text-center text-white text-sm mt-4">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="/auth/register"
                    className="text-sky-300 hover:underline font-medium text-sm"
                  >
                    New Institute
                  </a>
                </p>
                <p>
                  <a
                    href="/auth/reset-password"
                    className="text-sky-300 hover:underline font-medium text-sm"
                  >
                    Forgot Password?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
