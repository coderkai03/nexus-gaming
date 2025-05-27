import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Science of Switch Selection: Finding Your Perfect Keyboard',
    excerpt: 'Understanding the differences between linear, tactile, and clicky switches to optimize your gaming experience.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2025-04-15',
    author: 'Alex Chen',
    category: 'guide'
  },
  {
    id: '2',
    title: 'NEXUS M2 Ultra: Breaking Performance Barriers',
    excerpt: 'Our in-depth review of the new NEXUS M2 Ultra gaming mouse and how it compares to the competition.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    image: 'https://images.pexels.com/photos/3654768/pexels-photo-3654768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2025-04-10',
    author: 'Samantha Wong',
    category: 'review'
  },
  {
    id: '3',
    title: 'Optimizing Your Audio Setup for Competitive FPS Games',
    excerpt: 'Learn how to configure your headset and audio settings to gain a competitive edge in first-person shooters.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    image: 'https://images.pexels.com/photos/8412420/pexels-photo-8412420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2025-04-05',
    author: 'Marcus Johnson',
    category: 'guide'
  },
  {
    id: '4',
    title: 'Next-Gen Gaming Peripherals Revealed at Tech Summit 2025',
    excerpt: 'Coverage of the latest gaming peripheral announcements from the annual Tech Summit event.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    image: 'https://images.pexels.com/photos/7172886/pexels-photo-7172886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2025-03-28',
    author: 'Elena Reyes',
    category: 'news'
  }
];

export const getRecentBlogPosts = () => {
  return [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 3);
};

export const getBlogPostById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};