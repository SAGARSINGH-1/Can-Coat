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
            <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2">
                {/* Left: Brand + info */}
                <div className="space-y-4">
                    <CanCoatLogo className="w-[140px]" />

                    <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                        India’s leading aerosol spray paint manufacturer. Professional spray
                        solutions for automotive and industrial applications.
                    </p>

                    <div className="text-sm text-slate-400 space-y-1">
                        <p>
                            <span className="text-slate-300 font-semibold">GSTIN:</span>{" "}
                            06RLMPS7423H1ZA
                        </p>
                        <p>
                            <span className="text-slate-300 font-semibold">Email:</span>{" "}
                            <a
                                href="mailto:cancot0425@gmail.com"
                                className="hover:text-emerald-400 transition-colors"
                            >
                                cancot0425@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right: Contact cards */}
                <div className="space-y-4">
                    <h4 className="text-base font-semibold text-white">Contact</h4>

                    <div className="grid gap-3">
                        <div className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
                            <span className="text-emerald-400 mt-0.5">📍</span>
                            <div className="text-sm text-slate-300">
                                <p className="font-semibold text-white">Office</p>
                                <p className="text-slate-400">
                                    Near Alfa Hospital, Basai Road, Gurgaon (HR) 122001
                                </p>
                            </div>
                        </div>

                        <a
                            href="tel:+91958291715"
                            className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-emerald-400">📞</span>
                            <div className="text-sm">
                                <p className="font-semibold text-white">Main</p>
                                <p className="text-slate-400">+91 95829 1715</p>
                            </div>
                        </a>

                        <a
                            href="tel:+919220373630"
                            className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-emerald-400">📱</span>
                            <div className="text-sm">
                                <p className="font-semibold text-white">Sales (Badal Singh)</p>
                                <p className="text-slate-400">+91 92203 73630</p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/91958291715"
                            className="inline-flex items-center justify-center rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 px-4 shadow-sm transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Can-Coat. All rights reserved.</p>
                    <p>Made in Haryana, India.</p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
