import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import Button from './Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="group relative bg-dark-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20 w-64 h-96 flex flex-col">
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative w-full aspect-square overflow-hidden bg-dark-800">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute top-2 right-2 bg-primary-500 text-dark-950 text-xs font-bold px-2 py-1 rounded">NEW</span>
          )}
          {product.isBestSeller && !product.isNew && (
            <span className="absolute top-2 right-2 bg-dark-950 text-primary-400 text-xs font-bold px-2 py-1 rounded border border-primary-700">BEST SELLER</span>
          )}
        </div>
        
        <div className="flex flex-col flex-1 justify-between p-4 h-[calc(100%-theme(spacing.64))]">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3
                className="font-mono font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-2"
                title={product.name}
              >
                {product.name}
              </h3>
              {/* {product.hasRGB && (
                <Bolt size={16} className="text-primary-400 mt-1" />
              )} */}
            </div>
          </div>
          <div className="flex justify-between items-end mt-auto">
            <span className="font-mono text-lg font-bold text-white truncate">{`$${product.price.toFixed(2)}`}</span>
            <Button 
              variant="secondary" 
              size="sm"
              icon={<ShoppingCart size={16} />}
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Add to cart"
            >
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;