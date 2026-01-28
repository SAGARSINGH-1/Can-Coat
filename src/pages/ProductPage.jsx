// ProductPage.jsx - CAN-COAT PREMIUM (Original Blue Theme - Data Only Updated)
import { motion } from 'framer-motion';
import { Phone, Mail, Download, Shield, Zap, SprayCan, Target, AlertCircle } from 'lucide-react';
import product from '../assets/product.png';
import ProductContainer from '../components/ProductContainer.jsx';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const ProductPage = () => {
    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/80 to-blue-100/50 py-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Hero Section - ORIGINAL LAYOUT */}
            <section className="py-12 px-4 md:py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                    {/* Product Image - ORIGINAL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="relative group cursor-pointer"
                    >
                        <motion.div
                            className="bg-gradient-to-br from-slate-100/30 to-blue-100/30 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-blue-200/50 group-hover:shadow-2xl transition-all duration-500"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src={product}
                                alt="Can-Coat Premium Spray Paint"
                                className="w-full max-w-sm mx-auto h-80 object-contain shadow-xl rounded-xl"
                                initial={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-br-lg font-bold text-xs shadow-lg"
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
                            >
                                NEW
                            </motion.div>
                            <motion.div
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-900/90 text-white px-4 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                            >
                                Industrial Grade
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Product Info - ORIGINAL */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="space-y-4">
                            <motion.div variants={itemVariants}>
                                <motion.h1
                                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent leading-tight"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Can-Coat Premium Spray Paint
                                </motion.h1>
                                <motion.p
                                    className="text-lg md:text-xl font-semibold text-slate-700 mt-1"
                                    initial={{ opacity: 0, y: -15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    Industrial Grade, Fast Drying, High Coverage
                                </motion.p>
                            </motion.div>

                            <motion.p
                                className="text-base md:text-lg text-slate-600 leading-relaxed max-w-md"
                                variants={itemVariants}
                            >
                                Can-Coat Premium Spray Paint is a high-performance, fast-drying industrial spray paint designed to deliver a smooth, durable, and long-lasting finish on powder-coated and pre-painted metal surfaces.
                            </motion.p>

                            {/* Contact Section - 100% ORIGINAL */}
                            <motion.div
                                className="bg-blue-100/80 border-2 border-blue-200 p-5 rounded-xl hover:shadow-xl transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.div
                                    className="flex items-center gap-2 mb-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <motion.div
                                        className="w-2.5 h-2.5 bg-blue-600 rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            backgroundColor: ["#1e40af", "#1d4ed8", "#1e40af"]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <span className="font-semibold text-blue-800 text-sm">Contact for Pricing & Bulk Orders</span>
                                </motion.div>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <motion.button
                                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Phone size={16} />
                                        <span>Call Now</span>
                                        <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full group-hover:bg-white/30 transition-colors">+91 9302237448</span>
                                    </motion.button>
                                    <motion.button
                                        className="flex items-center gap-2 border-2 border-slate-300 hover:border-blue-400 text-slate-700 font-semibold px-5 py-3 rounded-lg text-sm hover:bg-blue-50 transition-all duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Mail size={16} />
                                        Email Us
                                    </motion.button>
                                </div>
                            </motion.div>

                            <motion.div
                                className="text-xs md:text-sm text-slate-500"
                                variants={itemVariants}
                            >
                                <p>📦 Min Order: 50 cans | 🚚 Free delivery on 500+ cans</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className="border-t border-slate-200 my-12 mx-4 md:mx-0">
                <ProductContainer />
            </section>

            {/* Features Section - ORIGINAL */}
            <section className="py-12 px-4 md:py-16 bg-white/40 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-2xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent"
                    >
                        Industrial Grade Performance
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Zap, title: "Fast-Drying Formula", desc: "Surface becomes touch-dry within 5–10 minutes", color: "text-blue-600" },
                            { icon: Shield, title: "High Adhesion", desc: "Excellent bonding on metal & powder-coated surfaces", color: "text-blue-600" },
                            { icon: SprayCan, title: "Smooth Finish", desc: "No runs, dripping, unevenness, or patch marks", color: "text-blue-500" },
                            { icon: Target, title: "Industrial Durability", desc: "Rust-resistant, scratch-resistant protection", color: "text-blue-600" },
                            { icon: Download, title: "High Coverage", desc: "1.2–1.5 sqm per can", color: "text-blue-600" },
                            { icon: Shield, title: "Custom Shades", desc: "OEM color matching available", color: "text-blue-600" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(30,64,175,0.15)"
                                }}
                                className="group p-6 bg-gradient-to-b from-white to-blue-50/30 rounded-xl border border-blue-200/40 cursor-pointer hover:border-blue-300/60"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <feature.icon className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                                </motion.div>
                                <motion.h3
                                    className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900"
                                    whileHover={{ color: "#1e293b" }}
                                >
                                    {feature.title}
                                </motion.h3>
                                <p className="text-sm text-slate-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Technical Specifications - ORIGINAL */}
            <section className="py-12 px-4 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-2xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent"
                    >
                        Technical Specifications
                    </motion.h2>

                    <motion.div
                        className="grid lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-blue-200/50 shadow-md lg:col-span-1 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <motion.div
                                className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Download className="w-6 h-6 text-blue-600" />
                                Product Details
                            </motion.div>
                            <div className="space-y-3 text-xs md:text-sm">
                                {[
                                    { label: "Net Content", value: "300g / 440 ml" },
                                    { label: "Coverage", value: "1.2–1.5 sqm/can" },
                                    { label: "Surface Dry", value: "5 minutes" },
                                    { label: "Hard Dry", value: "20–30 minutes" },
                                    { label: "Spray Distance", value: "10–12 inches" },
                                    { label: "Recommended Coats", value: "2–3 light coats" }
                                ].map((spec, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex justify-between py-1 border-b border-blue-200/50 last:border-b-0 hover:bg-blue-50 p-1 rounded"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                    >
                                        <span>{spec.label}:</span>
                                        <span className="font-semibold text-blue-700">{spec.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Application Guide - ORIGINAL */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-blue-50/80 to-blue-100/50 p-6 rounded-xl border border-blue-200 shadow-md lg:col-span-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            whileHover={{ scale: 1.01 }}
                        >
                            <motion.div
                                className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Shield className="w-6 h-6 text-blue-600" />
                                Application Guide
                            </motion.div>

                            <motion.div
                                className="mb-6 p-4 bg-white/80 rounded-lg border-l-4 border-blue-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Perfect for powder-coated touch-up applications on fabricated parts, machinery, auto components, gates, grills, and industrial equipment.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-blue-600" />
                                        Directions to Use
                                    </h4>
                                    <ul className="space-y-2 text-xs text-slate-700">
                                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                            Shake vigorously for 60 seconds
                                        </motion.li>
                                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                            Clean surface - remove dust, oil, rust
                                        </motion.li>
                                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                            Spray 10-12" distance, 2-3 light coats
                                        </motion.li>
                                        <motion.li variants={itemVariants} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                            Upside down nozzle clear after use
                                        </motion.li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Pro Tips
                                    </h4>
                                    <ul className="space-y-2 text-xs text-slate-700">
                                        <motion.li variants={itemVariants}>15-35°C ideal temperature</motion.li>
                                        <motion.li variants={itemVariants}>Custom OEM shade matching</motion.li>
                                        <motion.li variants={itemVariants}>Polish after 24hr drying</motion.li>
                                    </ul>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-4 bg-blue-50/80 border border-blue-200 rounded-lg"
                            >
                                <div className="flex items-start gap-2 mb-2">
                                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <h4 className="font-semibold text-blue-900 text-sm">Safety Precautions</h4>
                                </div>
                                <ul className="space-y-1 text-xs text-blue-900 list-disc pl-5">
                                    <motion.li variants={itemVariants}>Highly flammable - no open flames</motion.li>
                                    <motion.li variants={itemVariants}>Well-ventilated areas only</motion.li>
                                    <motion.li variants={itemVariants}>Keep away from children</motion.li>
                                    <motion.li variants={itemVariants}>Do not puncture or incinerate</motion.li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default ProductPage;
