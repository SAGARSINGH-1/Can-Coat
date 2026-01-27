import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import productVideo from "../assets/product.mp4";
import Imglogo from "../assets/logo.png";

// 1. ProductCard - BLUE THEME
export function ProductCard({ image, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -8, rotateX: 2 }}
            className="group relative rounded-2xl bg-gradient-to-b from-white/90 to-blue-50/50 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-blue-200/50 p-6 h-full overflow-hidden cursor-pointer"
        >
            {/* Shimmer badge - BLUE */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-3 -right-3 w-20 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center rounded-2xl shadow-lg"
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

            {/* Glow button - BLUE */}
            <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(30,64,175,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-5 rounded-xl font-semibold text-sm shadow-lg overflow-hidden group/button"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-[120%] group-hover/button:translate-x-[120%] transition-transform duration-1000" />
                <span className="relative z-10">View Details →</span>
            </motion.button>

            {/* Subtle glow ring - BLUE */}
            <motion.div
                animate={{
                    boxShadow: [
                        "0 0 0 0 rgba(30,64,175,0.4)",
                        "0 0 0 20px rgba(30,64,175,0)",
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

// 2. HeroBanner - BLUE THEME
export function HeroBanner({ title, subtitle, ctaText, image }) {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-950 py-20">
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
                        className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
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
                            onClick={() => { navigate("/product") }}
                            className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-base shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            {ctaText}
                        </motion.button>
                        <motion.button
                            onClick={() => { navigate("/contact") }}
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

// 3. CategoryFilter - BLUE THEME
export function CategoryFilter({ active, label, onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: active ? 1.05 : 1 }}
            className={`cursor-pointer px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${active
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-400/30"
                : "bg-white/70 text-slate-700 hover:bg-white shadow-sm hover:shadow-md"
                }`}
            onClick={onClick}
        >
            {label}
        </motion.button>
    );
}

// 4. FAQSection - BLUE THEME
export function FAQSection() {
    let navigate = useNavigate();

    return (
        <section className="py-20 bg-gradient-to-r from-slate-50 via-blue-50/50 to-blue-100/30">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent mb-4">
                        Have a Quick Look
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We know the questions in your mind
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left - FIXED VIDEO PLAYER */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="aspect-video bg-gradient-to-br rounded-3xl shadow-2xl overflow-hidden">
                            <video
                                src={productVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="w-full h-full object-cover"
                                poster="https://th.bing.com/th/id/OIP.jKNZoEoh-dK0-44ZBWTHlAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                            />
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center opacity-0 transition-all duration-300">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                                    <svg className="w-10 h-10 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Label - BLUE */}
                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-400">
                            <span className="font-semibold text-blue-800 text-base">Watch Video</span>
                        </div>
                        {/* Decoration - BLUE */}
                        <div className="absolute -top-12 -right-12 bg-blue-500 text-white px-3 py-1 rounded-br-lg font-bold text-xs shadow-lg rotate-[-15deg]">
                            PLAY
                        </div>
                    </motion.div>

                    {/* Right - FAQ DESIGN - BLUE THEME */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {/* Q1 - Blue accent */}
                        <div className="flex items-start gap-3 p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white font-semibold text-xs">Q</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-blue-900 text-base mb-1">
                                    Can I do it myself?
                                </p>
                                <p className="text-xs text-slate-700 mt-1">
                                    Yes! It is designed for easy DIY application.
                                </p>
                            </div>
                        </div>

                        {/* Q2 - Blue accent */}
                        <div className="flex items-start gap-3 p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white font-semibold text-xs">Q</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-blue-900 text-base mb-1">
                                    Will the color match?
                                </p>
                                <p className="text-xs text-slate-700 mt-1">
                                    Computerized color matching with 200+ industrial shades.
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons - BLUE + WhatsApp */}
                        <div className="flex items-center gap-3 pt-2">
                            <motion.button
                                onClick={() => navigate("/faq")}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
                            >
                                See FAQs
                            </motion.button>
                            <a
                                href="https://wa.me/91958291715"
                                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
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

// TestimonialsSection.jsx - Blue Theme
export function TestimonialsSection() {
    const testimonials = [
        {
            text: "Can-Coat has truly earned my trust with its excellent quality at an affordable price. It saved my both time and money, and the finish after touch-ups is outstanding. It’s a fantastic product that I’ll happily keep coming back to.",
            name: "Rishab Jain",
            city: "Jaipur",
            rating: 5,
        },
        {
            text: "The color matching was accurate, and the finish looked professional. The instructions were clear, and the application felt easy—even for a first-timer.",
            name: "Tinu Pal",
            city: "Manesar",
            rating: 5,
        },
        {
            text: "Great coverage and quick drying. The overall kit quality is solid and the final result blended well with the original paint.",
            name: "Manoj Sharma",
            city: "Gurgaon",
            rating: 5,
        },
        {
            text: "Great coverage and quick drying. The overall kit quality is solid and the final result blended well with the original paint.",
            name: "Sanjay",
            city: "Gurgaon",
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
            {/* soft glow blobs (blue version) */}
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative">
                {/* Headings */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-white"
                >
                    <p className="text-[11px] tracking-[0.35em] uppercase text-blue-300/90">
                        Client’s Testimonials
                    </p>
                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text">
                        What They Are Saying
                    </h2>
                    <p className="mt-5 max-w-4xl mx-auto text-sm md:text-base text-slate-200/90 leading-relaxed">
                        We focus on consistent finish, dependable performance, and clear application guidance. Here’s what customers say after using Can-Coat.
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
                                {/* top accent line (blue) */}
                                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-400/60 via-blue-500/20 to-transparent rounded-t-3xl" />

                                <p className="text-slate-100/90 italic text-sm md:text-base leading-relaxed">
                                    “{current.text}”
                                </p>

                                <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                                    <div>
                                        <div className="flex gap-1">
                                            {Array.from({ length: current.rating }).map((_, i) => (
                                                <span key={i} className="text-blue-400 text-base">
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
                                                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${i === index ? "bg-blue-400" : "bg-white/25"}`}
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

// StatsCounter.jsx - Blue Theme
export function StatsCounter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { number: 2000, suffix: "+", label: "Color Shades" },
        { number: 150, suffix: "+", label: "Happy Customers" },
        { number: 99.9, suffix: "%", label: "Customer Satisfaction" }
    ];

    const CountUp = ({ finalNumber, suffix, shouldAnimate }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!shouldAnimate) return;

            let start = 0;
            const end = finalNumber;
            const duration = 2500;
            const stepTime = Math.abs(Math.floor(duration / end));
            let timer;

            const updateCount = () => {
                start += 1;
                setCount(start);

                if (start >= end) {
                    clearInterval(timer);
                    setCount(end);
                }
            };

            timer = setInterval(updateCount, stepTime);
            return () => clearInterval(timer);
        }, [shouldAnimate, finalNumber]);

        return (
            <motion.span
                className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {count.toLocaleString()}
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 ml-1">
                    {suffix}
                </span>
            </motion.span>
        );
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-blue-100/30">
            <div ref={ref} className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial="hidden"
                    animate={isInView ? "animate" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        animate: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -8,
                                boxShadow: "0 25px 50px rgba(30,64,175,0.15)"
                            }}
                            className="group relative p-8 md:p-10 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 border border-white/50 hover:border-blue-200/50 transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* Counter */}
                            <CountUp
                                finalNumber={stat.number}
                                suffix={stat.suffix}
                                shouldAnimate={isInView}
                            />

                            {/* Label */}
                            <motion.p
                                variants={{
                                    hidden: { opacity: 0 },
                                    animate: { opacity: 1 }
                                }}
                                className="mt-4 text-sm md:text-base font-semibold text-slate-700 tracking-wide uppercase leading-tight"
                            >
                                {stat.label}
                            </motion.p>

                            {/* Glow effect (blue) */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0, 0.1, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
