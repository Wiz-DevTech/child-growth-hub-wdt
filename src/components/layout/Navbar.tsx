
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ageGroups = [
  { name: "Ages 0-2", href: "/products/age/0-2", description: "Early development toys and tools" },
  { name: "Ages 3-5", href: "/products/age/3-5", description: "Preschool learning products" },
  { name: "Ages 6-8", href: "/products/age/6-8", description: "Elementary education resources" },
  { name: "Ages 9-12", href: "/products/age/9-12", description: "Advanced learning tools" },
];

const skillCategories = [
  { name: "Motor Skills", href: "/products/skill/motor", description: "Fine and gross motor development" },
  { name: "Literacy", href: "/products/skill/literacy", description: "Reading and language development" },
  { name: "STEM", href: "/products/skill/stem", description: "Science, technology, engineering & math" },
  { name: "Creativity", href: "/products/skill/creativity", description: "Arts, music, and imaginative play" },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container py-4 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-wdt-blue">WDT</span>
          <span className="text-lg ml-2 hidden sm:block">Child Growth & Development</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop by Age</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {ageGroups.map((age) => (
                      <li key={age.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={age.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{age.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {age.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop by Skill</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {skillCategories.map((skill) => (
                      <li key={skill.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={skill.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{skill.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {skill.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className="font-medium">
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="font-medium">
                  About Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Search, Cart, Account Icons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-wdt-red text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link to="/login" className="p-2 rounded-full hover:bg-gray-100 hidden sm:flex">
            <User className="h-5 w-5" />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="p-2 rounded-full hover:bg-gray-100 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Search bar */}
      <div className={cn(
        "border-t absolute w-full bg-background transition-all duration-300 transform",
        isSearchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="container py-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <Input 
              type="text" 
              placeholder="Search products, age groups, skills..." 
              className="flex-1 mr-2"
            />
            <Button>Search</Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-background z-40 transform transition-transform duration-300 pt-20",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container py-6 flex flex-col gap-4">
          <h3 className="font-bold text-lg mb-2">Shop by Age</h3>
          {ageGroups.map((age) => (
            <Link 
              key={age.name}
              to={age.href}
              className="py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {age.name}
            </Link>
          ))}
          
          <h3 className="font-bold text-lg mt-4 mb-2">Shop by Skill</h3>
          {skillCategories.map((skill) => (
            <Link 
              key={skill.name}
              to={skill.href}
              className="py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {skill.name}
            </Link>
          ))}
          
          <div className="mt-4 flex flex-col gap-2">
            <Link 
              to="/blog"
              className="py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/about"
              className="py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/login"
              className="py-2 border-b"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
