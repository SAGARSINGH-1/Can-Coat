// TermsAndConditions.jsx
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-700 bg-clip-text text-transparent mb-4 tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Can-Coat Premium Spray Paint – Industrial Grade Legal Terms
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* 1. Introduction */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-semibold text-sm">1</span>
                            Introduction
                        </h2>
                        <p className="text-slate-700 leading-relaxed text-lg">
                            These Terms and Conditions govern the purchase, use, and handling of Can-Coat Premium Spray Paint products
                            manufactured by our facility for industrial touch-up applications on powder-coated and pre-painted metal surfaces.
                        </p>
                    </motion.section>

                    {/* 2. Product Usage */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-r from-emerald-50/50 to-blue-50/50 backdrop-blur-sm rounded-2xl border-l-4 border-emerald-500 p-8 shadow-md"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-semibold text-sm">2</span>
                            Product Usage & Application
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-3">Intended Use</h3>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• Industrial touch-up on powder-coated metal surfaces</li>
                                    <li>• Machinery, fabrication parts, gates, grills, auto components</li>
                                    <li>• 2-3 light coats from 10-12″ distance</li>
                                    <li>• Surface must be clean, dry, rust-free</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-3">Coverage & Performance</h3>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• 300g/440ml cans cover 1.2-1.5 sqm</li>
                                    <li>• Touch-dry: 5 mins | Hard-dry: 20-30 mins</li>
                                    <li>• Optimal temp: 15°C–35°C</li>
                                    <li>• Results vary by surface prep & application</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* 3. Safety Precautions */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gradient-to-r from-orange-50/70 to-red-50/50 rounded-2xl border border-orange-200 p-8 shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 w-24 h-24 bg-orange-100 rounded-full opacity-20"></div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-semibold text-sm">3</span>
                            Safety & Handling
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-400">
                                    <h4 className="font-semibold text-orange-900 mb-2">⚠️ DANGER - Highly Flammable</h4>
                                    <ul className="text-sm text-orange-900 space-y-1">
                                        <li>• Keep away from heat, flame, sparks</li>
                                        <li>• Use only in well-ventilated areas</li>
                                        <li>• Do not puncture or burn, even when empty</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Storage</h4>
                                    <p className="text-slate-700">Do not store above 50°C. Keep out of reach of children.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">First Aid</h4>
                                    <p className="text-slate-700">Avoid eye/skin contact. In case of contact, rinse immediately with water.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* 4. Warranty & Liability */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">4</span>
                            Warranty & Liability
                        </h2>
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <p>• Warranty limited to product replacement for manufacturing defects only</p>
                            <p>• No warranty for improper surface preparation or application</p>
                            <p>• Buyer assumes all risk of application and end-use performance</p>
                            <p>• Company not liable for indirect, consequential, or incidental damages</p>
                            <p>• Product guaranteed to meet industrial quality standards when stored properly</p>
                        </div>
                    </motion.section>

                    {/* 5. Chemical Composition */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl border border-slate-200/30 p-8"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 font-semibold text-sm">5</span>
                            Chemical Composition Disclosure
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 text-sm">
                            <div className="bg-slate-50 p-4 rounded-xl">
                                <h4 className="font-semibold text-slate-800 mb-2">Resins/Binders</h4>
                                <p>Acrylic Resin, Modified Alkyd Resin</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl">
                                <h4 className="font-semibold text-slate-800 mb-2">Solvents</h4>
                                <p>Acetone, Toluene, Xylene</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl">
                                <h4 className="font-semibold text-slate-800 mb-2">Propellants</h4>
                                <p>LPG, Dimethyl Ether (DME)</p>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 text-center">Contains anti-rust additives, UV stabilizers, flow agents</p>
                    </motion.section>

                    {/* 6. Legal */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-gradient-to-r from-slate-900/5 to-slate-800/5 backdrop-blur-sm rounded-2xl border border-slate-200/20 p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 font-semibold text-sm">6</span>
                            Governing Law
                        </h2>
                        <div className="text-sm space-y-3">
                            <p className="text-slate-700"><strong>Acceptance:</strong> Purchasing/using Can-Coat products constitutes acceptance of these terms.</p>
                            <p className="text-slate-700"><strong>Jurisdiction:</strong> Governed by laws of India. Disputes subject to Chandigarh jurisdiction.</p>
                            <p className="text-slate-700"><strong>Effective:</strong> January 2026. We reserve right to update terms.</p>
                            <p className="text-xs text-slate-500 pt-4 border-t border-slate-200 mt-4">
                                Last Updated: January 22, 2026
                            </p>
                        </div>
                    </motion.section>
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center mt-20 p-8 bg-emerald-600/90 backdrop-blur-sm rounded-2xl text-white"
                >
                    <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
                    <p className="text-emerald-100 mb-6">Contact our sales team for bulk industrial orders & custom shade matching</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="/contact" className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-200 shadow-lg">
                            Contact Sales
                        </a>
                        <a href="/products" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-200">
                            View Products
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
