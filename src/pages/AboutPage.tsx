import React from 'react';
import { BrainCircuit as Circuit, Target, Award, Shield, Users, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-dark-950">
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gaming setup"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/95 to-dark-950" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-mono font-bold text-4xl md:text-5xl text-white mb-6">
              About <span className="text-primary-400">NEXUS</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Founded in 2022, NEXUS is dedicated to creating premium gaming peripherals that combine cutting-edge technology, exceptional build quality, and minimalist design. We're gamers building for gamers.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission section */}
      <section className="py-20 bg-dark-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mono font-bold text-3xl text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At NEXUS, we believe that premium gaming gear shouldn't just perform exceptionally—it should be built to last, feel incredible to use, and enhance your setup with clean, sophisticated design.
              </p>
              <p className="text-gray-300 mb-6">
                We're on a mission to eliminate the compromise between performance and aesthetics. Every product we create undergoes rigorous testing by professional esports athletes to ensure it delivers the precision and reliability demanded by competitive gaming.
              </p>
              <p className="text-gray-300">
                Whether you're a professional competitor or a passionate enthusiast, NEXUS equipment is engineered to elevate your gaming experience to the next level.
              </p>
            </div>
            <div className="bg-dark-800 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary-400" />
                  </div>
                  <h3 className="font-mono font-bold text-xl text-white mb-2">Precision</h3>
                  <p className="text-gray-400">Industry-leading sensor technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary-400" />
                  </div>
                  <h3 className="font-mono font-bold text-xl text-white mb-2">Quality</h3>
                  <p className="text-gray-400">Premium materials built to last</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center mx-auto mb-4">
                    <Circuit className="h-8 w-8 text-primary-400" />
                  </div>
                  <h3 className="font-mono font-bold text-xl text-white mb-2">Innovation</h3>
                  <p className="text-gray-400">Cutting-edge technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-400" />
                  </div>
                  <h3 className="font-mono font-bold text-xl text-white mb-2">Reliability</h3>
                  <p className="text-gray-400">3-year comprehensive warranty</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team section */}
      <section className="py-20 bg-dark-950">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-mono font-bold text-3xl text-white mb-4">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Founded by gamers, built by engineers, tested by professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-900 rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Alex Chen, CEO"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-mono font-bold text-xl text-white mb-1">Alex Chen</h3>
                <p className="text-primary-400 mb-4">CEO & Co-Founder</p>
                <p className="text-gray-400">
                  Former esports professional with a passion for creating gear that meets the demands of competitive play.
                </p>
              </div>
            </div>
            
            <div className="bg-dark-900 rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Williams, CTO"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-mono font-bold text-xl text-white mb-1">Sarah Williams</h3>
                <p className="text-primary-400 mb-4">CTO & Co-Founder</p>
                <p className="text-gray-400">
                  Hardware engineer with extensive experience in sensor technology and peripheral design.
                </p>
              </div>
            </div>
            
            <div className="bg-dark-900 rounded-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Marcus Johnson, Design Director"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-mono font-bold text-xl text-white mb-1">Marcus Johnson</h3>
                <p className="text-primary-400 mb-4">Design Director</p>
                <p className="text-gray-400">
                  Industrial designer focused on creating peripherals that combine aesthetics with ergonomic excellence.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partners section */}
      <section className="py-20 bg-dark-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-mono font-bold text-3xl text-white mb-4">Our Partners</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're proud to work with some of the most talented teams and individuals in gaming
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-8 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
              <div className="text-center">
                <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                <span className="font-mono font-bold text-white">Team Alpha</span>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
              <div className="text-center">
                <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                <span className="font-mono font-bold text-white">Omega Esports</span>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
              <div className="text-center">
                <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                <span className="font-mono font-bold text-white">Nexus Gaming</span>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
              <div className="text-center">
                <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                <span className="font-mono font-bold text-white">Pro Circuit</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-dark-950">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-mono font-bold text-3xl text-white mb-6">
              Join the NEXUS Community
            </h2>
            <p className="text-gray-300 mb-8">
              Experience premium gaming peripherals designed for competitive play and aesthetic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/shop" size="lg">
                Shop Now
              </Button>
              <Button as={Link} to="/support" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;