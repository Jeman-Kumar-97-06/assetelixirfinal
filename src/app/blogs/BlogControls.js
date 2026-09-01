// src/app/blogs/BlogControls.jsx
'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Filter, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const categories = ["All", "Retirement", "Financial Planning", "Tax Planning", "Investments", "Portfolio Review", "Insurance Planning"];

export default function BlogControls({ currentFilter, currentSort, defaultSearch }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState(defaultSearch);

  const updateParams = (updates) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    params.set('page', '1'); 
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateParams({ search: searchInput });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 pb-6 border-b border-gray-200">
      
      {/* Left: Filters */}
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide flex-1">
        <div className="flex items-center gap-2 text-gray-700 font-semibold mr-2 shrink-0">
          <Filter className="w-5 h-5" />
          <span>Filter By :</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => updateParams({ category: cat === "All" ? "" : cat })}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
              (currentFilter === cat || (cat === "All" && currentFilter === "All"))
              ? 'border-gray-400 bg-gray-50 text-gray-900 shadow-sm' 
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Right: Search and Sort */}
      <div className="flex flex-col items-end gap-3 shrink-0">
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="placeholder-slate-800 text-black w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#fa8922]"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#fa8922]">
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-m font-medium text-gray-600">Sort By:</label>
          <div className="relative">
            <select 
              value={currentSort}
              onChange={(e) => updateParams({ sort: e.target.value })}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 text-sm font-medium text-gray-900 focus:outline-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}