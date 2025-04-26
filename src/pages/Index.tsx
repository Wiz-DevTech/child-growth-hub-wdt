
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import BlogPreview from "@/components/home/BlogPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CategoriesGrid />
        
        {/* Call-to-action section */}
        <section className="py-16 bg-blue-600">
          <div className="container max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Expert-Designed Products for Every Age
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Discover educational toys and tools created by developmental experts to support your child's growth journey.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/products">Explore All Products</Link>
            </Button>
          </div>
        </section>
        
        <BlogPreview />
        
        {/* Newsletter signup */}
        <section className="py-16 bg-slate-50">
          <div className="container max-w-7xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Community</h2>
                  <p className="text-gray-600 mb-4">
                    Subscribe to receive developmental tips, activity ideas, and exclusive offers tailored to your child's age and interests.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-wdt-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Age-appropriate product recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-wdt-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Expert parenting and development tips</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-wdt-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Exclusive offers and early access to new products</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full border rounded-md p-2"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full border rounded-md p-2"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium mb-1">Child's Age Group</label>
                      <select 
                        id="childAge"
                        className="w-full border rounded-md p-2 bg-white"
                      >
                        <option value="">Select age group</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-8">6-8 years</option>
                        <option value="9-12">9-12 years</option>
                        <option value="multiple">Multiple age groups</option>
                      </select>
                    </div>
                    
                    <Button className="w-full">Subscribe to Newsletter</Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By subscribing, you agree to our Privacy Policy and consent to receive updates from WDT Child Growth & Development.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
