import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
        // Add login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
            <form
                onSubmit={handleLogin}
                className="bg-[#1a1a1a] p-8 rounded-lg shadow-md w-[90%] max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full mb-6 p-3 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
