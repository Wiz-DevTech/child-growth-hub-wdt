
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  ageGroup: string;
  skills: string[];
  rating: number;
  isNew?: boolean;
  inStock?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  ageGroup,
  skills,
  rating,
  isNew = false,
  inStock = true,
}: ProductProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Helper to render age group badge
  const renderAgeBadge = (age: string) => {
    switch (age) {
      case '0-2':
        return <span className="age-badge age-badge-0-2">Ages 0-2</span>;
      case '3-5':
        return <span className="age-badge age-badge-3-5">Ages 3-5</span>;
      case '6-8':
        return <span className="age-badge age-badge-6-8">Ages 6-8</span>;
      case '9-12':
        return <span className="age-badge age-badge-9-12">Ages 9-12</span>;
      default:
        return <span className="age-badge bg-gray-100 text-gray-800">All Ages</span>;
    }
  };
  
  // Helper to render skill badges
  const renderSkillBadge = (skill: string) => {
    switch (skill.toLowerCase()) {
      case 'motor':
        return <span key={skill} className="skill-badge skill-motor">Motor Skills</span>;
      case 'literacy':
        return <span key={skill} className="skill-badge skill-literacy">Literacy</span>;
      case 'stem':
        return <span key={skill} className="skill-badge skill-stem">STEM</span>;
      case 'creativity':
        return <span key={skill} className="skill-badge skill-creativity">Creativity</span>;
      default:
        return <span key={skill} className="skill-badge bg-gray-100 text-gray-800">{skill}</span>;
    }
  };

  // Helper to render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <div className="flex items-center">{stars}</div>;
  };

  return (
    <div className="relative rounded-lg bg-white border card-hover overflow-hidden">
      {/* Product badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {isNew && (
          <span className="bg-wdt-blue text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {originalPrice && price < originalPrice && (
          <span className="bg-wdt-red text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )}
      </div>
      
      {/* Wishlist button */}
      <button 
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm hover:shadow"
      >
        <Heart 
          size={20} 
          className={cn(
            isWishlisted ? "fill-wdt-red text-wdt-red" : "text-gray-400"
          )} 
        />
      </button>

      {/* Product image */}
      <Link to={`/products/${id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {renderAgeBadge(ageGroup)}
        </div>
          
        <Link to={`/products/${id}`}>
          <h3 className="font-medium text-lg mb-1 line-clamp-2 hover:text-wdt-blue transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-wrap gap-1 mt-1 mb-2">
            {skills.slice(0, 2).map(skill => renderSkillBadge(skill))}
          </div>
          {renderStars(rating)}
        </div>
          
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
            
          <Button 
            size="sm"
            disabled={!inStock}
            className="rounded-full"
          >
            <ShoppingCart size={16} className="mr-1" />
            {inStock ? "Add" : "Sold Out"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
