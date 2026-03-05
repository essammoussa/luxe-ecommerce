import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white animate-fade-in">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center">
            <ShoppingBag className="h-40 w-16 mx-auto text-white/10 mb-8" />
            <p className="font-logo text-4xl text-white/20 mb-3">Empty</p>
            <p className="text-xs tracking-widest uppercase text-white/30 font-sans mb-10">
              Your cart has no items yet
            </p>
            <Link
              to="/products"
              className="text-xs tracking-widest uppercase font-sans text-white/50 hover:text-white transition-colors border-b border-white/20 pb-0.5"
            >
              Browse Collection
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Navbar />

      <section className="px-8 md:px-24 py-16 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-3">
            Your Order
          </span>
          <h1 className="font-logo text-5xl md:text-7xl tracking-wide">Shopping Cart</h1>
        </motion.div>
      </section>

      <main className="flex-1 px-8 md:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Cart Items */}
       <div className="lg:col-span-2 flex flex-col divide-y divide-white/10">
            {items.map((item, index) => (
              <motion.div
                key={`${item.id}-${item.size}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
             className="flex gap-6 p-6 bg-[#0a0a0a] items-center border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <Link to={`/product/${item.id}`} className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans mb-1">
                    Size: {item.size}
                  </p>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-sans font-light text-white/90 hover:text-white transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="font-logo text-xl text-white mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between gap-4">
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-white/20 hover:text-white/60 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="flex items-center border border-white/10">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="px-3 py-2 hover:bg-white/5 transition-colors text-white/50 hover:text-white"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-10 text-center text-sm font-sans font-light text-white/80">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="px-3 py-2 hover:bg-white/5 transition-colors text-white/50 hover:text-white"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#111110] border border-white/5 p-8 sticky top-24">
              <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-2">
                Summary
              </span>
              <h2 className="font-logo text-3xl tracking-wide mb-8">Order Total</h2>

              <div className="flex flex-col gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase text-white/40 font-sans">Subtotal</span>
                  <span className="font-sans font-light text-white/80">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-widest uppercase text-white/40 font-sans">Shipping</span>
                  <span className="font-sans font-light text-white/80">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-xs tracking-widest uppercase text-white/40 font-sans">Total</span>
                <span className="font-logo text-3xl text-white">${getTotalPrice().toFixed(2)}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-white text-black text-xs tracking-widest uppercase font-sans font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 mb-4"
              >
                Proceed to Checkout <ArrowRight className="w-3 h-3" />
              </button>

              <Link to="/products">
                <button className="w-full py-4 bg-transparent text-white/50 text-xs tracking-widest uppercase font-sans border border-white/10 hover:border-white/30 hover:text-white transition-all">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;