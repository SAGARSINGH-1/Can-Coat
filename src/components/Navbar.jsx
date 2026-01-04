import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CanCoatLogo } from "./AnimatedComponents";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTimes } from "react-icons/fa";  // ✅ FaTimes not FaXmark

export function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-white shadow backdrop-blur-sm"
            >
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2.5">
                    <div className="flex items-center justify-between h-[50px]">
                        <motion.a href="/" whileHover={{ scale: 1.01 }} className="flex-shrink-0">
                            <CanCoatLogo className="w-[75px] sm:w-[82px]" />
                        </motion.a>

                        <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
                            <ul className="flex items-center gap-6 lg:gap-8">
                                {["Home", "Products", "About", "Contact"].map((label) => (
                                    <li key={label}>
                                        <a
                                            href={`/${label.toLowerCase()}`}
                                            className="text-slate-700 hover:text-black font-medium text-sm whitespace-nowrap"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-2">
                                <motion.a
                                    href="tel:+91958291715"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-1 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold px-2.5 py-1.5 rounded-[6px] shadow-sm hover:shadow-md transition-all whitespace-nowrap"
                                >
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    95829 1715
                                </motion.a>

                                <div className="flex items-center gap-1">
                                    {[
                                        { icon: FaFacebookF, href: "https://facebook.com" },
                                        { icon: FaInstagram, href: "https://instagram.com" },
                                        { icon: FaYoutube, href: "https://youtube.com" },
                                        { icon: FaLinkedinIn, href: "https://linkedin.com" },
                                    ].map(({ icon: Icon, href }) => (
                                        <a
                                            key={href}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all text-slate-700 hover:text-slate-900"
                                        >
                                            <Icon className="text-xs" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-1 relative z-50"
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed top-[50px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-xl border-t"
                    >
                        <div className="max-w-[1200px] mx-auto px-4 py-4">
                            <div className="space-y-3">
                                <ul className="space-y-2">
                                    {["Home", "Products", "About", "Contact"].map((label) => (
                                        <li key={label}>
                                            <motion.a
                                                href={`/${label.toLowerCase()}`}
                                                className="block py-2 px-3 text-lg font-medium text-slate-700 hover:text-black hover:bg-slate-100 rounded-lg"
                                                onClick={() => setIsMobileOpen(false)}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {label}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-3 pb-2 border-t border-slate-200">
                                    <motion.a
                                        href="tel:+91958291715"
                                        className="block w-full py-2 px-3 text-base font-semibold text-[#16a34a] hover:text-[#15803d] hover:bg-slate-100 rounded-lg"
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        📞 95829 1715
                                    </motion.a>

                                    <div className="flex gap-2 mt-3">
                                        {[
                                            { icon: FaFacebookF, href: "https://facebook.com" },
                                            { icon: FaInstagram, href: "https://instagram.com" },
                                            { icon: FaYoutube, href: "https://youtube.com" },
                                            { icon: FaLinkedinIn, href: "https://linkedin.com" },
                                        ].map(({ icon: Icon, href }) => (
                                            <a
                                                key={href}
                                                href={href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all"
                                            >
                                                <Icon className="text-sm" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
