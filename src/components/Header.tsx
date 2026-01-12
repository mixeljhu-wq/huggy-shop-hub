import { Heart, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Heart className="w-7 h-7 text-primary fill-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-semibold text-foreground font-display">
              Engraved Moments
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/collections"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/login"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              to="/cart"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 gradient-bg text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
