import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Minus, Plus, ArrowLeft, Bolt, CircleX, CircleCheck } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description');
  
  const product = id ? getProductById(id) : null;
  
  if (!product) {
    return (
      <div className="pt-32 pb-24 bg-dark-950">
        <Container>
          <div className="text-center">
            <h1 className="font-mono font-bold text-3xl text-white mb-6">Product Not Found</h1>
            <p className="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
  
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="pt-20 pb-24 bg-dark-950">
      <Container>
        <div className="pt-8 pb-4">
          <Link to="/shop" className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product image */}
          <div className="bg-dark-900 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product details */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <h1 className="font-mono font-bold text-3xl text-white">{product.name}</h1>
              {product.hasRGB && <Bolt size={20} className="text-primary-400 mt-2" />}
            </div>
            
            <div className="flex items-center mb-6">
              <span className="font-mono text-2xl font-bold text-white mr-4">${product.price.toFixed(2)}</span>
              {product.inStock ? (
                <span className="inline-flex items-center text-green-500 text-sm">
                  <CircleCheck size={16} className="mr-1" />
                  In Stock
                </span>
              ) : (
                <span className="inline-flex items-center text-red-500 text-sm">
                  <CircleX size={16} className="mr-1" />
                  Out of Stock
                </span>
              )}
            </div>
            
            <p className="text-gray-300 mb-8">{product.description}</p>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="font-mono font-bold text-lg text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-400 mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Add to cart section */}
            {product.inStock && (
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <div className="flex items-center border border-dark-700 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-white">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <Button 
                  fullWidth 
                  icon={<ShoppingCart size={16} />}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            )}
            
            {/* Tabs */}
            <div className="border-b border-dark-700 mb-6">
              <div className="flex space-x-8">
                <button 
                  className={`pb-3 text-sm font-medium transition-colors ${
                    activeTab === 'description' ? 'text-primary-400 border-b-2 border-primary-400' : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`pb-3 text-sm font-medium transition-colors ${
                    activeTab === 'specs' ? 'text-primary-400 border-b-2 border-primary-400' : 'text-gray-400 hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('specs')}
                >
                  Specifications
                </button>
              </div>
            </div>
            
            {/* Tab content */}
            <div>
              {activeTab === 'description' ? (
                <p className="text-gray-300">{product.description}</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="bg-dark-900 p-3 rounded-md">
                      <span className="block text-sm text-gray-400 mb-1">{key}</span>
                      <span className="font-medium text-white">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-mono font-bold text-2xl text-white mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductPage;