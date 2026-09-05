// src/components/AddTestimonials.jsx
"use client";
import React, { useState, useEffect } from 'react'; // Added useEffect
import { Send, CheckCircle, Eye, User, Briefcase, MapPin, Star, MessageSquare } from 'lucide-react';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useRouter } from 'next/navigation'; // Added router for redirection

export default function AddTestimonials() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");

  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  
  const { user } = useAuthContext();
  const router = useRouter(); // Added router

  // The Bouncer: Kicks out unauthenticated users
  useEffect(() => {
    const isLogged = localStorage.getItem('asstUsr');
    if (!isLogged && !user) {
      router.push('/4938574-admin-login'); 
    }
  }, [user, router]);

  // The Blackout Screen: Prevents UI flash during redirect
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">
          Verifying Credentials...
        </p>
      </div>
    );
  }

  const handleTestimonialSubmit = async (e) => {
    e.preventDefault();
    if (!user) return setError("You must be logged in!");

    setLoad(true);
    setError(null);

    try {
      const payload = { name, profession, address, rating: Number(rating), content };
      
      const resp = await fetch(`/api/testimonials`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        }
      });

      const json = await resp.json();

      if (!resp.ok) {
        setError(json.error || "Something went wrong");
      } else {
        setSubmitted(true);
        setName(""); setProfession(""); setAddress(""); setContent(""); setRating(5);
      }
    } catch (err) {
      setError("Network Error. Please Check Your Connection");
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Testimonial Editor</h1>
          <p className="text-slate-500 mt-2">Add new client feedback to the platform.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          <form onSubmit={handleTestimonialSubmit} className="space-y-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><User className="w-3 h-3"/> Client Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><Briefcase className="w-3 h-3"/> Profession</label>
              <input type="text" required value={profession} onChange={(e) => setProfession(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><MapPin className="w-3 h-3"/> Address</label>
              <input type="text" required value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><Star className="w-3 h-3"/> Rating (Out of 5)</label>
              <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-900 font-bold focus:ring-2 focus:ring-[#fa9632] outline-none appearance-none cursor-pointer">
                {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><MessageSquare className="w-3 h-3"/> Content</label>
              <textarea required rows="5" value={content} onChange={(e) => setContent(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-slate-700 leading-relaxed focus:ring-2 focus:ring-[#fa9632] outline-none text-sm" />
            </div>

            <button type="submit" disabled={load} className="w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest bg-black text-[#fa9632] hover:bg-[#fa9632] hover:text-black transition-all flex items-center justify-center gap-3 disabled:opacity-50">
              {load ? "Publishing..." : submitted ? <CheckCircle className="w-5 h-5" /> : <Send className="w-5 h-5" />}
              {!load && (submitted ? "Success" : "Publish Testimonial")}
            </button>
            {error && <span className='text-red-500 text-sm block mt-2 text-center font-bold'>{error}</span>}
          </form>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 h-fit">
            <div className="flex items-center gap-2 text-slate-400 mb-8 border-b border-slate-50 pb-4">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Card Preview</span>
            </div>

            <div className="w-full rounded-[1.25rem] bg-black p-8 flex flex-col justify-between min-h-[300px]">
              <p className="text-white leading-relaxed mb-8 text-sm sm:text-base">
                {content || "Client testimonial content will appear here..."}
              </p>
              <div>
                <p className="text-m font-bold text-[#fa9632] tracking-wider max-w-max rounded">
                  {name || "Client Name"}
                </p>
                <h4 className="font-black text-white/70 text-xs tracking-wide mt-1 uppercase">
                  {profession || "Profession"} {address && `• ${address}`}
                </h4>
                <div className="mt-3 flex gap-1">
                  {[...Array(Number(rating))].map((_, i) => (
                    <span key={i} className="text-[#fa9632]">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}