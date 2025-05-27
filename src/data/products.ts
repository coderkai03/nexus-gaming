import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'NEXUS X1 Mechanical Keyboard',
    category: 'keyboard',
    price: 179.99,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The NEXUS X1 is our flagship mechanical keyboard featuring premium CNC aluminum construction, hot-swappable switches, and customizable RGB lighting.',
    features: [
      'Aircraft-grade aluminum frame',
      'Hot-swappable switch sockets',
      'Per-key RGB lighting with 16.8M colors',
      'USB-C detachable cable',
      'Programmable macro keys',
      'Memory foam wrist rest included'
    ],
    specs: {
      'Switch Type': 'Premium Tactile (Optional Linear or Clicky)',
      'Keycaps': 'Double-shot PBT',
      'Polling Rate': '1000Hz',
      'Response Time': '1ms',
      'Dimensions': '440mm x 140mm x 40mm',
      'Weight': '1.2kg'
    },
    hasRGB: true,
    inStock: true,
    isBestSeller: true
  },
  {
    id: '2',
    name: 'NEXUS M2 Ultra Gaming Mouse',
    category: 'mouse',
    price: 129.99,
    image: 'https://images.pexels.com/photos/3654768/pexels-photo-3654768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Experience unparalleled precision with the NEXUS M2 Ultra featuring an advanced optical sensor, lightweight shell design, and customizable side buttons.',
    features: [
      'Ultra-precise 26,000 DPI optical sensor',
      'Ergonomic right-handed design',
      'Lightweight honeycomb shell (68g)',
      'Eight programmable buttons',
      'PTFE skates for smooth gliding',
      'RGB lighting with reactive effects'
    ],
    specs: {
      'Sensor': 'NEXUS Optical 3.0',
      'Max DPI': '26,000',
      'Polling Rate': '8000Hz',
      'Buttons': '8 programmable',
      'Cable': 'Paracord 2.0 USB-C',
      'Battery Life': 'N/A (Wired)',
      'Weight': '68g'
    },
    hasRGB: true,
    inStock: true,
    isNew: true
  },
  {
    id: '3',
    name: 'NEXUS H1 Wireless Headset',
    category: 'headset',
    price: 249.99,
    image: 'https://images.pexels.com/photos/8412420/pexels-photo-8412420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Immerse yourself in crystal-clear audio with the NEXUS H1 Wireless Headset featuring 3D spatial audio, memory foam ear cushions, and dual wireless connectivity.',
    features: [
      'Advanced 50mm neodymium drivers',
      'Dual wireless (2.4GHz + Bluetooth 5.2)',
      'Active noise cancellation',
      'Retractable noise-cancelling microphone',
      'Memory foam ear cushions',
      'Up to 30 hours battery life'
    ],
    specs: {
      'Driver Size': '50mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 Ohms',
      'Microphone': 'Retractable with noise cancellation',
      'Wireless Range': '15m (2.4GHz)',
      'Battery': '30 hours (ANC on)',
      'Weight': '320g'
    },
    hasRGB: true,
    inStock: true
  },
  {
    id: '4',
    name: 'NEXUS P1 Gaming Mouse Pad',
    category: 'accessory',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7172886/pexels-photo-7172886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'The NEXUS P1 is an extended gaming mouse pad with a micro-weave cloth surface for optimal tracking precision and a non-slip rubber base.',
    features: [
      'Extended size (900mm x 400mm)',
      'Micro-weave cloth surface',
      'Non-slip rubber base',
      'Stitched edges for durability',
      'Water-resistant coating',
      'RGB edge lighting with 8 effects'
    ],
    specs: {
      'Material': 'Micro-weave cloth',
      'Dimensions': '900mm x 400mm x 4mm',
      'Lighting': 'RGB (USB powered)',
      'Base': 'Natural rubber',
      'Edge': 'Anti-fray stitched'
    },
    hasRGB: true,
    inStock: true
  },
  {
    id: '5',
    name: 'NEXUS K2 TKL Keyboard',
    category: 'keyboard',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A tenkeyless mechanical keyboard designed for competitive gamers featuring a compact layout, premium switches, and tournament-ready features.',
    features: [
      'Tenkeyless compact design',
      'Aluminum top plate',
      'Linear optical switches',
      'Doubleshot PBT keycaps',
      'Onboard memory for profiles',
      'Detachable USB-C cable'
    ],
    specs: {
      'Switch Type': 'NEXUS Optical Linear',
      'Actuation Point': '1.0mm',
      'Actuation Force': '45g',
      'Polling Rate': '8000Hz',
      'Dimensions': '360mm x 140mm x 35mm',
      'Weight': '850g'
    },
    hasRGB: true,
    inStock: true
  },
  {
    id: '6',
    name: 'NEXUS M1 Lightweight Mouse',
    category: 'mouse',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Ultra-lightweight gaming mouse weighing just 58g with a symmetrical design suitable for all grip styles and an advanced optical sensor.',
    features: [
      'Ultra-lightweight design (58g)',
      'Symmetrical shape for all grip styles',
      'NEXUS Optical sensor (19,000 DPI)',
      '100% PTFE feet',
      'Flexible paracord cable',
      'Six programmable buttons'
    ],
    specs: {
      'Sensor': 'NEXUS Optical 2.0',
      'Max DPI': '19,000',
      'Polling Rate': '1000Hz',
      'Buttons': '6 programmable',
      'Cable': 'Flexible paracord',
      'Weight': '58g'
    },
    hasRGB: false,
    inStock: true,
    isBestSeller: true
  },
  {
    id: '7',
    name: 'NEXUS A1 Audio Mixer',
    category: 'accessory',
    price: 129.99,
    image: 'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Take control of your audio with this compact mixer featuring dedicated sliders for game and chat audio, plus one-touch audio presets for streaming.',
    features: [
      'Dedicated game/chat audio balance',
      'Physical sliders for precise control',
      'One-touch audio presets',
      'Voice modulation effects',
      'RGB status indicators',
      'Compatible with all headsets'
    ],
    specs: {
      'Connections': 'USB-C, 3.5mm',
      'Sample Rate': '24-bit/96kHz',
      'Presets': '8 customizable',
      'Dimensions': '120mm x 80mm x 25mm',
      'Compatibility': 'PC, PS5, Xbox Series X/S'
    },
    hasRGB: true,
    inStock: true,
    isNew: true
  },
  {
    id: '8',
    name: 'NEXUS H2 Esports Headset',
    category: 'headset',
    price: 199.99,
    image: 'https://images.pexels.com/photos/8412464/pexels-photo-8412464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Tournament-grade wired headset designed for competitive play with precise directional audio, ultra-lightweight design, and passive noise isolation.',
    features: [
      'Tournament-grade directional audio',
      'Lightweight design (275g)',
      'Passive noise isolation',
      'Detachable boom microphone',
      'Memory foam ear cushions',
      'Inline audio controls'
    ],
    specs: {
      'Driver Size': '53mm',
      'Frequency Response': '10Hz - 30kHz',
      'Impedance': '35 Ohms',
      'Microphone': 'Detachable with pop filter',
      'Cable': '2m braided with inline controls',
      'Weight': '275g'
    },
    hasRGB: false,
    inStock: true
  }
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.isBestSeller || product.isNew);
};

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};