"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const adminEmail = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
    const adminPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      setMessage("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      
      router.push("/admin");
    } else {
      if (email !== adminEmail) {
        setMessage("Invalid email address");
      } else if (password !== adminPassword) {
        setMessage("Invalid password");
      }
    }
    setIsLoading(false);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-[90%] sm:max-w-[544px] h-auto sm:h-[540px] shadow-custom border-1 p-6 mx-auto mb-4 border-[#C2C5E1] bg-white rounded-md">
        <div className="text-center">
          <h1 className="text-[#000000] mt-4 text-lg sm:text-2xl sm:text-[32px] font-bold font-josefin">
            Admin Login
          </h1>
          <p className="font-lato text-[#9096B2] text-xs sm:text-sm sm:text-[17px]">
            Please login using your account details below.
          </p>

          {/* Animated message */}
          <AnimatePresence>
            {message && (
              <motion.div
                key="message"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-4 p-2 text-center rounded-md ${
                  message.includes("Invalid")
                    ? "bg-red-300 text-red-700"
                    : "bg-green-300 text-green-700"
                }`}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 relative w-full">
            {/* Email Field */}
            <motion.div whileHover={{ scale: 1.03 }} className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 bg-gray-100 rounded-[2px] border-2 border-gray-300 focus:outline-none focus:ring-2  placeholder-gray-400"
                required
              />
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </motion.div>

            {/* Password Field */}
            <motion.div whileHover={{ scale: 1.03 }} className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 bg-gray-100 rounded-[2px] border-2 border-gray-300 focus:outline-none focus:ring-2  placeholder-gray-400"
                required
              />
   
              
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-[27px] transform -translate-y-1/2 text-gray-600"
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </motion.div>

            {/* Login Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
              disabled={isLoading}
              className="bg-[#FB2E86] mt-5 w-full sm:w-[495px] h-[45px] sm:h-[47px] text-sm sm:text-[17px] text-white font-lato border-none   p-3 pl-10 "
            >
              {isLoading ? "Logging in..." : "Login"}
            </motion.button>
          </div>

          {/* Forgot Password Link */}
          <p className="text-left mt-3 text-[#9096B2] font-lato text-xs sm:text-[17px] sm:ml-[30px]">
            Forgot your password?
          </p>

          {/* Sign Up Link */}
          <p className="font-lato text-[#9096B2] text-xs sm:text-[17px] mt-8 sm:mt-8 mb-4">
          Don&apos;t have an Account?{" "}
            <Link href="/sign-up" className="hover:underline">
              Create account
            </Link>
          </p>

          {/* Google Sign-In Button */}
          <div className="flex items-center justify-center mt-6">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500 font-lato text-sm sm:text-base">
              or{" "}
            </span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          {/* <div className="flex justify-center space-x-4 mt-4"> */}
            {/* Google Sign-In Button */}
            {/* <button
              onClick={() =>
                signIn.authenticateWithRedirect({
                  strategy: "oauth_google",
                  redirectUrl: "/",
                  redirectUrlComplete: "/",
                })
              }
              className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-red-600 transition duration-300"
            >
              <FaGoogle className="w-6 h-6" />
            </button> */}

            {/* Other Social Buttons */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
