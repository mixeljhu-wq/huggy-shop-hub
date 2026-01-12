import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Engrave Your </span>
            <span className="gradient-text">Precious Moments</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Transform your cherished memories into timeless jewelry. Engrave photos of your loved ones, pets, or special moments on beautifully crafted necklaces and keychains.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gradient-bg text-primary-foreground px-8 py-4 rounded-full font-medium shadow-card hover:shadow-elevated transition-all hover:opacity-90"
            >
              Shop Now
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center justify-center bg-card border border-border px-8 py-4 rounded-full font-medium shadow-card hover:shadow-elevated transition-all hover:bg-accent"
            >
              View Collections
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
