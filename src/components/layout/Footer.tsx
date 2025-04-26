
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-wdt-blue">WDT</span>
              <span className="text-sm ml-2">Child Growth & Development</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Educational products designed to support your child's development journey at every stage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-wdt-blue transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wdt-blue transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wdt-blue transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-wdt-blue transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-wdt-blue text-sm">All Products</Link></li>
              <li><Link to="/products/age/0-2" className="text-gray-600 hover:text-wdt-blue text-sm">Ages 0-2</Link></li>
              <li><Link to="/products/age/3-5" className="text-gray-600 hover:text-wdt-blue text-sm">Ages 3-5</Link></li>
              <li><Link to="/products/age/6-8" className="text-gray-600 hover:text-wdt-blue text-sm">Ages 6-8</Link></li>
              <li><Link to="/products/age/9-12" className="text-gray-600 hover:text-wdt-blue text-sm">Ages 9-12</Link></li>
              <li><Link to="/products/new" className="text-gray-600 hover:text-wdt-blue text-sm">New Arrivals</Link></li>
              <li><Link to="/products/sale" className="text-gray-600 hover:text-wdt-blue text-sm">Sale</Link></li>
            </ul>
          </div>
          
          {/* Company links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-wdt-blue text-sm">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-wdt-blue text-sm">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-wdt-blue text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-wdt-blue text-sm">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-wdt-blue text-sm">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Newsletter signup */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get exclusive offers, parenting tips, and development resources.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="max-w-[200px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} WDT Child Growth & Development. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-wdt-blue">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-wdt-blue">Terms of Service</Link>
              <Link to="/shipping" className="text-sm text-gray-500 hover:text-wdt-blue">Shipping Policy</Link>
              <Link to="/returns" className="text-sm text-gray-500 hover:text-wdt-blue">Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
