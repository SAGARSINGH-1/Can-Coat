import { motion } from "framer-motion";
import Imglogo from "../assets/logo.png";

export default function Contact() {
    return (
        <main className="flex-1 pt-10">
            {/* Header - Blue accent */}
            <section className="bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-blue-100">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                    >
                        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                            Contact
                        </h1>
                        <p className="text-slate-600 max-w-3xl text-sm md:text-base">
                            For product enquiries, dealership/wholesale queries, and support,
                            reach out using the details below.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Body */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 bg-gradient-to-br from-slate-50/50 to-blue-50/30 min-h-[60vh]">
                {/* Contact cards */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="space-y-4"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/50 p-6 hover:shadow-blue-200/50 transition-all duration-300">
                        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Get in touch
                        </h2>

                        <div className="mt-5 grid gap-3">
                            <a
                                href="tel:+91958291715"
                                className="flex items-center gap-3 rounded-xl border border-blue-100 p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                            >
                                <span className="text-blue-600 text-xl">📞</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Office</p>
                                    <p className="text-sm text-slate-600">+91 95829 1715</p>
                                </div>
                            </a>

                            <a
                                href="tel:+919220373630"
                                className="flex items-center gap-3 rounded-xl border border-blue-100 p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                            >
                                <span className="text-blue-600 text-xl">📞</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Sales</p>
                                    <p className="text-sm text-slate-600">+91 93022 37448</p>
                                </div>
                            </a>

                            <a
                                href="mailto:cancot0425@gmail.com"
                                className="flex items-center gap-3 rounded-xl border border-blue-100 p-4 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                            >
                                <span className="text-blue-600 text-xl">✉️</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Email</p>
                                    <p className="text-sm text-slate-600">cancot0425@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/+919302237448"
                                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm py-3 px-6 shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
                            >
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/50 p-6 hover:shadow-blue-200/50 transition-all duration-300">
                        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            GSTIN
                        </h2>
                        <p className="text-sm font-mono bg-blue-50/50 border border-blue-200 rounded-xl p-3 text-slate-800">
                            06RLMPS7423H1ZA
                        </p>
                    </div>
                </motion.div>

                {/* Addresses + map */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="space-y-4"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/50 p-6 hover:shadow-blue-200/50 transition-all duration-300">
                        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            Address
                        </h2>

                        <div className="mt-4 space-y-4">
                            <div className="rounded-xl border border-blue-100 p-6 bg-gradient-to-r from-blue-50/50 to-blue-25">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Gali No. 3, Ward No. 13
                                    <br />
                                    Kashmiri Colony, Bahadur Road
                                    Bahadurgarh - 124507
                                    <br />
                                    Distt. Jhajjar, Haryana
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/50 overflow-hidden hover:shadow-blue-200/50 transition-all duration-300">
                        <div className="p-6 border-b border-blue-100">
                            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Map
                            </h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Our factory location in Bahadurgarh
                            </p>
                        </div>

                        <div className="aspect-video bg-gradient-to-br from-blue-100/50 to-blue-200/30 flex items-center justify-center text-slate-600 text-sm border-t border-blue-100">
                            Add Google Maps embed here
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
