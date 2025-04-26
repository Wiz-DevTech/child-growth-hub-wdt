
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Motor Skills",
    description: "Toys and tools that develop fine and gross motor skills",
    image: "https://images.unsplash.com/photo-1596460100269-8e4df35a47e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3IlMjBza2lsbHMlMjB0b3lzfGVufDB8fDB8fHww",
    link: "/products/skill/motor",
  },
  {
    name: "Literacy",
    description: "Products that build reading and language skills",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjByZWFkaW5nfGVufDB8fDB8fHww",
    link: "/products/skill/literacy",
  },
  {
    name: "STEM",
    description: "Science, technology, engineering, and math learning tools",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlbSUyMGtpZHN8ZW58MHx8MHx8fDA%3D",
    link: "/products/skill/stem",
  },
  {
    name: "Creativity",
    description: "Art supplies, music tools, and imaginative play items",
    image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JlYXRpdml0eSUyMGtpZHN8ZW58MHx8MHx8fDA%3D",
    link: "/products/skill/creativity",
  },
];

const CategoriesGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Shop by Skill</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Discover products designed to develop specific skills at each stage of your child's development journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.name} className="group">
              <div className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-wdt-blue transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
