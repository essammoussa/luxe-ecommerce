import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#111110] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[hsl(var(--navbar-text))] uppercase tracking-tight">LUXE</h3>
            <p className="text-sm text-[hsl(var(--navbar-text-muted))] leading-relaxed">
              Premium clothing for the modern lifestyle. Quality you can trust.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--navbar-text))] uppercase text-sm tracking-wide">Shop</h4>
            <ul className="space-y-2 text-sm text-[hsl(var(--navbar-text-muted))]">
              <li><Link to="/products?category=Men" className="hover:text-[hsl(var(--navbar-text))] transition-colors">Men</Link></li>
              <li><Link to="/products?category=Women" className="hover:text-[hsl(var(--navbar-text))] transition-colors">Women</Link></li>
              <li><Link to="/products?category=Shoes" className="hover:text-[hsl(var(--navbar-text))] transition-colors">Shoes</Link></li>
              <li><Link to="/products?category=Accessories" className="hover:text-[hsl(var(--navbar-text))] transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--navbar-text))] uppercase text-sm tracking-wide">Help</h4>
            <ul className="space-y-2 text-sm text-[hsl(var(--navbar-text-muted))]">
              <li><a href="#" className="hover:text-[hsl(var(--navbar-text))] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--navbar-text))] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[hsl(var(--navbar-text))] transition-colors">Size Guide</a></li>
              <li> <Link to="/contact" className="hover:text-[hsl(var(--navbar-text))] transition-colors">  Contact Us    </Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--navbar-text))] uppercase text-sm tracking-wide">Newsletter</h4>
            <p className="text-sm text-[hsl(var(--navbar-text-muted))] mb-4 leading-relaxed">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm bg-white/10 border border-[hsl(var(--navbar-border))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-[hsl(var(--navbar-text))] placeholder:text-[hsl(var(--navbar-text-muted))]"
              />
              <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md uppercase tracking-wide border border-transparent hover:border-white hover:bg-black hover:text-white transition-all duration-200">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[hsl(var(--navbar-border))] text-center text-sm text-[hsl(var(--navbar-text-muted))]">
          <p>&copy; 2026 LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
