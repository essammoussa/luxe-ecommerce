import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';


const Navbar = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();
const { wishlist } = useWishlist();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/cart', label: 'Cart' },
    { to: '/contact', label: 'Contact' },
    { to: '/wishlist', label: 'Wishlist' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[hsl(var(--navbar-bg))] border-b border-[hsl(var(--navbar-border))] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="font-logo text-2xl font-bold tracking-tight text-[hsl(var(--navbar-text))] uppercase">LUXE</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`group relative text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[hsl(var(--navbar-text))] ${
                  location.pathname === link.to
                    ? 'text-[hsl(var(--navbar-text))] after:w-full'
                    : 'text-[hsl(var(--navbar-text-muted))] hover:text-[hsl(var(--navbar-text))] after:w-0 group-hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative text-[hsl(var(--navbar-text))] hover:text-[hsl(var(--navbar-text))] hover:bg-white/10">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>


          <Link to="/wishlist" className="relative">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-white text-black text-[9px] font-medium flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[hsl(var(--navbar-text))] hover:text-[hsl(var(--navbar-text))] hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--navbar-border))]">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-sm font-semibold uppercase tracking-[0.16em] rounded-md px-2 py-2 transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'text-[hsl(var(--navbar-text))] bg-white/5'
                      : 'text-[hsl(var(--navbar-text-muted))] hover:text-[hsl(var(--navbar-text))] hover:bg-white/5 hover:translate-x-1'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="h-px w-6 bg-[hsl(var(--navbar-border))] opacity-60" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
