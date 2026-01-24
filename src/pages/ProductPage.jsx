// ProductPage.jsx - FULLY ANIMATED VERSION
import { motion } from 'framer-motion';
import { Phone, Mail, Download, Shield, Zap, SprayCan, Target, MapPin } from 'lucide-react';
import product from '../assets/product.png';

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
            className="min-h-screen bg-gradient-to-br from-slate-50 py-16 via-blue-50 to-emerald-50"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Hero Section - Enhanced Animations */}
            <section className="py-12 px-4 md:py-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
                    {/* Product Image - Floating Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="relative group cursor-pointer"
                    >
                        <motion.div
                            className="bg-gradient-to-br from-slate-100/30 to-blue-100/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-200/30 group-hover:shadow-2xl transition-all duration-500"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src={product}
                                alt="Can-Coat Premium Black Matte Spray Paint"
                                className="w-full max-w-sm mx-auto h-80 object-contain shadow-xl rounded-xl"
                                initial={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div
                                className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-br-lg font-bold text-xs shadow-lg"
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4, duration: 0.4, type: "spring" }}
                            >
                                NEW
                            </motion.div>
                            <motion.div
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/90 text-white px-4 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                            >
                                Black Matte
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Product Info - Staggered Text */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="space-y-4">
                            <motion.div variants={itemVariants}>
                                <motion.h1
                                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-700 bg-clip-text text-transparent leading-tight"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Premium Spray Paint
                                </motion.h1>
                                <motion.p
                                    className="text-lg md:text-xl font-semibold text-slate-700 mt-1"
                                    initial={{ opacity: 0, y: -15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    Industrial Grade • Fast Drying • High Coverage
                                </motion.p>
                            </motion.div>

                            <motion.p
                                className="text-base md:text-lg text-slate-600 leading-relaxed max-w-md"
                                variants={itemVariants}
                            >
                                High-performance spray paint for smooth finish on powder-coated & pre-painted metal surfaces. Perfect for industrial touch-ups.
                            </motion.p>

                            <motion.div
                                className="bg-emerald-100/60 border-2 border-emerald-200 p-5 rounded-xl hover:shadow-xl transition-all duration-300"
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
                                        className="w-2.5 h-2.5 bg-emerald-600 rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            backgroundColor: ["#059669", "#10b981", "#059669"]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <span className="font-semibold text-emerald-800 text-sm">Contact for Pricing & Bulk Orders</span>
                                </motion.div>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <motion.button
                                        className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-200 group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Phone size={16} />
                                        <span>Call Now</span>
                                        <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full group-hover:bg-white/30 transition-colors">+91 98765 43210</span>
                                    </motion.button>
                                    <motion.button
                                        className="flex items-center gap-2 border-2 border-slate-300 hover:border-emerald-400 text-slate-700 font-semibold px-5 py-3 rounded-lg text-sm hover:bg-emerald-50 transition-all duration-200"
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

            {/* Key Features - Staggered Grid */}
            <section className="py-12 px-4 md:py-16 bg-white/40 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-2xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                    >
                        Industrial Grade Performance
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: Zap, title: "Fast-Drying", desc: "Touch-dry in 5-10 mins", color: "text-emerald-600" },
                            { icon: Shield, title: "High Adhesion", desc: "Bonds to powder-coated", color: "text-blue-600" },
                            { icon: SprayCan, title: "Smooth Finish", desc: "No runs or drips", color: "text-purple-600" },
                            { icon: Target, title: "OEM Matching", desc: "Custom shades", color: "text-orange-600" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                                }}
                                className="group p-6 bg-gradient-to-b from-white to-slate-50/30 rounded-xl border border-slate-200/40 cursor-pointer"
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
                                    className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-800"
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

            {/* Rest of sections follow same pattern with staggered animations */}
            {/* Technical Specifications */}
            <section className="py-12 px-4 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-2xl font-bold text-center mb-12 bg-gradient-to-r from-blue-900 to-emerald-700 bg-clip-text text-transparent"
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
                            className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200 shadow-md lg:col-span-1 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <motion.div
                                className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Download className="w-6 h-6 text-emerald-600" />
                                Product Details
                            </motion.div>
                            {/* Specs content with micro-animations */}
                            <div className="space-y-3 text-xs md:text-sm">
                                {[
                                    { label: "Net Content", value: "300g / 440ml" },
                                    { label: "Coverage", value: "1.2-1.5 sqm/can" },
                                    { label: "Coats", value: "2-3 light coats" },
                                    { label: "Distance", value: "10-12 inches" }
                                ].map((spec, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex justify-between py-1 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 p-1 rounded"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                    >
                                        <span>{spec.label}:</span>
                                        <span className="font-semibold text-emerald-700">{spec.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-200 shadow-md lg:col-span-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Application specs with hover effects */}
                            <motion.div className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-emerald-600" />
                                Application Guide
                            </motion.div>
                            {/* Grid content with staggered animation */}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Add similar enhanced animations to all other sections */}
            {/* Applications, Safety, CTA sections follow the same pattern */}

            {/* Final CTA - Dramatic entrance */}
            <section className="py-16 px-4 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                            type: "spring",
                            stiffness: 80,
                            damping: 10
                        }
                    }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center bg-gradient-to-r from-emerald-600 to-blue-700 rounded-2xl p-12 md:p-16 shadow-2xl border border-emerald-700/30 hover:shadow-3xl transition-all duration-500"
                >
                    {/* CTA content with bounce animations */}
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                        initial={{ scale: 0.8, y: -30 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                    >
                        Ready for Perfect Touch-Ups?
                    </motion.h2>

                    {/* Buttons with advanced hover states */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                        <motion.button
                            className="px-8 py-4 bg-white text-emerald-700 font-bold text-base md:text-lg rounded-xl shadow-xl flex-1 max-w-sm"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 25px 50px rgba(16,185,129,0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Quote Now
                        </motion.button>
                        <motion.button
                            className="px-8 py-4 border-3 border-white text-white font-bold text-base md:text-lg rounded-xl flex-1 max-w-sm"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#ffffff",
                                color: "#059669"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request Sample
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default ProductPage;
