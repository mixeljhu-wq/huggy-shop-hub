import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Home, ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto relative z-10">
          {/* Animated 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <span className="text-[180px] md:text-[220px] font-display font-bold gradient-text leading-none select-none">
              404
            </span>
            
            {/* Floating heart decoration */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Heart className="w-16 h-16 text-primary/20 fill-primary/10" />
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              Oops! Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We couldn't find the treasure you're looking for. 
              The page may have been moved, deleted, or perhaps it never existed.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="gradient-bg hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full shadow-card transition-all hover:shadow-elevated"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-card hover:bg-accent px-8 py-6 text-base font-medium rounded-full shadow-card transition-all hover:shadow-elevated"
            >
              <Link to="/products">
                <Search className="w-5 h-5 mr-2" />
                Browse Products
              </Link>
            </Button>
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Go back to previous page
            </button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-secondary/5 blur-3xl"
        />
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
