import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') setSearchParams({});
    else setSearchParams({ category });
  };

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
            Our Collection
          </span>
          <h1 className="font-logo text-5xl md:text-7xl tracking-wide">
            All Products
          </h1>
        </motion.div>
      </section>

      <main className="flex-1 px-8 md:px-24 py-12">

        {/* Filters Row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 text-xs tracking-widest uppercase font-sans transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white/40 border-white/15 hover:border-white/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-white/20 pl-9 pr-4 py-2.5 text-sm font-sans font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
        </motion.div>

        <p className="text-xs tracking-[0.3em] uppercase text-white/25 font-sans mb-10">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="font-logo text-4xl text-white/15 mb-3">No Results</p>
            <p className="text-xs tracking-widest uppercase text-white/25 font-sans">
              Try adjusting your filters or search
            </p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;