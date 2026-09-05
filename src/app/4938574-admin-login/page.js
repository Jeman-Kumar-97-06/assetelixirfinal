// src/app/4938574-admin-login/page.js
"use client";

import React, { useState } from 'react';
import { Lock, User, ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useLogin } from '@/hooks/useLogin'; // Ensure these hooks point to your Next.js API routes
import { useSignup } from '@/hooks/useSignup';

export default function SecretAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Using your existing hooks[cite: 22]
  const { login, error: loginError, isLoading: isLoginLoading } = useLogin();
  const { signup, error: signupError, isLoading: isSignupLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      await login(username, password);
    } else {
      await signup(username, password);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 pt-20 pb-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fa9632] rounded-full opacity-5 blur-[100px] -mr-40 -mt-40"></div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6 shadow-xl shadow-orange-100">
            <ShieldCheck className="text-[#fa9632] w-8 h-8" />
          </div>
          <h1 className="font-serif text-4xl font-medium text-slate-900 leading-tight">
            Control <em className="italic text-[#555] font-normal">Center.</em>
          </h1>
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em] mt-3 font-bold">
            Asset Elixir Management
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
          
          {/* Mode Toggle Header */}
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => setIsLoginMode(true)} className={`text-xs font-black uppercase tracking-widest pb-1 border-b-2 ${isLoginMode ? 'border-[#fa9632] text-slate-900' : 'border-transparent text-slate-300'}`}>Login</button>
            <button onClick={() => setIsLoginMode(false)} className={`text-xs font-black uppercase tracking-widest pb-1 border-b-2 ${!isLoginMode ? 'border-[#fa9632] text-slate-900' : 'border-transparent text-slate-300'}`}>Signup</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[15px] uppercase tracking-widest font-black text-black ml-1">Username</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#fa9632] transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text" required placeholder="Enter admin username"
                  className="placeholder-slate-500 text-black w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#fa9632]/20 focus:border-[#fa9632] transition-all"
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[15px] uppercase tracking-widest font-black text-black ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-[#fa9632] transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} required placeholder="••••••••"
                  className="placeholder-slate-500 text-black w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-12 text-sm font-medium outline-none focus:ring-2 focus:ring-[#fa9632]/20 focus:border-[#fa9632] transition-all placeholder:text-slate-300"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
                <button 
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit" disabled={isLoginLoading || isSignupLoading}
                className="w-full bg-black text-[#fa9632] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#fa9632] hover:text-black transition-all shadow-lg hover:shadow-orange-200 disabled:opacity-50"
              >
                {isLoginMode ? 'Sign In' : 'Create Account'} <ArrowRight size={14} />
              </button>
              {(loginError || signupError) && (
                <p className="text-red-500 text-xs mt-3 text-center font-bold">{loginError || signupError}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}