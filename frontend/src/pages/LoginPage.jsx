import React, { useState } from "react";
import loginBg from "../assets/LoginPage/login_bg.avif";
import axios from "../utils/axiosInstance.js"
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { CheckCircle } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email Field is Required";
    if (!formData.password.trim())
      newErrors.password = "Password Field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        "/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login success", response.data);
      setLoginSuccess(true);
      setFormdata({ email: "", password: "" });
      setErrors({});
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center w-full min-h-screen bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "100% auto",
      }}
    >
      <div className="hero w-1/2 p-8 rounded-2xl">
        <div className="hero-content flex-col mx-6 mb-60">
          {!loginSuccess ? (
            <>
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login!</h1>
                <p className="py-6 text-lg ">
                  Login to your account to manage your home life.
                </p>
              </div>
              <div className="card bg-gray-400/70 w-full h-full max-w-[150vh] min-h-[32vh] shrink-0 shadow-2xl  text-white ">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                      {/* Email */}
                      <label className="label text-base font-semibold text-gray-100">Email</label>
                      <input
                        type="email"
                        className="input bg-gray-200 text-black mb-4"
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
                      <label className="label  text-base font-semibold text-gray-100">Password</label>
                      <input
                        type="password"
                        className="input bg-gray-200 text-black mb-4"
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
                          Don't have an account yet?{" "}
                          <Link
                            to={"/signup"}
                            className="hover:underline font-semibold cursor-pointer"
                          >
                            Signup
                          </Link>
                        </span>
                      </div>

                      <button type="submit" className="btn btn-neutral mt-4">
                        Login
                      </button>
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
              <h2 className="text-4xl text-black font-bold mb-4">
                Login successful!
              </h2>
              <Link
                to="/"
                className="mt-4 text-base text-black hover:scale-103 underline"
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

export default LoginPage;
