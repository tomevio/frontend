"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleContinue = () => {
    if (formData.email && formData.username) {
      setStep(2);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const canSubmit =
    formData.email &&
    formData.username &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen w-full flex relative">
      {/* Background Image for Mobile - Full Screen */}
      <div className="absolute inset-0 md:hidden z-0">
        <img
          src="/libpic.jpg"
          alt="Library"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* LEFT SIDE - Full Library Image (Desktop Only) */}
      <div className="hidden md:block md:w-1/2 relative">
        {/* Full Background Image */}
        <img
          src="/libpic.jpg"
          alt="Library"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay for aesthetic */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Gradient fade to right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black"></div>

        {/* Large Logo on Left Side */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-64 h-64">
            <Image
              src="/logo-dark.svg"
              alt="Bookstore Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Signup Form on Pure Black */}
      <div className="w-full md:w-1/2 bg-black md:bg-black flex flex-col items-center justify-center px-8 py-12 relative z-20">

        {/* Mobile Logo */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="relative w-28 h-28">
            <Image
              src="/logo-dark.svg"
              alt="Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-serif text-[#D9D4C8] mb-2 tracking-wide">
              Create your account
            </h1>
            <p className="text-[#ABA38F] font-light">
              Join our literary society
            </p>
          </div>

          {/* Signup Form */}
          <div className="space-y-6">
            {/* Email Input - Always Visible */}
            <div>
              <label className="block text-[#ABA38F] text-sm mb-2 tracking-wide">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565538" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@library.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-[#0d0d0d] border border-[#565538] text-[#D9D4C8] placeholder-[#565538] focus:outline-none focus:border-[#D4AF37] transition-colors rounded"
                />
              </div>
            </div>

            {/* Username Input - Always Visible */}
            <div>
              <label className="block text-[#ABA38F] text-sm mb-2 tracking-wide">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565538" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose a username"
                  className="w-full pl-12 pr-4 py-3.5 bg-[#0d0d0d] border border-[#565538] text-[#D9D4C8] placeholder-[#565538] focus:outline-none focus:border-[#D4AF37] transition-colors rounded"
                />
              </div>
            </div>

            {/* Password Input - Only visible in Step 2 */}
            {step === 2 && (
              <>
                <div className="animate-fadeIn">
                  <label className="block text-[#ABA38F] text-sm mb-2 tracking-wide">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565538" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a secure password"
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0d0d0d] border border-[#565538] text-[#D9D4C8] placeholder-[#565538] focus:outline-none focus:border-[#D4AF37] transition-colors rounded"
                    />
                  </div>
                </div>

                {/* Confirm Password Input - Only visible in Step 2 */}
                <div className="animate-fadeIn">
                  <label className="block text-[#ABA38F] text-sm mb-2 tracking-wide">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565538" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0d0d0d] border border-[#565538] text-[#D9D4C8] placeholder-[#565538] focus:outline-none focus:border-[#D4AF37] transition-colors rounded"
                    />
                  </div>
                  {formData.password &&
                    formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-[#792E29] text-xs mt-2">
                        Passwords do not match
                      </p>
                    )}
                </div>
              </>
            )}

            {/* Continue Button - Only visible in Step 1 */}
            {step === 1 && (
              <button
                onClick={handleContinue}
                disabled={!formData.email || !formData.username}
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold rounded transition-all duration-200 shadow-lg mt-4 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            )}

            {/* Sign Up Button - Only visible in Step 2 */}
            {step === 2 && (
              <button
                disabled={!canSubmit}
                className="w-full py-4 bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold rounded transition-all duration-200 shadow-lg mt-4 tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign Up
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-[#565538]"></div>
            <span className="text-[#565538] text-xs tracking-widest">OR</span>
            <div className="h-px flex-1 bg-[#565538]"></div>
          </div>

          {/* Login Link */}
          <p className="text-[#ABA38F] text-center text-sm">
            Already have an account?{" "}
            <Link 
              href="/" 
              className="text-[#D4AF37] hover:text-[#D9D4C8] font-semibold transition-colors border-b border-[#D4AF37]"
            >
              Log in
            </Link>
          </p>

          {/* Bottom decorative element */}
          <div className="flex items-center gap-3 justify-center mt-8 opacity-20">
            <div className="w-2 h-2 bg-[#792E29] rotate-45"></div>
            <div className="w-2 h-2 bg-[#565538] rotate-45"></div>
            <div className="w-2 h-2 bg-[#D4AF37] rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
}