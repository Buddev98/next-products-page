import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Features noise cancellation and 30-hour battery life.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.8,
    isNew: true,
    discount: 10,
    createdAt: '2023-10-15T00:00:00.000Z'
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    description: 'Work in comfort with this ergonomic office chair. Adjustable height, lumbar support, and breathable mesh back.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Furniture',
    rating: 4.5,
    isNew: false,
    discount: 0,
    createdAt: '2023-09-20T00:00:00.000Z'
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, GPS, and water resistance.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.6,
    isNew: true,
    discount: 15,
    createdAt: '2023-11-05T00:00:00.000Z'
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    description: 'Stay comfortable and eco-friendly with this 100% organic cotton t-shirt. Available in multiple colors.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Clothing',
    rating: 4.3,
    isNew: false,
    discount: 0,
    createdAt: '2023-08-12T00:00:00.000Z'
  },
  {
    id: '5',
    name: 'Professional DSLR Camera',
    description: 'Capture stunning photos with this professional-grade DSLR camera. Includes 24.2MP sensor and 4K video recording.',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.9,
    isNew: false,
    discount: 5,
    createdAt: '2023-07-30T00:00:00.000Z'
  },
  {
    id: '6',
    name: 'Stainless Steel Water Bottle',
    description: 'Stay hydrated with this durable stainless steel water bottle. Keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    rating: 4.7,
    isNew: false,
    discount: 0,
    createdAt: '2023-09-05T00:00:00.000Z'
  },
  {
    id: '7',
    name: 'Wireless Gaming Mouse',
    description: 'Gain a competitive edge with this high-precision wireless gaming mouse. Features customizable RGB lighting and programmable buttons.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.5,
    isNew: true,
    discount: 0,
    createdAt: '2023-10-25T00:00:00.000Z'
  },
  {
    id: '8',
    name: 'Leather Messenger Bag',
    description: 'Carry your essentials in style with this genuine leather messenger bag. Features multiple compartments and adjustable strap.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Accessories',
    rating: 4.6,
    isNew: false,
    discount: 20,
    createdAt: '2023-08-18T00:00:00.000Z'
  },
  {
    id: '9',
    name: 'Smart Home Security Camera',
    description: 'Keep your home secure with this HD security camera. Features motion detection, night vision, and two-way audio.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/3643714/pexels-photo-3643714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.4,
    isNew: false,
    discount: 0,
    createdAt: '2023-09-15T00:00:00.000Z'
  },
  {
    id: '10',
    name: 'Ceramic Plant Pot Set',
    description: 'Add a touch of elegance to your indoor plants with this set of 3 ceramic pots in different sizes.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    rating: 4.2,
    isNew: true,
    discount: 10,
    createdAt: '2023-11-01T00:00:00.000Z'
  },
  {
    id: '11',
    name: 'Bluetooth Portable Speaker',
    description: 'Take your music anywhere with this waterproof portable speaker. Features 20-hour battery life and deep bass.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    rating: 4.3,
    isNew: false,
    discount: 15,
    createdAt: '2023-08-05T00:00:00.000Z'
  },
  {
    id: '12',
    name: 'Yoga Mat Premium',
    description: 'Enhance your yoga practice with this eco-friendly, non-slip yoga mat. Includes carrying strap.',
    price: 59.99,
    image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sports & Fitness',
    rating: 4.7,
    isNew: false,
    discount: 0,
    createdAt: '2023-10-10T00:00:00.000Z'
  }
];
