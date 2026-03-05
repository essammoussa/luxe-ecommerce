import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Navbar from "@/components/Navbar"

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="h-[250px] flex items-center px-16 md:px-24 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-sans block mb-3">
            Get In Touch
          </span>
          <h1 className="font-logo text-5xl md:text-7xl tracking-wide">
            Contact Us
          </h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="flex-1 grid grid-cols-1 md:grid-cols-2">

        {/* Left — Form */}
        <motion.div
          className="p-16 md:p-24 border-r border-white/10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-sans block mb-10">
            Send a Message
          </span>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-white/40 font-sans">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-white/40 font-sans">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-white/40 font-sans">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-white/40 font-sans">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us anything..."
                className="bg-transparent border-b border-white/20 py-3 text-white font-sans font-light text-sm focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/20 resize-none"
              />
            </div>

            <button className="mt-4 self-start px-10 py-4 border border-white text-white text-xs tracking-widest uppercase font-sans hover:bg-white hover:text-black transition-all duration-300">
              Send Message →
            </button>
          </div>
        </motion.div>

        {/* Right — Info */}
        <motion.div
          className="p-16 md:p-24 flex flex-col justify-between"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            <span className="text-xs tracking-[0.4em] uppercase text-white/40 font-sans block mb-10">
              Our Details
            </span>

            <div className="flex flex-col gap-10">
              <div className="flex items-start gap-5">
                <Mail className="w-4 h-4 text-white/40 mt-1 shrink-0" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/40 font-sans mb-1">Email</p>
                  <p className="font-sans font-light text-white/80">hello@luxe.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone className="w-4 h-4 text-white/40 mt-1 shrink-0" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/40 font-sans mb-1">Phone</p>
                  <p className="font-sans font-light text-white/80">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <MapPin className="w-4 h-4 text-white/40 mt-1 shrink-0" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-white/40 font-sans mb-1">Store</p>
                  <p className="font-sans font-light text-white/80 leading-relaxed">
                    123 Fashion Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-xs tracking-widest uppercase text-white/40 font-sans mb-6">Store Hours</p>
            <div className="flex flex-col gap-3 font-sans font-light text-sm text-white/60">
              <div className="flex justify-between">
                <span>Mon — Fri</span>
                <span>10:00 — 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 — 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactPage