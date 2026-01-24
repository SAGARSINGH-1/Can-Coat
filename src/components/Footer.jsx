import { motion } from "framer-motion";
import { CanCoatLogo } from "./AnimatedComponents";

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-950 text-white mt-16"
        >
            <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
                {/* Logo & Contact */}
                <div className="space-y-6">
                    <CanCoatLogo className="w-[140px]" />

                    <div className="text-sm text-slate-400 space-y-2">
                        <div className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Balour Road, Arya Nagar, Bahadurgarh, Haryana 124507</span>
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
                </div>

                {/* Useful Links */}
                <div className="space-y-4">
                    <h4 className="text-base font-semibold">Useful Links</h4>
                    <ul className="text-sm text-slate-300 space-y-2">
                        <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                        <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                        <li><a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="/term-and-condition" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Products */}
                <div className="space-y-4">
                    <h4 className="text-base font-semibold">Products</h4>
                    <ul className="text-sm text-slate-300 space-y-2">
                        <li><a href="/product/xylene-resistant-spray-paint" className="hover:text-emerald-400 transition-colors">Xylene Resistant Spray Paint</a></li>
                        <li><a href="/product/super-acrylic-spray-paint" className="hover:text-emerald-400 transition-colors">Super Acrylic Spray Paint</a></li>
                        <li><a href="/product/acrylic-spray-paint" className="hover:text-emerald-400 transition-colors">Acrylic Spray Paint</a></li>
                        <li><a href="/product/anti-corrosive-clear-coat" className="hover:text-emerald-400 transition-colors">Anti Corrosive Clear Coat</a></li>
                        <li><a href="/product/zinc-spray" className="hover:text-emerald-400 transition-colors">Zinc Spray</a></li>
                    </ul>
                </div>

                {/* Why Color-On */}
                <div className="space-y-4">
                    <h4 className="text-base font-semibold">Why Color-On?</h4>
                    <ul className="text-sm text-slate-300 space-y-2">
                        <li>• Prompt Customer Service</li>
                        <li>• In-House R&D Manufacturing</li>
                        <li>• Computerized Color Matching</li>
                        <li>• Automatic Aerosol Filling Plant</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Can-Coat. All rights reserved.</p>
                    <div className="flex gap-4 items-center">
                        <a href="privacy-policy" className="hover:text-emerald-400">Privacy</a>
                        <a href="term-and-condition" className="hover:text-emerald-400">Terms</a>
                        <a href="term-and-condition" className="hover:text-emerald-400">Conditions</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
