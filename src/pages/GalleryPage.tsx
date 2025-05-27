import React, { useState } from 'react';
import Container from '../components/ui/Container';
import { galleryItems } from '../data/gallery';
import { getProductById } from '../data/products';
import { X } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  const handleItemClick = (id: string) => {
    setSelectedItem(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };
  
  const selected = selectedItem ? galleryItems.find(item => item.id === selectedItem) : null;

  return (
    <div className="pt-24 pb-24 bg-dark-950">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">Pro Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how professionals and enthusiasts use NEXUS gear to create their ultimate gaming setups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer relative aspect-square overflow-hidden bg-dark-900 rounded-lg"
              onClick={() => handleItemClick(item.id)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <h3 className="font-mono font-bold text-xl text-white">{item.title}</h3>
                <p className="text-gray-300">by {item.author}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 overflow-auto bg-dark-950/95 flex items-center justify-center p-4">
            <div className="relative max-w-6xl w-full bg-dark-900 rounded-lg overflow-hidden">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-dark-950/80 text-white hover:text-primary-400 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto">
                  <img 
                    src={selected.image} 
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="font-mono font-bold text-2xl text-white mb-2">{selected.title}</h2>
                  <p className="text-gray-400 mb-6">by {selected.author}</p>
                  
                  <h3 className="font-mono font-medium text-lg text-white mb-4">Featured Products</h3>
                  <div className="space-y-4">
                    {selected.products.map((productName, index) => {
                      const product = getProductById(
                        (parseInt(selected.id) + index).toString()
                      );
                      
                      return product ? (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-dark-800 rounded overflow-hidden shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{productName}</h4>
                            <p className="text-gray-400 text-sm">${product.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ) : (
                        <div key={index} className="text-gray-400">{productName}</div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default GalleryPage;