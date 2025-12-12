"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { User, LockKeyhole } from "lucide-react";

const Page = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Generate additional random particles
        if (containerRef.current) {
            for (let i = 0; i < 12; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
                containerRef.current.appendChild(particle);
            }
        }
    }, []);
    return (
        <>
        <style jsx global>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translate(0, 0) rotate(0deg); 
                        opacity: 0.3; 
                    }
                    33% { 
                        transform: translate(30px, -30px) rotate(120deg); 
                        opacity: 0.6; 
                    }
                    66% { 
                        transform: translate(-20px, 20px) rotate(240deg); 
                        opacity: 0.4; 
                    }
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255, 215, 140, 0.4);
                    
                    border-radius: 50%;
                    z-index: 10;
                    animation: float 12s infinite ease-in-out;
                    box-shadow: 0 0 10px rgba(255, 215, 140, 0.3);
                    pointer-events: none;
                }
            `}</style>

        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.85),rgba(0,0,0,1)),url('/books.avif')] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.3),rgba(0,0,0,0.85),rgba(0,0,0,1)),url('/books.avif')] bg-cover bg-no-repeat lg:bg-cover bg-top lg:bg-center h-screen w-screen overflow-hidden flex flex-col lg:flex-row ">
        {/* Initial particles */}
                <div className="particle" style={{ top: '15%', left: '20%', animationDelay: '0s', animationDuration: '10s' }}></div>
                
                <div className="particle" style={{ top: '45%', left: '15%', animationDelay: '2s', animationDuration: '14s' }}></div>
                <div className="particle" style={{ top: '75%', left: '25%', animationDelay: '4s', animationDuration: '12s' }}></div>
                <div className="particle" style={{ top: '30%', left: '70%', animationDelay: '1s', animationDuration: '11s' }}></div>
                <div className="particle" style={{ top: '60%', left: '75%', animationDelay: '3s', animationDuration: '13s' }}></div>
                <div className="particle" style={{ top: '85%', left: '80%', animationDelay: '5s', animationDuration: '15s' }}></div>

            {/* Left Panel - Logo */}
            <div className="w-full lg:w-1/2 shrink-0 flex lg:items-start items-center lg:justify-normal justify-center p-8 lg:p-12 ">
                <img src="logo1.svg" alt="Logo" className= "invert brightness-900 h-28 w-28 lg:h-24 lg:w-24 object-contain"/>
            </div>
        
            {/* Right Panel - Login Form */}
            <div className="flex-1 flex flex-col items-center justify-center overflow-hidden px-6 lg:px-12 py-8">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Welcome back,<br/>
                            <span className="bg-gradient-to-r from-[#c2693a] to-[#d4825f] bg-clip-text text-transparent">reader.</span>
                        </h3>
                        <p className="text-base lg:text-md text-gray-300 font-bold">
                            Let's continue your reading journey.
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-5 text-gray-300">
                        <div className="relative">
                            <input 
                            type="text" 
                            placeholder="Username" 
                            className="shadow-[0_0_15px_rgba(34,197,94,0.2)] pl-12 w-full px-6 py-4 rounded-4xl bg-[linear-gradient(to_right,#3a4443bf,#2a2c31bf)] border-none focus:border-none focus:outline-none focus:ring-0"
                            />
                            <User className="absolute left-4 top-1/2 -translate-y-1/2" />
                        </div>
                        <div className="relative">
                            <input 
                            type="password" 
                            placeholder="Password" 
                            className="shadow-[0_0_15px_rgba(34,197,94,0.2)] pl-12 w-full px-6 py-4 rounded-4xl bg-[linear-gradient(to_right,#3a4443bf,#2a2c31bf)] border-none focus:border-none focus:outline-none focus:ring-0"
                            />
                            <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2" />
                        </div>
                        <div className="flex justify-end">
                            <button className="text-sm text-gray-500 hover:underline font-medium transition-colors">
                                Forgot password?
                            </button>
                        </div>
                    </div>
                    
                    {/* Login Button */}
                    <button className="shadow-[0_0_15px_rgba(34,197,94,0.2)] w-full py-4 bg-[#3a4443]  text-white font-semibold rounded-4xl ">
                        Login
                    </button>

                    {/* OR section */}
                    <div className="flex items-center gap-4">
                        <hr className="flex-1 border-gray-300" />
                        <p className="text-gray-400 text-sm font-medium">OR</p>
                        <hr className="flex-1 border-gray-300" />
                    </div>
                    
                    {/* Sign Up Link */}
                    <p className="text-center text-sm lg:text-base text-gray-300">
                        Don't have an account?{" "}
                        <button className="text-[#c2693a] hover:underline font-semibold transition-colors">
                            Create now
                        </button>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Page;