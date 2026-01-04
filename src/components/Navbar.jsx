import { motion } from "framer-motion";
import { CanCoatLogo } from "./AnimatedComponents";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow"
        >
            <div className="max-w-[1200px] mx-auto px-6 py-2.5">
                <div className="flex items-center justify-between h-[50px]">
                    <motion.a href="/" whileHover={{ scale: 1.01 }}>
                        <CanCoatLogo className="w-[82px]" />
                    </motion.a>

                    <ul className="flex items-center gap-8">
                        {["Home", "Products", "About", "Contact"].map((label) => (
                            <li key={label}>
                                <a
                                    href={`/${label.toLowerCase()}`}
                                    className="text-slate-700 hover:text-black font-medium text-sm"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side: Phone + Social */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="tel:+91958291715"
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center gap-1.5 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold px-3.5 py-1.5 rounded-[6px] shadow-sm hover:shadow-md transition-all"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            95829 1715
                        </motion.a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition cursor-pointer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-slate-700 text-sm" />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition cursor-pointer"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-slate-700 text-sm" />
                            </a>

                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition cursor-pointer"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="text-slate-700 text-sm" />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-slate-700 text-sm" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
