import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SortDesc, Bolt } from 'lucide-react';
import Container from '../components/ui/Container';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { Product } from '../types';

const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: categoryParam || 'all',
    priceRange: 'all',
    hasRGB: false,
    inStock: true,
    sort: 'featured'
  });

  useEffect(() => {
    if (categoryParam) {
      setFilters(prev => ({
        ...prev,
        category: categoryParam
      }));
    }
  }, [categoryParam]);

  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Apply price range filter
    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under100':
          result = result.filter(product => product.price < 100);
          break;
        case '100to200':
          result = result.filter(product => product.price >= 100 && product.price <= 200);
          break;
        case 'over200':
          result = result.filter(product => product.price > 200);
          break;
      }
    }
    
    // Apply RGB filter
    if (filters.hasRGB) {
      result = result.filter(product => product.hasRGB);
    }
    
    // Apply in-stock filter
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Apply sorting
    switch (filters.sort) {
      case 'priceLow':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = result.filter(product => product.isNew).concat(
          result.filter(product => !product.isNew)
        );
        break;
      case 'bestSellers':
        result = result.filter(product => product.isBestSeller).concat(
          result.filter(product => !product.isBestSeller)
        );
        break;
    }
    
    setFilteredProducts(result);
    
    // Update URL params
    if (filters.category !== 'all') {
      searchParams.set('category', filters.category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
    
  }, [filters, searchParams, setSearchParams]);

  const handleFilterChange = (name: string, value: string | boolean) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleFilters = () => {
    setFilterOpen(!filterOpen);
  };

  const categoryCount = {
    all: products.length,
    keyboard: products.filter(p => p.category === 'keyboard').length,
    mouse: products.filter(p => p.category === 'mouse').length,
    headset: products.filter(p => p.category === 'headset').length,
    accessory: products.filter(p => p.category === 'accessory').length
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'all': return 'All Products';
      case 'keyboard': return 'Keyboards';
      case 'mouse': return 'Mice';
      case 'headset': return 'Headsets';
      case 'accessory': return 'Accessories';
      default: return category;
    }
  };

  return (
    <div className="pt-16 pb-24 bg-dark-950">
      <Container>
        <div className="pt-12 pb-8">
          <h1 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">
            {getCategoryLabel(filters.category)}
          </h1>
          <p className="text-gray-400">
            Browse our collection of premium gaming peripherals
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="bg-dark-900 rounded-lg p-6 sticky top-24">
              <h2 className="font-mono font-bold text-xl text-white mb-6">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-medium text-white mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', 'keyboard', 'mouse', 'headset', 'accessory'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === category}
                        onChange={() => handleFilterChange('category', category)}
                        className="form-radio text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-gray-300">{getCategoryLabel(category)}</span>
                      <span className="ml-auto text-gray-500 text-sm">({categoryCount[category as keyof typeof categoryCount]})</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-white mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under100', label: 'Under $100' },
                    { value: '100to200', label: '$100 - $200' },
                    { value: 'over200', label: 'Over $200' }
                  ].map((range) => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange === range.value}
                        onChange={() => handleFilterChange('priceRange', range.value)}
                        className="form-radio text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-gray-300">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-white mb-3">Features</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.hasRGB}
                      onChange={(e) => handleFilterChange('hasRGB', e.target.checked)}
                      className="form-checkbox text-primary-500 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-gray-300">RGB Lighting</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                      className="form-checkbox text-primary-500 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-gray-300">In Stock</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-3">Sort By</h3>
                <select
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="w-full p-2 bg-dark-800 border border-dark-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="bestSellers">Best Sellers</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter buttons */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <Button 
                variant="secondary" 
                size="sm" 
                icon={<Filter size={16} />}
                onClick={toggleFilters}
              >
                Filters
              </Button>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Sort:</span>
                <select
                  value={filters.sort}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                  className="p-2 bg-dark-800 border border-dark-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="bestSellers">Best Sellers</option>
                </select>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="lg:hidden bg-dark-900 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-mono font-bold text-xl text-white">Filters</h2>
                  <button 
                    onClick={toggleFilters}
                    className="text-gray-400 hover:text-primary-400"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-white mb-3">Category</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['all', 'keyboard', 'mouse', 'headset', 'accessory'].map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={filters.category === category}
                          onChange={() => handleFilterChange('category', category)}
                          className="form-radio text-primary-500 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-gray-300">{getCategoryLabel(category)}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-white mb-3">Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under100', label: 'Under $100' },
                      { value: '100to200', label: '$100 - $200' },
                      { value: 'over200', label: 'Over $200' }
                    ].map((range) => (
                      <label key={range.value} className="flex items-center">
                        <input
                          type="radio"
                          name="priceRange"
                          checked={filters.priceRange === range.value}
                          onChange={() => handleFilterChange('priceRange', range.value)}
                          className="form-radio text-primary-500 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-gray-300">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-white mb-3">Features</h3>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.hasRGB}
                        onChange={(e) => handleFilterChange('hasRGB', e.target.checked)}
                        className="form-checkbox text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-gray-300">RGB Lighting</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.inStock}
                        onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                        className="form-checkbox text-primary-500 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-gray-300">In Stock</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-400">
                  Showing <span className="font-medium text-white">{filteredProducts.length}</span> products
                </p>
                <div className="hidden lg:flex items-center">
                  <SortDesc size={16} className="text-gray-400 mr-2" />
                  <select
                    value={filters.sort}
                    onChange={(e) => handleFilterChange('sort', e.target.value)}
                    className="p-2 bg-dark-800 border border-dark-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="bestSellers">Best Sellers</option>
                  </select>
                </div>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-dark-900 rounded-lg p-8 text-center">
                  <p className="text-gray-300 mb-4">No products found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setFilters({
                        category: 'all',
                        priceRange: 'all',
                        hasRGB: false,
                        inStock: true,
                        sort: 'featured'
                      });
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopPage;