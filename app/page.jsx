"use client";
import React from "react";


const Page = () =>{
    return(
        <>
            <div className="min-h-screen flex flex-col lg:flex-row bg-white">
                <div className="bg-amber-600  w-full lg:min-h-screen h-32 lg:h-auto flex items-start p-8 lg:p-12">
                    <img src="logo.svg" alt="Logo" className="h-16 w-16 lg:h-24 lg:w-24 object-contain"/>
                </div>
                <div className="flex flex-1 flex-col min-h-screen w-full lg:min-h-0 justify-center px-8 lg:px-12 py-12 bg-purple-400">
                    <div className="mb-8 lg:mb-12 bg-amber-400">
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">Welcome back,<br/>reader.</h3>
                        <p className="text-base lg:text-lg text-gray-600">Let's continue your reading journey.</p>
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
                            <button className="text-sm text-gray-500 hover:underline font-medium">
                                Forgot password?
                            </button>
                        </div>
                    </div>
                    <p className="text-center text-sm lg:text-base text-gray-600">Don't have an account?
                    <button className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">
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