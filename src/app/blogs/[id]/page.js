// src/app/blogs/[id]/page.js
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// EXACT MATCH PARSER: Bold logic inside {...} and python-style hyperlink logic inside (...)
const parseInlineElements = (text) => {
  if (!text) return "";
  
  const parts = text.split(/(\{.*?\}|\(.*?\))/g);
  
  return parts.map((part, i) => {
    if (part.startsWith('{') && part.endsWith('}')) {
      const innerText = part.slice(1, -1).trim();
      return (
        <strong key={i} className="font-black text-slate-900 mx-0.5">
          {innerText}
        </strong>
      );
    }
    
    if (part.startsWith('(') && part.endsWith(')')) {
      const innerContent = part.slice(1, -1);
      const commaIndex = innerContent.indexOf(',');
      
      if (commaIndex !== -1) {
        const label = innerContent.substring(0, commaIndex).trim().replace(/^['"]|['"]$/g, '');
        const url = innerContent.substring(commaIndex + 1).trim().replace(/^['"]|['"]$/g, '');
        
        return (
          <a 
            key={i} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#fa9632] font-bold hover:underline mx-0.5 transition-all"
          >
            {label}
          </a>
        );
      }
    }
    
    return part;
  });
};

// EXACT MATCH PARSER: Line-by-line block rendering (#, ##, [], paragraphs)
const renderBlogContent = (content) => {
  if (!content) return null;

  return content.split('\n').map((line, index) => {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('##')) {
      return (
        <h2 key={index} className="text-xl font-bold text-slate-800 mt-8 mb-4 tracking-tight">
          {parseInlineElements(trimmedLine.replace('##', '').trim())}
        </h2>
      );
    }
    
    if (trimmedLine.startsWith('#')) {
      return (
        <h3 key={index} className="text-3xl font-black text-[#fa9632] mt-10 mb-4 tracking-tight">
          {parseInlineElements(trimmedLine.replace('#', '').trim())}
        </h3>
      );
    }

    if (trimmedLine.startsWith('[')) {
      return (
        <div key={index} className="flex items-start gap-3 text-slate-600 leading-relaxed mb-3 pl-4">
          <span className="text-[#fa9632] font-black text-lg leading-none select-none">•</span>
          <span className="flex-1">{parseInlineElements(trimmedLine.replace(/^\[|\]$/g, '').trim())}</span>
        </div>
      );
    }

    return (
      <p key={index} className="text-slate-600 leading-relaxed mb-5 text-lg">
        {parseInlineElements(line)}
      </p>
    );
  });
};

export default async function DedicatedBlog({ params }) {
  const { id } = await params;
  
  let blog = null;
  let error = null;

  try {
    const client = await clientPromise;
    const db = client.db();

    // Verify the ID is a valid 24-character hex string before querying MongoDB
    if (!ObjectId.isValid(id)) {
      error = "Invalid blog ID format.";
    } else {
      const rawBlog = await db.collection('assetelixirblogs').findOne({ _id: new ObjectId(id) });
      
      if (!rawBlog) {
        error = "Could not find the requested blog post.";
      } else {
        // Serialize the document for React rendering
        blog = {
          ...rawBlog,
          _id: rawBlog._id.toString(),
          createdAt: rawBlog.createdAt?.toISOString() || null,
        };
      }
    }
  } catch (err) {
    console.error("Database Error: ", err);
    error = "Database connection issue. Please try refreshing.";
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-md text-center">
          <p className="text-red-500 font-bold mb-4">{error}</p>
          <Link 
            href="/blogs"
            className="inline-block px-6 py-3 bg-black text-[#fa9632] font-black rounded-xl text-sm uppercase tracking-widest hover:bg-[#fa9632] hover:text-black transition-all"
          >
            Back to Feed
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) return null;

  // Use blogPic (from your Mongoose schema) or blog_pic (from your old React component)
  const heroImage = blog.blogPic || blog.blog_pic;

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        <Link 
          href="/blogs" 
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-black font-black uppercase tracking-widest text-xs mb-8 transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Go Back
        </Link>

        <article className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          
          {heroImage && (
            <div className="w-full h-[350px] md:h-[450px] overflow-hidden">
              <img 
                src={heroImage} 
                alt={blog.title} 
                className="w-full h-full object-cover shadow-inner"
              />
            </div>
          )}

          <div className="p-8 md:p-16">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-black text-[#fa9632] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#fa9632]">
                <Tag className="w-3 h-3" />
                {blog.tags || "General"}
              </span>
              
              {blog.createdAt && (
                <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              {blog.title}
            </h1>

            <div className="prose prose-slate max-w-none">
              {renderBlogContent(blog.blogContent)}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}