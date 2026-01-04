import { motion } from "framer-motion";
import { CanCoatLogo } from "../components/AnimatedComponents";

export default function Contact() {
    return (
        <main className="flex-1 pt-10">
            {/* Header */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                    >
                        <CanCoatLogo className="w-[170px]" />
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
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
            <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">
                {/* Contact cards */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="space-y-4"
                >
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                        <h2 className="text-lg font-bold text-slate-900">Get in touch</h2>

                        <div className="mt-5 grid gap-3">
                            <a
                                href="tel:+91958291715"
                                className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-emerald-600">📞</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Main</p>
                                    <p className="text-sm text-slate-600">+91 95829 1715</p>
                                </div>
                            </a>

                            <a
                                href="tel:+919220373630"
                                className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-emerald-600">📱</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        Sales (Badal Singh)
                                    </p>
                                    <p className="text-sm text-slate-600">+91 92203 73630</p>
                                </div>
                            </a>

                            <a
                                href="mailto:cancot0425@gmail.com"
                                className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-emerald-600">✉️</span>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Email</p>
                                    <p className="text-sm text-slate-600">cancot0425@gmail.com</p>
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

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                        <h2 className="text-lg font-bold text-slate-900">GSTIN</h2>
                        <p className="mt-2 text-sm text-slate-600">
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
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                        <h2 className="text-lg font-bold text-slate-900">Addresses</h2>

                        <div className="mt-4 space-y-4">
                            <div className="rounded-xl border border-slate-200 p-4">
                                <p className="text-sm font-semibold text-slate-900">
                                    Gurgaon (HR)
                                </p>
                                <p className="text-sm text-slate-600">
                                    Near Alfa Hospital, Basai Road, Gurgaon (HR) 122001
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 p-4">
                                <p className="text-sm font-semibold text-slate-900">
                                    Bahadurgarh (HR)
                                </p>
                                <p className="text-sm text-slate-600">
                                    Balour Road, Opposite 24 Meter Road, Near Sector 11,
                                    Bahadurgarh, Haryana 124507
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map (optional placeholder) */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-6 border-b border-slate-200">
                            <h2 className="text-lg font-bold text-slate-900">Map</h2>
                            <p className="text-sm text-slate-600 mt-1">
                                Add your Google Map embed link here.
                            </p>
                        </div>

                        <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-500 text-sm">
                            Map placeholder
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
