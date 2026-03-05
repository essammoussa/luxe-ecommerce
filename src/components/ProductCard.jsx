import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';

const ProductCard = ({ product, index = 0 }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col bg-[#111110] border border-white/5 hover:border-white/20 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#161614]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-white/40 transition-all"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              isWishlisted(product.id) ? 'fill-white text-white' : 'text-white/50'
            }`}
          />
        </button>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="text-[10px] tracking-widest uppercase font-sans px-2 py-1 bg-white text-black">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick Shop */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link to={`/product/${product.id}`}>
            <button className="w-full py-3 bg-white text-black text-xs tracking-widest uppercase font-sans font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
              Quick Shop <ArrowUpRight className="w-3 h-3" />
            </button>
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans mb-1">
            {product.category}
          </p>
          <h3 className="font-sans font-light text-sm text-white/90 leading-snug">
            {product.name}
          </h3>
        </div>
        <p className="font-logo text-lg text-white shrink-0">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;