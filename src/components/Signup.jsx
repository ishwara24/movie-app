import React, { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Signup data:", formData);
        // Add signup logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white">
            <form
                onSubmit={handleSignup}
                className="bg-[#1a1a1a] p-8 rounded-lg shadow-md w-[90%] max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Signup</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mb-4 p-3 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

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
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
