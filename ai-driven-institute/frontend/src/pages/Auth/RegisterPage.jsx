import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../http/api";
import useTokenStore from "../../store/userTokenStore";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import formBackgroundImage from "../../assets/image/bg.png";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const setToken = useTokenStore((state) => state.setToken);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      const token = response.data.access_token;
      setToken(token);
      toast.success("Registration successful!", {
        autoClose: 3000,
      });
      navigate("/");
    },
    onError: () => {
      toast.error("Something went wrong!", {
        autoClose: 4000,
      });
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
	const confirmPassword = confirmPasswordRef.current.value;

	if (password !== confirmPassword) {

		toast.error("Passwords do not match!", {
			autoClose: 4000,
		});
		return;
	}

    if (!email || !password) {
      toast.error("Please fill all fields!", {
        autoClose: 4000,
      });
      return;
    }
    mutation.mutate({ email, password });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-bl from-blue-900 to-black text-white"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
        <div
          className="flex flex-col items-center bg-sky-600 p-8 rounded-lg shadow-lg w-80 bg-opacity-5"
          style={{
            boxShadow: `
              0 0 15px rgba(142, 216, 229, 0.5),
              0 0 30px rgba(142, 216, 229, 0.3),
              0 0 45px rgba(142, 216, 229, 0.2),
              0 0 60px rgba(142, 216, 229, 0.1)
            `,
            backgroundImage: `url(${formBackgroundImage})`,
          }}
        >
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-16 w-72 mb-4" />

          {/* Title */}
          <h2 className="text-xl font-bold text-sky-300 mt-6 mb-4">Sign Up</h2>

          {/* Form */}
          <form className="w-full" onSubmit={handleSubmit}>
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
            <div className="mb-4">
              <input
                type="password"
                ref={confirmPasswordRef}
                placeholder="Confirm Password"
                className="w-full p-1 md:p-2 bg-sky-900 text-white text-md md:text-lg rounded-3xl border border-sky-900"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-300 text-sky-950 font-semibold rounded-md hover:bg-orange-500 focus:outline-none"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <div className="text-center text-white text-sm mt-4">
            <p>
              Already have an account?{" "}
              <a
                href="/auth/login"
                className="text-sky-300 hover:underline font-medium text-sm"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
