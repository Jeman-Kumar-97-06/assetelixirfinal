// src/app/blogs/page.js
import clientPromise from '@/lib/mongodb';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import BlogControls from './BlogControls';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer';

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  
  const currentPage = Math.max(1, parseInt(params?.page) || 1);
  const activeFilter = params?.category || "All";
  const sortBy = params?.sort || "newest";
  const searchQuery = params?.search || "";
  const limit = 9; // Grid shows 9 items in the image
  const skip = (currentPage - 1) * limit;

  const query = {};
  if (activeFilter !== "All") {
    query.tags = activeFilter;
  }
  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }
  
  let sortObj = { createdAt: -1 };
  if (sortBy === "oldest") sortObj = { createdAt: 1 };

  const client = await clientPromise;
  const db = client.db();
  
  const [rawBlogs, totalBlogs] = await Promise.all([
    db.collection('assetelixirblogs')
      .find(query)
      .sort(sortObj)
      .skip(skip)
      .limit(limit)
      .toArray(),
    db.collection('assetelixirblogs').countDocuments(query),
  ]);

  const totalPages = Math.ceil(totalBlogs / limit);

  const blogs = rawBlogs.map(blog => ({
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString() || null,
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="text-center pt-24 pb-12 px-4 max-w-4xl mt-7 mx-auto">
        <h3 className="text-[#fa8922] font-semibold text-[30px] mb-4 tracking-wide">
          Blogs & Published Articles
        </h3>
        <hr className="w-100 border-t-4 border-black mx-auto mb-6 rounded-full" />
        <h1 className="text-4xl notoSerifBold font-bold md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
          Insights that help you plan better <br className="hidden md:block"/>
          <span className="text-[#fa8922]">& make better decisions.</span>
        </h1>
        <p className="text-black georgiaRegular mb-8 max-w-3xl mx-auto text-[24px]/7 sm:text-[24px]/7 leading-relaxed">
          Practical insights on investing, financial planning, retirement and building long-term 
          wealth. Simple, practical and focused on the financial decisions that matter to you.
        </p>
        <button className="bg-[#ffbc05] text-black px-8 py-3 rounded-full font-bold shadow-md hover:bg-yellow-500 transition-colors">
          Book a Consultation
        </button>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        
        {/* Controls (Filters, Search, Sort) */}
        <BlogControls currentFilter={activeFilter} currentSort={sortBy} defaultSearch={searchQuery} />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog) => (
            <article 
              key={blog._id} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full">
                {blog.blogPic && (
                  <Image 
                    src={blog.blogPic} 
                    alt={blog.title} 
                    fill
                    className="object-cover"
                  />
                )}
                {/* Orange Tag */}
                <div className="absolute top-4 left-4 bg-[#fa8922] text-white text-[13px] georgiaRegular font-bold capitalize tracking-wider px-3 py-1.5 rounded shadow-sm">
                  {blog.tags}
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta Data */}
                <div className="flex items-center gap-3 text-gray-800 text-xs mb-4 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> 
                    {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 5 min read
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl notoSerifBold font-bold text-gray-900 mb-3 leading-snug line-clamp-2">
                  {blog.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 georgiaRegular text-sm leading-relaxed mb-6 line-clamp-2">
                  {blog.blogContent}
                </p>
                
                {/* Read More Link */}
                <div className="mt-auto">
                  <Link href={`/blogs/${blog._id}`} className="inline-flex items-center gap-2 text-[#fa8922] font-semibold text-sm hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>

      {/* Bottom CTA Section */}
      <section className="text-center py-24 px-4 bg-white border-t border-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Have A <span className="text-[#fa8922]">Financial Decision</span><br/>
          On Your Mind?
        </h2>
        <p className="text-black mb-10 max-w-full mx-auto text-lg">
          Whether you're planning for the future, reviewing your investments, or simply looking for a second opinion, we're here to help you think it through.
        </p>
        <button className="bg-[#fa8922] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors">
          Connect with Us
        </button>
      </section>
      <Footer/>
    </main>
  );
}