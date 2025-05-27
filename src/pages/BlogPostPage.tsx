import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getBlogPostById } from '../data/blog';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : null;
  
  if (!post) {
    return (
      <div className="pt-32 pb-24 bg-dark-950">
        <Container>
          <div className="text-center">
            <h1 className="font-mono font-bold text-3xl text-white mb-6">Article Not Found</h1>
            <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-24 bg-dark-950">
      <Container size="md">
        <div className="pt-8 pb-4">
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Blog
          </Link>
        </div>
        
        <article className="bg-dark-900 rounded-lg overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block bg-dark-800 text-primary-400 rounded-full px-3 py-1 text-xs font-medium">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <User size={14} className="mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <h1 className="font-mono font-bold text-3xl md:text-4xl text-white mb-6">
              {post.title}
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 space-y-6">
                <p>{post.content}</p>
                <p>
                  Gaming peripherals play a critical role in your overall gaming experience. 
                  The right keyboard, mouse, or headset can make the difference between victory and defeat 
                  in competitive games. It's not just about the aesthetics—though RGB lighting certainly 
                  adds to the immersive experience—but about precision, reliability, and comfort during 
                  those marathon gaming sessions.
                </p>
                <p>
                  When selecting your next gaming peripheral, consider factors like response time, 
                  ergonomics, customization options, and build quality. Premium materials like aircraft-grade 
                  aluminum and double-shot PBT keycaps offer superior durability and a premium feel 
                  that enhances your gaming setup.
                </p>
                <p>
                  Remember that the best gaming peripheral is the one that feels right for your specific 
                  needs. Take the time to research and, if possible, test different options before making 
                  your decision. Your hands will thank you.
                </p>
              </div>
            </div>
            
            <div className="border-t border-dark-800 mt-8 pt-8 flex justify-between items-center">
              <div className="text-gray-400">
                <span className="block text-sm mb-1">Share this article:</span>
                <div className="flex space-x-4">
                  <button aria-label="Share on Twitter" className="text-gray-400 hover:text-primary-400 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
              <Link to="/blog">
                <Button variant="outline" size="sm">
                  More Articles
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default BlogPostPage;