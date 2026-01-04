import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

export function ProductCard({ image, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -8, rotateX: 2 }}
            className="group relative rounded-2xl bg-gradient-to-b from-white/90 to-slate-50 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-slate-200/50 p-6 h-full overflow-hidden cursor-pointer"
        >
            {/* Shimmer badge */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-3 -right-3 w-20 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold flex items-center justify-center rounded-2xl shadow-lg"
            >
                NEW
            </motion.div>

            {/* Image with overlay */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                {/* Gradient overlay on hover */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                />
            </div>

            {/* Content slide up */}
            <motion.div
                initial={{ y: 8, opacity: 0.9 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative"
            >
                <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-1 group-hover:text-slate-950">
                    {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {description}
                </p>
            </motion.div>

            {/* Glow button */}
            <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 px-5 rounded-xl font-semibold text-sm shadow-lg overflow-hidden group/button"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-[120%] group-hover/button:translate-x-[120%] transition-transform duration-1000" />
                <span className="relative z-10">View Details →</span>
            </motion.button>

            {/* Subtle glow ring */}
            <motion.div
                animate={{
                    boxShadow: [
                        "0 0 0 0 rgba(16,185,129,0.4)",
                        "0 0 0 20px rgba(16,185,129,0)",
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-2xl -z-10 opacity-0 group-hover:opacity-100"
            />
        </motion.div>
    );
}

// 2. Hero Banner - WITH CAN-COAT LOGO + CURSOR POINTERS
export function HeroBanner({ title, subtitle, ctaText, image }) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 py-20">
            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-5"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                    >
                        Professional Spray Solutions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                    >
                        {title}
                    </motion.h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-md leading-relaxed">
                        {subtitle}
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3"
                    >
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold text-base shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
                        >
                            {ctaText}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            className="cursor-pointer border border-white/40 hover:border-white/70 text-white px-8 py-3.5 rounded-xl font-medium backdrop-blur-sm transition-all duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="relative"
                >
                    <img
                        src={image}
                        alt="Professional spray paint application"
                        className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
}

// 3. Category Filter Button
export function CategoryFilter({ active, label, onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: active ? 1.05 : 1 }}
            className={`cursor-pointer px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${active
                ? "bg-emerald-500 text-white shadow-md shadow-emerald-400/30"
                : "bg-white/70 text-slate-700 hover:bg-white shadow-sm hover:shadow-md"
                }`}
            onClick={onClick}
        >
            {label}
        </motion.button>
    );
}

// 4. FAQ Section - WITH CURSOR POINTERS
export function FAQSection() {
    return (
        <section className="py-20 bg-gradient-to-r from-slate-50 to-slate-100">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Have a Quick Look
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We know the questions in your mind
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left - Video/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="aspect-video bg-gradient-to-br rounded-3xl shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                    <svg className="w-12 h-12 ml-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <img
                                src="https://th.bing.com/th/id/OIP.jKNZoEoh-dK0-44ZBWTHlAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                                alt="Remove Scratches with Can-Coat"
                                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-500"
                            />
                        </div>
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl shadow-xl rotate-12 opacity-60"></div>
                        <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-slate-800">
                            Watch Video
                        </div>
                    </motion.div>

                    {/* Right - FAQ Questions */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="flex items-start gap-3 p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl border border-white/50 hover:border-emerald-200/50 transition-all duration-300">
                            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white font-bold text-sm">Q</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-slate-900 text-base mb-1">
                                    Can I do it myself?
                                </p>
                                <p className="text-sm text-slate-600">
                                    Yes! Our 7-step kit is designed for easy DIY application.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl border border-white/50 hover:border-emerald-200/50 transition-all duration-300">
                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white font-bold text-sm">Q</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-slate-900 text-base mb-1">
                                    Will the color match?
                                </p>
                                <p className="text-sm text-slate-600">
                                    Computerized color matching with 200+ automotive shades.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-5 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl border border-white/50 hover:border-emerald-200/50 transition-all duration-300">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white font-bold text-sm">Q</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-slate-900 text-base mb-1">
                                    What if color doesn't match?
                                </p>
                                <p className="text-sm text-slate-600">
                                    Free replacement within 30 days with color verification.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/30 transition-all"
                            >
                                See More FAQs
                            </motion.button>
                            <a
                                href="https://wa.me/91958291715"
                                className="cursor-pointer bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all"
                            >
                                💬 WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Can-Coat Logo Component
export function CanCoatLogo({ className = "w-24" }) {
    return (
        <div className={`flex flex-col ${className}`}>
            <span className="font-['Playfair_Display'] italic font-black text-[20px] leading-none tracking-[-0.02em] bg-gradient-to-r from-[#1e40af] to-[#1d4ed8] bg-clip-text text-transparent">
                Can-Coat
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-800 inline-block w-full whitespace-nowrap -mt-[1px]">
                PREMIUM SPRAY PAINT
            </span>
        </div>
    );
}


export function TestimonialsSection() {
    const testimonials = [
        {
            text:
                "Can-Coat has won my trust with their Value Pack Kit. It saved me time and money, and the quality of the touch-up is outstanding. A fantastic product I’ll keep coming back to.",
            name: "BEENU TOMS",
            city: "Bengaluru",
            rating: 5,
        },
        {
            text:
                "Color matching was accurate and the finish looked professional. The instructions were clear and the application felt easy even for a first-timer.",
            name: "RAHUL SHARMA",
            city: "Gurugram",
            rating: 5,
        },
        {
            text:
                "Great coverage and quick drying. The overall kit quality is solid and the final result blended well with the original paint.",
            name: "PRIYA VERMA",
            city: "Delhi",
            rating: 4,
        },
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const t = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4500);

        return () => clearInterval(t);
    }, [testimonials.length]);

    const current = testimonials[index];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-16 md:py-20">
            {/* soft glow blobs */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative">
                {/* Headings */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-white"
                >
                    <p className="text-[11px] tracking-[0.35em] uppercase text-emerald-300/90">
                        Client’s Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
                        What They Are Saying
                    </h2>
                    <p className="mt-5 max-w-4xl mx-auto text-sm md:text-base text-slate-200/90 leading-relaxed">
                        We focus on consistent finish, dependable performance, and clear
                        application guidance. Here’s what customers say after using Can-Coat.
                    </p>
                </motion.div>

                {/* Card slider */}
                <div className="mt-10 md:mt-12 flex justify-center">
                    <div className="w-full max-w-4xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16, scale: 0.99 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -16, scale: 0.99 }}
                                transition={{ duration: 0.45 }}
                                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-7 md:p-10"
                            >
                                {/* top accent line */}
                                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-400/60 via-cyan-400/20 to-transparent rounded-t-3xl" />

                                <p className="text-slate-100/90 italic text-sm md:text-base leading-relaxed">
                                    “{current.text}”
                                </p>

                                <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                                    <div>
                                        <div className="flex gap-1">
                                            {Array.from({ length: current.rating }).map((_, i) => (
                                                <span key={i} className="text-emerald-400 text-base">
                                                    ★
                                                </span>
                                            ))}
                                            {Array.from({ length: 5 - current.rating }).map((_, i) => (
                                                <span key={i} className="text-white/20 text-base">
                                                    ★
                                                </span>
                                            ))}
                                        </div>

                                        <p className="mt-2 font-extrabold tracking-wide text-white">
                                            {current.name}
                                        </p>
                                        <p className="text-slate-300 text-sm">{current.city}</p>
                                    </div>

                                    {/* Dots */}
                                    <div className="flex gap-2">
                                        {testimonials.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setIndex(i)}
                                                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${i === index ? "bg-emerald-400" : "bg-white/25"
                                                    }`}
                                                aria-label={`Go to testimonial ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
