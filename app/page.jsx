"use client";
import React from "react";
import Link from "next/link";

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

                    <div className="space-y-5 mb-6 bg-red-300">
                        <input type="text" placeholder="Username" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none  focus:border-transparent  bg-white"></input>
                        <input type="password" placeholder="Password" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none  focus:border-transparent  bg-white"></input>
                    </div>
                    <p className="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors">Forgot password?</p>

                    <div className="h-[20%] w-full bg-blue-300 flex flex-col items-center justify-center">
                        <button className="w-full py-4 bg-amber-600 text-white font-semibold rounded-2xl">Login</button>
                        <div className="flex items-center justify-center gap-4 my-8">
                            <hr className="h-0.5 flex-grow w-40 border-0 bg-gradient-to-r from-gray-500 via-white to-gray-500" />
                            <p className="text-gray-400 text-sm font-medium">OR</p>
                            <hr className="h-0.5 flex-grow w-40 border-0 bg-gradient-to-r from-gray-500 via-white to-gray-500" />
                        </div>

                    </div>
                    <p className="text-center text-sm lg:text-base text-gray-600">Don't have an account?
                    <Link href="/signup" className="text-amber-600 hover:text-amber-700 font-semibold transition-colors">
                    Create now
                    </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Page;