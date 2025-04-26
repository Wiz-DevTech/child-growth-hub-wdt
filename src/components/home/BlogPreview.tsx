
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "Supporting Your Child's Early Literacy Development",
    excerpt: "Discover simple activities and tools to help your child develop strong reading skills from an early age.",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGQlMjByZWFkaW5nfGVufDB8fDB8fHww",
    category: "Literacy",
    author: "Dr. Emily Chen",
    date: "May 15, 2023",
  },
  {
    id: "2",
    title: "5 STEM Activities You Can Do at Home",
    excerpt: "Engage your child's curiosity with these simple science experiments and engineering challenges using household items.",
    image: "https://images.unsplash.com/photo-1569534418213-84d6165c2cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWxkcmVuJTIwbGVhcm5pbmclMjBzY2llbmNlfGVufDB8fDB8fHww",
    category: "STEM",
    author: "Mark Johnson",
    date: "April 28, 2023",
  },
  {
    id: "3",
    title: "Understanding Child Development Milestones",
    excerpt: "Learn about key developmental milestones from birth to age 12 and how to support your child's growth at each stage.",
    image: "https://images.unsplash.com/photo-1557408981-c62752d09d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFieSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    category: "Development",
    author: "Dr. Sarah Williams",
    date: "May 5, 2023",
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Family Blog</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover expert advice, educational activities, and parenting tips to support your child's growth journey.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="text-wdt-blue font-medium flex items-center hover:underline hidden md:flex"
          >
            View All Articles <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow card-hover">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-wdt-blue text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="font-semibold text-xl mb-2 hover:text-wdt-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-wdt-blue text-sm font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline">
            <Link to="/blog" className="flex items-center">
              View All Articles <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
