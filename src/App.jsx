import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Building2, Home, Droplets, ArrowRight, Download, Mail, MapPin, Menu, X, CheckCircle2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">NOVACOAT™</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Home", "About", "Services", "Capability", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
              >
                Get a Quote
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About", "Services", "Capability", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 MixBlendMode-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider mb-6 border border-blue-500/20">
            PREMIER PAINTING CONTRACTOR IN WEST BENGAL
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Brilliance in <span className="text-amber-500">Every Coat</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 mx-auto mb-10">
            Professional painting services for Residential, Commercial, and Government sectors. Delivering unmatched quality, durability, and aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              Explore Our Services <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#capability"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm"
            >
              <Download className="mr-2" size={20} /> Company Profile
            </a>
          </div>
        </motion.div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-t border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-slate-400 font-medium tracking-wide">
          <span className="flex items-center">
            <ShieldCheck className="mr-2 text-amber-500" size={18} /> GSTIN: 19ETDPD1549H1ZP
          </span>
          <span className="flex items-center">
            <ShieldCheck className="mr-2 text-amber-500" size={18} /> UDYAM-WB-13-0120926
          </span>
          <span className="flex items-center">
            <ShieldCheck className="mr-2 text-amber-500" size={18} /> TM Application: 7446471
          </span>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                alt="Painting Process"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-amber-500 p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-slate-900 mb-2">10+</p>
              <p className="text-slate-900 font-medium">
                Years of <br /> Excellence
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Building Trust Through <span className="text-amber-500">Quality Execution</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              NOVACOAT is a premier painting and coating contractor dedicated to transforming spaces with precision and durability. We specialize in residential,
              commercial, and government projects, ensuring every surface reflects our commitment to excellence.
            </p>

            <ul className="space-y-4 mb-8">
              {["Certified Government Contractor", "Premium Materials & Expert Application", "Strict Safety & Compliance Standards", "Timely Project Delivery"].map(
                (item, idx) => (
                  <li key={idx} className="flex items-center text-slate-200">
                    <CheckCircle2 className="text-blue-400 mr-3" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ),
              )}
            </ul>

            <p className="text-slate-400 italic border-l-4 border-amber-500 pl-4 py-2">
              "Under the leadership of Animesh Das, we have built a reputation for reliability and master craftsmanship across West Bengal."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Interior & Exterior Painting",
      desc: "Transforming homes and offices with premium, long-lasting finishes.",
      icon: <Home size={40} className="text-blue-400" />,
    },
    {
      title: "Waterproofing",
      desc: "Advanced protective coatings to safeguard structures against moisture and weather.",
      icon: <Droplets size={40} className="text-amber-500" />,
    },
    {
      title: "Industrial Coating",
      desc: "Heavy-duty paints for factories, warehouses, and industrial machinery.",
      icon: <Building2 size={40} className="text-blue-400" />,
    },
    {
      title: "Government Projects",
      desc: "Tender-ready contractor executing public infrastructure and institutional works.",
      icon: <ShieldCheck size={40} className="text-amber-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Core <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-lg text-slate-400">Comprehensive coating solutions customized to meet the rigorous demands of any environment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors group"
            >
              <div className="bg-slate-950 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{srv.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{srv.title}</h3>
              <p className="text-slate-400 leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capability = () => {
  return (
    <section id="capability" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-16 lg:flex items-center justify-between shadow-2xl">
          <div className="lg:w-2/3 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tender-Ready. Fully Compliant.</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl">
              We maintain meticulous compliance records to qualify for large-scale corporate and government tenders. Download our detailed profiles for your project
              evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium">
              <div className="bg-slate-950/50 px-4 py-3 rounded-lg border border-slate-800 flex items-center text-slate-300">
                <ShieldCheck className="text-amber-500 mr-2" size={20} />
                GST Compliant
              </div>
              <div className="bg-slate-950/50 px-4 py-3 rounded-lg border border-slate-800 flex items-center text-slate-300">
                <ShieldCheck className="text-amber-500 mr-2" size={20} />
                MSME Registered
              </div>
              <div className="bg-slate-950/50 px-4 py-3 rounded-lg border border-slate-800 flex items-center text-slate-300">
                <ShieldCheck className="text-amber-500 mr-2" size={20} />
                Registered Trademark
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-4">
            <button className="w-full flex items-center justify-between bg-white text-slate-900 px-6 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">
              <span>Company Profile</span>
              <Download size={20} />
            </button>
            <button className="w-full flex items-center justify-between bg-amber-500 text-slate-900 px-6 py-4 rounded-xl font-bold hover:bg-amber-400 transition-colors">
              <span>Tender-Ready Profile PDF</span>
              <Download size={20} />
            </button>
            <button className="w-full flex items-center justify-between bg-slate-800 text-white border border-slate-700 px-6 py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors">
              <span>Compliance Documents</span>
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let's Discuss Your <span className="text-amber-500">Next Project</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12">
              Whether you need residential beautification or industrial level coating solutions, Novacoat is ready to deliver.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-slate-900 p-4 rounded-xl mr-6 text-amber-500 border border-slate-800">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Email Us</h4>
                  <p className="text-slate-400">General: info@novacoat.co.in</p>
                  <p className="text-slate-400">Tenders: tender@novacoat.co.in</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-900 p-4 rounded-xl mr-6 text-amber-500 border border-slate-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Our Location</h4>
                  <p className="text-slate-400">Proprietor: Animesh Das</p>
                  <p className="text-slate-400">Village: Gangin, PO: Gangin</p>
                  <p className="text-slate-400">Murshidabad, PIN: 742223</p>
                  <p className="text-slate-400">West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">NOVACOAT™</span>
          <p className="text-slate-500 mt-2 text-sm">© {new Date().getFullYear()} NOVACOAT. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm text-slate-400 font-medium">
          <a href="#" className="hover:text-amber-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Capability />
      <Contact />
      <Footer />
    </div>
  );
}
