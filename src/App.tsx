
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Product routes */}
          <Route path="/products" element={<NotFound />} />
          <Route path="/products/:id" element={<NotFound />} />
          <Route path="/products/age/:age" element={<NotFound />} />
          <Route path="/products/skill/:skill" element={<NotFound />} />
          <Route path="/products/new" element={<NotFound />} />
          <Route path="/products/sale" element={<NotFound />} />
          
          {/* User account routes */}
          <Route path="/login" element={<NotFound />} />
          <Route path="/register" element={<NotFound />} />
          <Route path="/account" element={<NotFound />} />
          
          {/* Cart and checkout */}
          <Route path="/cart" element={<NotFound />} />
          <Route path="/checkout" element={<NotFound />} />
          
          {/* Blog routes */}
          <Route path="/blog" element={<NotFound />} />
          <Route path="/blog/:id" element={<NotFound />} />
          
          {/* Info pages */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/shipping" element={<NotFound />} />
          <Route path="/returns" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
