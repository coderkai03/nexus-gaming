import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 bg-dark-950">
        <Container>
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 text-primary-400 mx-auto mb-6" />
            <h1 className="font-mono font-bold text-3xl text-white mb-4">Your Cart is Empty</h1>
            <p className="text-gray-400 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop">
              <Button>Browse Products</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-dark-950">
      <Container>
        <h1 className="font-mono font-bold text-3xl text-white mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-dark-900 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-dark-800">
                <div className="flex justify-between items-center">
                  <h2 className="font-mono font-bold text-xl text-white">
                    Cart Items ({items.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>
                  <button 
                    onClick={clearCart}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              <div>
                {items.map((item) => (
                  <div 
                    key={item.product.id} 
                    className="p-6 border-b border-dark-800 flex flex-col md:flex-row items-start md:items-center gap-4"
                  >
                    <div className="w-20 h-20 bg-dark-800 rounded overflow-hidden shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-medium text-white hover:text-primary-400 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <div className="text-gray-400 text-sm mt-1">
                        ${item.product.price.toFixed(2)} each
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors border border-dark-700 rounded-l"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center text-white border-t border-b border-dark-700">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors border border-dark-700 rounded-r"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <div className="font-mono font-bold text-white">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-400 transition-colors text-sm inline-flex items-center mt-1"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div>
            <div className="bg-dark-900 rounded-lg overflow-hidden sticky top-24">
              <div className="p-6 border-b border-dark-800">
                <h2 className="font-mono font-bold text-xl text-white">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-white">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax</span>
                    <span className="text-white">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-dark-800 pt-4 flex justify-between">
                    <span className="font-medium text-white">Total</span>
                    <span className="font-mono font-bold text-xl text-white">${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  fullWidth 
                  size="lg"
                  className="mb-4"
                >
                  Checkout
                </Button>
                
                <Link 
                  to="/shop"
                  className="flex justify-center items-center text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Continue Shopping
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;