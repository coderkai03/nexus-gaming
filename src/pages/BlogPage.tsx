import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import { blogPosts } from '../data/blog';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-dark-950">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">Blog</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights, guides, and news from the world of gaming peripherals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block group"
            >
              <article className="bg-dark-900 rounded-lg overflow-hidden transition-shadow group-hover:shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto md:h-full">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="inline-block bg-dark-800 text-primary-400 rounded-full px-3 py-1 text-xs font-medium">
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm ml-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm ml-4">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h2 className="font-mono font-bold text-2xl text-white mb-4 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6">
                      {post.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center text-primary-400 font-medium group-hover:underline">
                      Read More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;