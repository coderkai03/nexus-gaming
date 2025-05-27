import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, Keyboard, Mouse, Package } from 'lucide-react';
import Container from '../components/ui/Container';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { getFeaturedProducts } from '../data/products';
import { getRecentBlogPosts } from '../data/blog';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const recentPosts = getRecentBlogPosts();

  return (
    <div>
      {/* Hero section */}
      <section className="relative h-screen flex items-center bg-dark-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gaming setup"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/80" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Precision-Engineered <span className="text-primary-400">Gaming Gear</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Elevate your gameplay with our premium peripherals designed for peak performance and unmatched durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" as={Link} to="/shop">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" as={Link} to="/about">
                Our Story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories section */}
      <section className="py-24 bg-dark-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">
              Precision-Crafted Categories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse our collection of premium gaming peripherals designed for competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/shop?category=keyboard" 
              className="group bg-dark-800 rounded-lg p-6 transition-all hover:bg-dark-800/80 hover:shadow-lg hover:shadow-primary-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-dark-700 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-900/30">
                <Keyboard className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="font-mono font-bold text-xl text-white mb-2 group-hover:text-primary-400 transition-colors">Keyboards</h3>
              <p className="text-gray-400 mb-4">Mechanical precision with customizable features</p>
              <span className="flex items-center text-primary-400 font-medium">
                Browse <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/shop?category=mouse" 
              className="group bg-dark-800 rounded-lg p-6 transition-all hover:bg-dark-800/80 hover:shadow-lg hover:shadow-primary-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-dark-700 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-900/30">
                <Mouse className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="font-mono font-bold text-xl text-white mb-2 group-hover:text-primary-400 transition-colors">Mice</h3>
              <p className="text-gray-400 mb-4">Ultra-precise sensors with ergonomic designs</p>
              <span className="flex items-center text-primary-400 font-medium">
                Browse <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/shop?category=headset" 
              className="group bg-dark-800 rounded-lg p-6 transition-all hover:bg-dark-800/80 hover:shadow-lg hover:shadow-primary-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-dark-700 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-900/30">
                <Headphones className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="font-mono font-bold text-xl text-white mb-2 group-hover:text-primary-400 transition-colors">Headsets</h3>
              <p className="text-gray-400 mb-4">Immersive audio with crystal-clear communication</p>
              <span className="flex items-center text-primary-400 font-medium">
                Browse <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link 
              to="/shop?category=accessory" 
              className="group bg-dark-800 rounded-lg p-6 transition-all hover:bg-dark-800/80 hover:shadow-lg hover:shadow-primary-900/20"
            >
              <div className="h-12 w-12 rounded-full bg-dark-700 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary-900/30">
                <Package className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="font-mono font-bold text-xl text-white mb-2 group-hover:text-primary-400 transition-colors">Accessories</h3>
              <p className="text-gray-400 mb-4">Essential add-ons to complete your setup</p>
              <span className="flex items-center text-primary-400 font-medium">
                Browse <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured products section */}
      <section className="py-24 bg-dark-950">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">
                Featured Products
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Our most popular premium gaming peripherals
              </p>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Products
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gaming setup"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-dark-900/90" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-mono font-bold text-3xl md:text-4xl text-white mb-6">
              Ready to <span className="text-primary-400">Elevate</span> Your Gaming Experience?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professional gamers who trust NEXUS for tournament-grade peripherals engineered for victory.
            </p>
            <Button size="lg" as={Link} to="/shop">
              Shop Premium Gear
            </Button>
          </div>
        </Container>
      </section>

      {/* Blog section */}
      <section className="py-24 bg-dark-950">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Tips, guides, and news from the world of gaming peripherals
              </p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Articles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="bg-dark-900 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-primary-900/20">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-medium text-primary-400">{post.category.toUpperCase()}</span>
                      <span className="mx-2 text-dark-400">•</span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="font-mono font-bold text-xl text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="flex items-center text-primary-400 font-medium">
                      Read More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;