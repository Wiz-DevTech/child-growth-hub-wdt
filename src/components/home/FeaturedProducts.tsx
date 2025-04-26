
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { ProductProps } from "@/components/products/ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock product data
const mockProducts: ProductProps[] = [
  {
    id: "1",
    name: "Wooden Shape Sorter Toy",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjB0b3lzfGVufDB8fDB8fHww",
    ageGroup: "0-2",
    skills: ["motor", "cognitive"],
    rating: 4.5,
    isNew: true,
  },
  {
    id: "2",
    name: "Alphabet Puzzle Board",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1567822781105-a80d1c926a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxwaGFiZXQlMjBwdXp6bGV8ZW58MHx8MHx8fDA%3D",
    ageGroup: "3-5",
    skills: ["literacy", "motor"],
    rating: 5,
  },
  {
    id: "3",
    name: "STEM Building Blocks Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1560859251-d563a49c426f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nJTIwYmxvY2tzfGVufDB8fDB8fHww",
    ageGroup: "3-5",
    skills: ["stem", "motor", "creativity"],
    rating: 4,
    isNew: true,
  },
  {
    id: "4",
    name: "Science Experiment Kit",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1633250902100-3f17d94a3f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaWVuY2UlMjBraXQlMjBmb3IlMjBraWRzfGVufDB8fDB8fHww",
    ageGroup: "6-8",
    skills: ["stem"],
    rating: 4.5,
  },
  {
    id: "5",
    name: "Coding Robot for Kids",
    price: 89.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvYm90JTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",
    ageGroup: "6-8",
    skills: ["stem", "creativity"],
    rating: 5,
  },
  {
    id: "6",
    name: "Artistic Drawing Pad",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJhd2luZyUyMGZvciUyMGtpZHN8ZW58MHx8MHx8fDA%3D",
    ageGroup: "9-12",
    skills: ["creativity"],
    rating: 4,
  },
  {
    id: "7",
    name: "Musical Keyboard for Beginners",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1528383097473-a5a6f90ff8cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2V5Ym9hcmQlMjBtdXNpYyUyMGZvciUyMGtpZHN8ZW58MHx8MHx8fDA%3D",
    ageGroup: "6-8",
    skills: ["creativity"],
    rating: 4,
    isNew: true,
  },
  {
    id: "8",
    name: "Nature Explorer Kit",
    price: 34.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1501686637-b7aa9c48a882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZSUyMGV4cGxvcmF0aW9ufGVufDB8fDB8fHww",
    ageGroup: "9-12",
    skills: ["stem", "creativity"],
    rating: 4.5,
  },
];

const FeaturedProducts = () => {
  const [selectedTab, setSelectedTab] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  
  useEffect(() => {
    switch (selectedTab) {
      case "featured":
        setFilteredProducts(mockProducts.filter(p => p.rating >= 4.5).slice(0, 4));
        break;
      case "new":
        setFilteredProducts(mockProducts.filter(p => p.isNew).slice(0, 4));
        break;
      case "sale":
        setFilteredProducts(mockProducts.filter(p => p.originalPrice).slice(0, 4));
        break;
      default:
        setFilteredProducts(mockProducts.slice(0, 4));
    }
  }, [selectedTab]);

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Shop Our Products</h2>
          <Link 
            to="/products" 
            className="text-wdt-blue font-medium flex items-center hover:underline"
          >
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <Tabs defaultValue="featured" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="mb-8 bg-gray-100">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="new">New Arrivals</TabsTrigger>
            <TabsTrigger value="sale">On Sale</TabsTrigger>
          </TabsList>
          
          <TabsContent value="featured" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sale" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedProducts;
