
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="container max-w-7xl mx-auto py-16 md:py-24 flex flex-col lg:flex-row items-center">
        {/* Left side (text content) */}
        <div className="lg:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Support Your</span>
            <span className="text-wdt-blue">Child's Growth</span>
            <span className="block">Every Step</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Discover educational toys and tools designed by experts to nurture your child's development at every age and stage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-wdt-blue hover:bg-blue-700 text-white">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        
        {/* Right side (image) */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
          <div className="relative max-w-md">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-wdt-yellow rounded-full opacity-70 animate-float" style={{ animationDelay: "0s" }}></div>
            <div className="absolute top-32 -right-12 w-32 h-32 bg-wdt-green rounded-full opacity-60 animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -bottom-10 left-16 w-28 h-28 bg-wdt-pink rounded-full opacity-60 animate-float" style={{ animationDelay: "2s" }}></div>
            
            <img 
              src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2564&auto=format&fit=crop" 
              alt="Children playing with educational toys" 
              className="rounded-lg shadow-2xl relative z-10 border-4 border-white"
            />
          </div>
        </div>
      </div>
      
      {/* Age group quick links */}
      <div className="bg-white py-6 shadow-md">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/products/age/0-2" className="group p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-wdt-pink/20 flex items-center justify-center mb-2 group-hover:bg-wdt-pink/30">
                  <span className="text-wdt-pink font-bold">0-2</span>
                </div>
                <span className="font-medium group-hover:text-wdt-pink">Infant & Toddler</span>
              </div>
            </Link>
            
            <Link to="/products/age/3-5" className="group p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-wdt-blue/20 flex items-center justify-center mb-2 group-hover:bg-wdt-blue/30">
                  <span className="text-wdt-blue font-bold">3-5</span>
                </div>
                <span className="font-medium group-hover:text-wdt-blue">Preschool</span>
              </div>
            </Link>
            
            <Link to="/products/age/6-8" className="group p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-wdt-green/20 flex items-center justify-center mb-2 group-hover:bg-wdt-green/30">
                  <span className="text-wdt-green font-bold">6-8</span>
                </div>
                <span className="font-medium group-hover:text-wdt-green">Early Elementary</span>
              </div>
            </Link>
            
            <Link to="/products/age/9-12" className="group p-4 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-wdt-purple/20 flex items-center justify-center mb-2 group-hover:bg-wdt-purple/30">
                  <span className="text-wdt-purple font-bold">9-12</span>
                </div>
                <span className="font-medium group-hover:text-wdt-purple">Upper Elementary</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
