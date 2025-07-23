import { useState } from "react";
import { Link } from "react-router-dom";
import signupBg from "../assets/SignupPage/SignupPage_bg.avif";
import axios from "../utils/axiosInstance.js";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name field is Required";
    if (!formData.email.trim()) newErrors.email = "Email field is Required";
    if (!formData.password.trim())
      newErrors.password = "Password field is Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post("/auth/signup", formData);
      console.log("Signup success", response.data);
      setSignupSuccess(true);
      setFormData({ fullName: "", email: "", password: "" });
      setErrors({});
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="flex justify-center items-center w-full min-h-screen bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${signupBg})`,
        backgroundSize: "100% auto",
      }}
    >
      <div className="hero  w-1/2 p-8 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse mx-6">
          {!signupSuccess ? (
            <>
              <div className="text-center lg:text-left ml-15">
                <h1 className="text-5xl font-bold">Signup!</h1>
                <p className="py-6 text-lg">
                  Create your account to start organising your home life with
                  ease.
                </p>
              </div>
              <div className="card bg-base-100/80 w-full max-w-sm shrink-0 shadow-2xl text-white ">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                      {/* Full Name */}
                      <label className="label text-sm font-semibold text-gray-100">Full Name</label>
                      <input
                        type="text"
                        className="input"
                        placeholder="Jane Doe"
                        value={formData.fullName}
                        name="fullName"
                        onChange={handleChange}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.fullName}
                        </p>
                      )}

                      {/* Email */}
                      <label className="label text-sm font-semibold text-gray-100">Email</label>
                      <input
                        type="email"
                        className="input "
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}

                      {/* Password */}
                      <label className="label text-sm font-semibold text-gray-100">Password</label>
                      <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.password}
                        </p>
                      )}

                      {/* Footer */}
                      <div className="mt-4">
                        <span>
                          Already have an account?{" "}
                          <Link
                            to={"/login"}
                            className="hover:underline font-semibold cursor-pointer"
                          >
                            Login
                          </Link>
                        </span>
                      </div>

                      <button type="submit" className="btn btn-neutral mt-4">Signup</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-white h-full flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-green-600 mb-6"
              >
                <CheckCircle size={48} />
              </motion.div>
              <h2 className="text-2xl text-white font-semibold mb-4">
                Signup successful!
              </h2>
              <Link
                to="/"
                className="mt-4 text-sm text-white hover:text-blue-500/90 underline"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
