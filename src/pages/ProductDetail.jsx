import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const product = products.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-logo text-4xl text-white/20 mb-6">Not Found</p>
            <button
              onClick={() => navigate('/products')}
              className="text-xs tracking-widest uppercase font-sans text-white/50 hover:text-white transition-colors border-b border-white/20 pb-0.5 flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image,
    });
    toast.success('Added to cart', {
      description: `${product.name} (Size: ${selectedSize})`,
      action: { label: 'View Cart', onClick: () => navigate('/cart') },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Navbar />

      <main className="flex-1 px-8 md:px-24 py-12">

        {/* Back */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-xs tracking-widest uppercase font-sans text-white/30 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Images */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#111110]">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden border transition-all ${
                      selectedImage === index ? 'border-white/60' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans mb-3">
                {product.category}
              </p>
              <h1 className="font-logo text-4xl md:text-6xl tracking-wide mb-4">
                {product.name}
              </h1>
              <p className="font-logo text-3xl text-white">${product.price.toFixed(2)}</p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="font-sans font-light text-sm text-white/60 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-widest uppercase text-white/40 font-sans">Select Size</span>
                {selectedSize && (
                  <span className="text-xs text-white/40 font-sans">Selected: {selectedSize}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 text-xs tracking-widest uppercase font-sans border transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-white text-black text-xs tracking-widest uppercase font-sans font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`w-14 border flex items-center justify-center transition-all duration-300 ${
                  isWishlisted(product.id)
                    ? 'bg-white border-white text-black'
                    : 'border-white/15 text-white/40 hover:border-white/40 hover:text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted(product.id) ? 'fill-black' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
              {[
                { title: 'Free Shipping', sub: 'On orders over $100' },
                { title: 'Easy Returns', sub: '30-day return policy' },
                { title: 'Secure Payment', sub: 'Your data is protected' },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <Check className="h-4 w-4 text-white/30 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans font-light text-sm text-white/80">{f.title}</p>
                    <p className="text-xs text-white/30 font-sans mt-0.5">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;