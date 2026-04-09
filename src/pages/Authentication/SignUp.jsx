import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';
import GoogleLogin from '../../components/GoogleLogin';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen bg-linear-to-t from-black text-white flex items-center justify-center">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    duration: 1.5,
                }}

                className="w-[90%] md:w-[70%] max-w-md"
            >
                <div className="bg-white text-black rounded-2xl shadow-xl p-10">
                    <div className="flex flex-col items-center mb-6">
                        <FaUserCircle className="text-5xl text-[#FF02CB]" />
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 pt-4 font-exo">Create Account</h2>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="text-sm md:text-lg font-medium text-gray-700 flex items-center gap-2">
                                <FaEnvelope className="text-[#FF02CB] text-lg" />
                                Name
                            </label>
                            <input
                                type="text"

                                className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:bg-black text-black focus:text-white focus:outline-none focus:ring-2 focus:ring-[#FF02CB]"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm md:text-lg font-medium text-gray-700 flex items-center gap-2">
                                <FaEnvelope className="text-[#FF02CB] text-lg" />
                                Email
                            </label>
                            <input
                                type="email"

                                className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:bg-black text-black focus:text-white focus:outline-none focus:ring-2 focus:ring-[#FF02CB]"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center">
                                <label className="text-sm md:text-lg font-medium text-gray-700 flex items-center gap-2">
                                    <FaLock className="text-[#FF02CB] text-lg" />
                                    Password
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-xl focus:bg-black text-black focus:text-white focus:outline-none focus:ring-2 focus:ring-[#FF02CB]"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute top-4 right-3 cursor-pointer bg-[#FF02CB] p-1 rounded-full text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>


                        <div>
                            <label className="text-sm md:text-lg font-medium text-gray-700 flex items-center gap-2">
                                <FaLock className="text-[#FF02CB] text-lg" />
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className={`mt-1 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF02CB]`}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute top-4 right-3 cursor-pointer bg-[#FF02CB] p-1 rounded-full text-white"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    tabIndex={-1}
                                >
                                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-black hover:scale-105 text-white md:text-xl font-bold py-3 rounded-xl transition duration-300 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-4">
                        <p className='text-center font-madimi'>Or sign up with</p>
                        <GoogleLogin></GoogleLogin>
                    </div>

                    <div className="flex justify-center items-center gap-1.5 mt-4">
                        <p className="text-sm text-gray-700">Already have an account?</p>
                        <Link
                            to="/login"
                            className="text-[#FF02CB] text-sm font-medium hover:text-[#FF0000] hover:underline hover:scale-105 transition"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SignUp;