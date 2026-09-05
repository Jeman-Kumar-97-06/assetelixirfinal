// src/components/AdminBlogControls.jsx
"use client";
import { useAuthContext } from '@/hooks/useAuthContext';

export default function AdminBlogControls({ blogId }) {
  const { user } = useAuthContext();

  if (!user) return null; // Invisible to regular visitors

  return (
    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end gap-3 text-xs">
      <button 
        onClick={() => alert(`Trigger Update for ${blogId}`)} 
        className="font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
      >
        Update
      </button>
      <span className="text-slate-300">|</span>
      <button 
        onClick={() => alert(`Trigger Delete for ${blogId}`)} 
        className="font-bold text-slate-500 hover:text-red-600 transition-colors uppercase tracking-widest"
      >
        Delete
      </button>
    </div>
  );
}