import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Small delay before hiding
                    return 100;
                }
                return prev + 5;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-transparent text-blue-900 z-50">
            {/* Rotating Loader */}
            <motion.div
                className="w-16 h-16 border-4 border-gray-300 border-t-yellow-500 rounded-full mb-6"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            {/* Loading Text with Bounce Animation */}
            <motion.p
                className="text-3xl font-semibold tracking-widest"
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
                Loading...
            </motion.p>

            {/* Percentage Counter with Smooth Fade Effect */}
            <motion.p
                className="text-xl font-medium mt-2"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
            >
                {progress}%
            </motion.p>
        </div>
    );
};

export default Preloader;
