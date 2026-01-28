import { motion } from "framer-motion";
import Imglogo from "../assets/logo.png";

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-14 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-900"
        >
            <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-4">
                {/* Logo & Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <img
                        src={Imglogo}
                        alt="Can-Coat Premium Spray Paint"
                        className="h-auto w-24 object-contain mb-0 mt-[-23px]"
                        loading="lazy"
                    />
                    <div className="text-sm text-slate-600 space-y-2">
                        <div className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Gali No. 3, Ward No. 13
                                Kashmiri Colony, Bahadur Road
                                Bahadurgarh-124507
                                Distt. Jhajjar, Haryana
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span>+91 93022 37448</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <span>cancot0425@gmail.com</span>
                        </div>
                    </div>
                </motion.div>

                {/* Useful Links - NO BOX, just content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h4 className="text-base font-semibold text-slate-900 mb-4">Useful Links</h4>
                    <ul className="text-sm text-slate-700 space-y-2">
                        <li><a href="/about" className="hover:text-blue-700 font-medium transition-colors block py-1">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-700 font-medium transition-colors block py-1">Contact</a></li>
                        <li><a href="/privacy-policy" className="hover:text-blue-700 font-medium transition-colors block py-1">Privacy Policy</a></li>
                        <li><a href="/term-and-condition" className="hover:text-blue-700 font-medium transition-colors block py-1">Terms & Conditions</a></li>
                    </ul>
                </motion.div>

                {/* Products - NO BOX, just content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h4 className="text-base font-semibold text-slate-900 mb-4">Products</h4>
                    <ul className="text-sm text-slate-700 space-y-2">
                        <li><a href="/product/xylene-resistant-spray-paint" className="hover:text-blue-700 font-medium transition-colors block py-1">Xylene Resistant Spray Paint</a></li>
                        <li><a href="/product/super-acrylic-spray-paint" className="hover:text-blue-700 font-medium transition-colors block py-1">Super Acrylic Spray Paint</a></li>
                        <li><a href="/product/acrylic-spray-paint" className="hover:text-blue-700 font-medium transition-colors block py-1">Acrylic Spray Paint</a></li>
                        <li><a href="/product/anti-corrosive-clear-coat" className="hover:text-blue-700 font-medium transition-colors block py-1">Anti Corrosive Clear Coat</a></li>
                        <li><a href="/product/zinc-spray" className="hover:text-blue-700 font-medium transition-colors block py-1">Zinc Spray</a></li>
                    </ul>
                </motion.div>

                {/* Why Can-Coat - NO BOX, just content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-4"
                >
                    <h4 className="text-base font-semibold text-slate-900 mb-4">Why Can-Coat?</h4>
                    <ul className="text-sm text-slate-700 space-y-2">
                        <li>• Prompt Customer Service</li>
                        <li>• In-House R&D Manufacturing</li>
                        <li>• Computerized Color Matching</li>
                        <li>• Automatic Aerosol Filling Plant</li>
                    </ul>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-200/50">
                <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-slate-600 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Can-Coat. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="/privacy-policy" className="hover:text-blue-700 font-medium transition-colors">Privacy</a>
                        <a href="/term-and-condition" className="hover:text-blue-700 font-medium transition-colors">Terms</a>
                        <a href="/term-and-condition" className="hover:text-blue-700 font-medium transition-colors">Conditions</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
