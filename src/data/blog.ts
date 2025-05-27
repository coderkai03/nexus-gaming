import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    "id": "6c247c65-f1e0-46e9-87ba-da3c449549af",
    "title": "Top 5 Gaming Keyboards of 2025",
    "excerpt": "We tested the best mechanical keyboards for speed, comfort, and RGB customization.",
    "content": "We tested the best mechanical keyboards for speed, comfort, and RGB customization. Here's everything you need to know about top 5 gaming keyboards of 2025... From hands-on tests to real gamer feedback, we break it all down in this comprehensive article.",
    "image": "/images/keyboard.jpg",
    "date": "2025-05-03",
    "author": "Morgan Brooks",
    "category": "news"
  },
  {
    "id": "e427ffba-2da0-4604-8d8f-cc3567fffde7",
    "title": "How to Optimize Your Gaming Setup",
    "excerpt": "Simple tips to enhance performance, aesthetics, and ergonomics in your space.",
    "content": "Simple tips to enhance performance, aesthetics, and ergonomics in your space. Here's everything you need to know about how to optimize your gaming setup... From hands-on tests to real gamer feedback, we break it all down in this comprehensive article.",
    "image": "/images/game-setup.png",
    "date": "2025-04-08",
    "author": "Taylor Chen",
    "category": "guide"
  },
  {
    "id": "3e26bfdd-e608-44ce-a93b-dbfa489366f9",
    "title": "Razer Launches New Wireless Mouse",
    "excerpt": "Razer's latest wireless innovation is turning heads across the esports world.",
    "content": "Razer's latest wireless innovation is turning heads across the esports world. Here's everything you need to know about razer launches new wireless mouse... From hands-on tests to real gamer feedback, we break it all down in this comprehensive article.",
    "image": "/images/razer-mouse.jpg",
    "date": "2025-05-06",
    "author": "Sam Rivera",
    "category": "news"
  },
  {
    "id": "e122dbbd-d171-4247-aed9-bffb6e53bb80",
    "title": "Best Budget Gaming Mice",
    "excerpt": "Affordable gaming mice that don\u2019t compromise on performance.",
    "content": "Affordable gaming mice that don't compromise on performance. Here's everything you need to know about best budget gaming mice... From hands-on tests to real gamer feedback, we break it all down in this comprehensive article.",
    "image": "/images/gaming-mice.webp",
    "date": "2025-03-07",
    "author": "Morgan Brooks",
    "category": "review"
  },
];

export const getRecentBlogPosts = () => {
  return [...blogPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 3);
};

export const getBlogPostById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};