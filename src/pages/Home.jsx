import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Absolutely love the quality. Every piece I\'ve bought has exceeded my expectations.',
    rating: 5,
    location: 'New York',
  },
  {
    name: 'James R.',
    text: 'Finally found a brand that understands modern fashion without compromising on comfort.',
    rating: 5,
    location: 'London',
  },
  {
    name: 'Emily K.',
    text: 'The attention to detail is incredible. These are wardrobe staples I\'ll keep for years.',
    rating: 5,
    location: 'Paris',
  },
];

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '200+', label: 'Premium Styles' },
  { value: '4.9', label: 'Average Rating' },
  { value: '30-Day', label: 'Free Returns' },
];

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/imgs/heroimg4.jpg')",
            backgroundPosition: 'center 10%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 text-left text-white px-6 sm:px-10 md:px-16 lg:px-24 max-w-3xl">
          <motion.span
            className="inline-block text-xs font-medium tracking-[0.4em] uppercase mb-6 text-white/60 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            New Season 2026
          </motion.span>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-[1.05]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Spring<br />
            <span className="italic">Collection</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg mb-10 text-white/70 max-w-md leading-relaxed font-light font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the latest trends in fashion — curated for those who dare to stand out
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/products">
              <button className="bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-sans font-medium px-10 py-4 text-xs tracking-widest uppercase flex items-center gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-8 md:px-24">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-3">Curated for you</span>
          <h2 className="font-logo text-4xl md:text-6xl tracking-wide">Featured Products</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 flex justify-between items-center">
          <p className="text-xs tracking-widest uppercase text-white/25 font-sans">
            {featuredProducts.length} Featured Pieces
          </p>
          <Link
            to="/products"
            className="text-xs tracking-widest uppercase font-sans text-white/50 hover:text-white transition-colors border-b border-white/20 pb-0.5 flex items-center gap-2"
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 md:px-24 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-[#0a0a0a] px-8 py-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="font-logo text-4xl md:text-5xl text-white mb-2">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-8 md:px-24 border-t border-white/10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-3">Browse</span>
          <h2 className="font-logo text-4xl md:text-6xl tracking-wide">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {['Men', 'Women', 'Shoes', 'Accessories'].map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products?category=${category}`}
                className="group relative h-80 overflow-hidden block bg-[#111110]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${
                      category === 'Men' ? 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500' :
                      category === 'Women' ? 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500' :
                      category === 'Shoes' ? 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500' :
                      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500'
                    })`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans mb-1">Explore</p>
                  <h3 className="font-logo text-3xl text-white tracking-wide">{category}</h3>
                  <span className="text-white/40 text-xs tracking-widest uppercase font-sans mt-2 group-hover:text-white transition-colors flex items-center gap-1">
                    Shop now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="py-4 bg-white overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-black font-sans font-medium text-xs tracking-[0.3em] uppercase mx-8">
              Free shipping on orders over $100 ✦ New arrivals weekly ✦ Premium quality guaranteed ✦
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 md:px-24 border-t border-white/10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-3">Reviews</span>
          <h2 className="font-logo text-4xl md:text-6xl tracking-wide">What They Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-[#0a0a0a] p-10 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Quote className="h-6 w-6 text-white/10 mb-6" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-white/40 text-white/40" />
                ))}
              </div>
              <p className="text-white/60 leading-relaxed mb-8 font-sans font-light text-sm">
                "{t.text}"
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-sans font-medium text-white/80 text-sm">{t.name}</p>
                <p className="text-xs tracking-widest uppercase text-white/30 font-sans mt-1">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 md:px-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#111110]" />
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-4">Join Us</span>
          <h2 className="font-logo text-4xl md:text-6xl tracking-wide mb-6">
            Elevate Your<br />
            <span className="italic">Wardrobe</span>
          </h2>
          <p className="text-white/50 font-sans font-light text-sm leading-relaxed mb-10 max-w-md">
            Get exclusive access to new arrivals, special offers, and style inspiration delivered to your inbox.
          </p>
          <Link to="/products">
            <button className="bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-sans font-medium px-10 py-4 text-xs tracking-widest uppercase flex items-center gap-2">
              Explore Collection <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;