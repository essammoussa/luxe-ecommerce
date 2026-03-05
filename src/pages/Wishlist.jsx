import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white animate fade in">
      <Navbar />

      <section className="px-8 md:px-24 py-16 border-b border-white/10">
        <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-3">
          Saved Items
        </span>
        <h1 className="font-logo text-5xl md:text-7xl tracking-wide">
          Wishlist
        </h1>
      </section>

      <main className="flex-1 px-8 md:px-24 py-12">
        {wishlist.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-logo text-4xl text-white/15 mb-3">Empty</p>
            <p className="text-xs tracking-widest uppercase text-white/25 font-sans mb-8">
              You haven't saved anything yet
            </p>
            <Link
              to="/products"
              className="text-xs tracking-widest uppercase border-b border-white/30 pb-0.5 text-white/50 hover:text-white transition-colors"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            <p className="text-xs tracking-[0.3em] uppercase text-white/25 font-sans mb-10">
              {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group relative flex flex-col bg-[#111110] border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="relative overflow-hidden aspect-[3/4] bg-[#161614]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>

                  <div className="p-4 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-sans font-light text-sm text-white/90">
                        {product.name}
                      </h3>
                      <p className="font-logo text-lg text-white mt-1">
                        ${product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="text-white/20 hover:text-white/60 transition-colors mt-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WishlistPage;