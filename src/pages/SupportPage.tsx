import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, HelpCircle, FileText, Send } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

type FaqItem = {
  question: string;
  answer: string;
};

const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'contact'>('faq');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    orderId: '',
    subject: '',
    message: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    alert('Form submitted! In a real application, this would connect to your backend.');
    // Reset form
    setFormState({
      name: '',
      email: '',
      orderId: '',
      subject: '',
      message: ''
    });
  };

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const faqs: FaqItem[] = [
    {
      question: 'What is your shipping policy?',
      answer: 'We offer free standard shipping on all orders over $100. Standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout. International shipping is available to select countries.'
    },
    {
      question: 'How do I return a product?',
      answer: 'If you\'re not satisfied with your purchase, you can return it within 30 days for a full refund. Products must be in their original packaging and in unused condition. To start a return, visit your order history and select the order containing the item you wish to return.'
    },
    {
      question: 'What warranty do your products have?',
      answer: 'All NEXUS products come with a standard 3-year warranty that covers manufacturing defects and hardware failure under normal use. Our premium products include an extended 5-year warranty. Warranty does not cover damage from accidents, misuse, or unauthorized modifications.'
    },
    {
      question: 'How do I install drivers for my NEXUS product?',
      answer: 'You can download the latest drivers and software for your NEXUS products from our downloads page. Our NEXUS Command Center software allows you to customize your peripherals, set up macros, and synchronize RGB lighting across all your NEXUS devices.'
    },
    {
      question: 'Are replacement parts available?',
      answer: 'Yes, we offer replacement parts for most of our products, including keycaps, cables, ear cushions, and mouse feet. Visit our accessories section to find compatible replacement parts for your specific model.'
    },
    {
      question: 'My product isn\'t working properly. What should I do?',
      answer: 'First, ensure your product has the latest firmware and drivers installed. If the issue persists, consult our troubleshooting guides in the support section. If you still need assistance, please contact our support team with details about your issue.'
    },
    {
      question: 'Do you offer bulk discounts for businesses or teams?',
      answer: 'Yes, we offer special pricing for businesses, educational institutions, and esports organizations. Please contact our business sales team at business@nexus.com for more information on bulk orders and custom solutions.'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-dark-950">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-mono font-bold text-3xl md:text-4xl text-white mb-4">Support</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get the help you need with your NEXUS products
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-dark-900 rounded-lg p-1">
            <button
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'faq'
                  ? 'bg-primary-500 text-dark-950'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('faq')}
            >
              <HelpCircle size={16} className="inline mr-2" />
              FAQs
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium ${
                activeTab === 'contact'
                  ? 'bg-primary-500 text-dark-950'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              <MessageSquare size={16} className="inline mr-2" />
              Contact Us
            </button>
          </div>
        </div>

        {/* FAQ Content */}
        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-900 rounded-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`border-b border-dark-800 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <span className={`transform transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                      <svg
                        className="w-5 h-5 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-dark-900 rounded-lg p-6">
              <h3 className="font-mono font-bold text-xl text-white mb-4">
                Didn't find what you're looking for?
              </h3>
              <p className="text-gray-400 mb-4">
                Our support team is ready to help with any questions or issues you may have.
              </p>
              <Button 
                onClick={() => setActiveTab('contact')}
                icon={<MessageSquare size={16} />}
              >
                Contact Support
              </Button>
            </div>
          </div>
        )}

        {/* Contact Content */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-dark-900 rounded-lg p-6">
                <h2 className="font-mono font-bold text-2xl text-white mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="orderId" className="block text-sm font-medium text-gray-300 mb-1">
                        Order ID (if applicable)
                      </label>
                      <input
                        type="text"
                        id="orderId"
                        name="orderId"
                        value={formState.orderId}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-support">Product Support</option>
                        <option value="order-status">Order Status</option>
                        <option value="return-request">Return Request</option>
                        <option value="warranty-claim">Warranty Claim</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full p-3 bg-dark-800 border border-dark-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    icon={<Send size={16} />}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-dark-900 rounded-lg p-6 sticky top-24">
                <h3 className="font-mono font-bold text-xl text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start">
                      <Mail className="text-primary-400 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium text-white mb-1">Email Support</h4>
                        <p className="text-gray-300">support@nexus.com</p>
                        <p className="text-gray-400 text-sm mt-1">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start">
                      <Phone className="text-primary-400 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium text-white mb-1">Phone Support</h4>
                        <p className="text-gray-300">1-800-NEXUS</p>
                        <p className="text-gray-400 text-sm mt-1">Mon-Fri: 9am - 6pm EST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-start">
                      <FileText className="text-primary-400 mr-3 mt-1" size={20} />
                      <div>
                        <h4 className="font-medium text-white mb-1">Documentation</h4>
                        <p className="text-gray-300">
                          Visit our <a href="#" className="text-primary-400 hover:underline">Knowledge Base</a> for product manuals, guides, and troubleshooting information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-dark-800">
                  <h4 className="font-medium text-white mb-3">Business Hours</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9am - 6pm EST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10am - 4pm EST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default SupportPage;