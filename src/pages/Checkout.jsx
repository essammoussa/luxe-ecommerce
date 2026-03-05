import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => !value.trim())) {
      alert('Please fill in all fields');
      return;
    }
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (items.length === 0 && !showSuccess) {
    navigate('/cart');
    return null;
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white animate-fade-in">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-8" style={{ backgroundColor: '#0a0a0a' }}>
          <motion.div
            className="text-center max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-16 h-16 bg-white flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
            >
              <Check className="h-8 w-8 text-black" />
            </motion.div>
            <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-3">
              Confirmed
            </span>
            <h2 className="font-logo text-4xl md:text-6xl tracking-wide mb-6">
              Order Placed!
            </h2>
            <p className="font-sans font-light text-sm text-white/60 leading-relaxed mb-2">
              Thank you for your purchase, {formData.fullName}!
            </p>
            <p className="font-sans font-light text-sm text-white/40">
              Confirmation sent to {formData.email}
            </p>
            <p className="text-xs tracking-widest uppercase text-white/20 font-sans mt-8">
              Redirecting to home...
            </p>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const inputClass = "w-full bg-transparent border-b border-white/20 py-3 px-0 text-sm font-sans font-light text-white placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors";
  const labelClass = "text-xs tracking-widest uppercase text-white/40 font-sans block mb-2";

  return (
    <div className="min-h-screen flex flex-col text-white" style={{ backgroundColor: '#0a0a0a' }}>
      <Navbar />

      {/* Header */}
      <section className="px-8 md:px-24 py-16 border-b border-white/10" style={{ backgroundColor: '#0a0a0a' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-3">
            Final Step
          </span>
          <h1 className="font-logo text-5xl md:text-7xl tracking-wide">Checkout</h1>
        </motion.div>
      </section>

      <main className="flex-1 px-8 md:px-24 py-12" style={{ backgroundColor: '#0a0a0a' }}>
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#0a0a0a' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" style={{ backgroundColor: '#0a0a0a' }}>

            {/* Left — Form */}
            <div className="lg:col-span-2 flex flex-col gap-12" style={{ backgroundColor: '#0a0a0a' }}>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-8">
                  Contact Information
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+1 (555) 123-4567"
                      className={inputClass}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-8">
                  Shipping Address
                </span>
                <div className="flex flex-col gap-8">
                  <div>
                    <label className={labelClass}>Street Address</label>
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="123 Main Street, Apt 4B"
                      className={inputClass}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className={labelClass}>City</label>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="New York"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>ZIP Code</label>
                      <input
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        placeholder="10001"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — Order Summary */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ backgroundColor: '#0a0a0a' }}
            >
              <div className="border border-white/10 p-8 sticky top-24" style={{ backgroundColor: '#0a0a0a' }}>
                <span className="text-xs tracking-[0.4em] uppercase text-white/30 font-sans block mb-2">
                  Your Order
                </span>
                <h2 className="font-logo text-3xl tracking-wide mb-8">Summary</h2>

                <div className="flex flex-col gap-4 mb-8 pb-8 border-b border-white/10">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between items-start gap-4">
                      <div className="flex gap-3 items-start">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-14 h-14 object-cover shrink-0"
                        />
                        <div>
                          <p className="font-sans font-light text-sm text-white/70">{item.name}</p>
                          <p className="text-[10px] tracking-widest uppercase text-white/30 font-sans mt-0.5">
                            Size: {item.size} × {item.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="font-sans font-light text-sm text-white/70 shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs tracking-widest uppercase text-white/40 font-sans">Shipping</span>
                  <span className="font-sans font-light text-sm text-white/60">Free</span>
                </div>

                <div className="flex justify-between items-center mb-10 pb-8 border-b border-white/10">
                  <span className="text-xs tracking-widest uppercase text-white/40 font-sans">Total</span>
                  <span className="font-logo text-3xl text-white">${getTotalPrice().toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black text-xs tracking-widest uppercase font-sans font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                >
                  Place Order <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>

          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;