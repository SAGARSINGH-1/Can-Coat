// PrivacyPolicy.jsx
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/80 to-blue-100/50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header - Logo Blue Gradient */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Can-Coat Premium Spray Paint – Your Data Protection
                    </p>
                    <p className="text-blue-700 font-semibold mt-2">Last Updated: January 22, 2026</p>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* 1. Introduction - Blue accent */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl border-l-4 border-blue-500 p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">1</span>
                            Introduction
                        </h2>
                        <p className="text-slate-700 leading-relaxed text-lg mb-4">
                            Can-Coat Premium Spray Paint is committed to protecting your privacy. This Privacy Policy
                            explains how we collect, use, and protect information when you visit our website, contact us for industrial
                            spray paint inquiries, or place orders for our OEM-grade color matching services.
                        </p>
                        <p className="text-slate-700 text-lg">
                            We serve industrial clients for powder-coated metal touch-up applications and respect your data privacy.
                        </p>
                    </motion.section>

                    {/* 2. Information We Collect - Blue gradient */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-r from-blue-50/70 to-blue-100/50 backdrop-blur-sm rounded-2xl border-l-4 border-blue-500 p-8 shadow-md"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">2</span>
                            Information We Collect
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-sm">
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-4 text-lg">Contact & Business Data</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        Company name, industry (manufacturing/fabrication)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        Contact person name, business email, phone
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        OEM color codes, shade matching requirements
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        Order quantities, delivery addresses
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-4 text-lg">Website Usage</h3>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                        IP address, browser type, device info
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                        Pages visited (product specs, safety data)
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                        Session duration, referral sources
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                        No cookies or tracking for advertising
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* 3. How We Use Information - Blue accent */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white/70 backdrop-blur-sm rounded-2xl border-l-4 border-blue-500 p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">3</span>
                            How We Use Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-3 text-slate-700">
                                <h4 className="font-semibold text-slate-800 text-lg">Business Operations</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Process industrial spray paint orders (300g/440ml cans)</li>
                                    <li>• OEM color matching & custom shade production</li>
                                    <li>• Generate quotes for bulk manufacturing clients</li>
                                    <li>• Arrange delivery to fabrication units</li>
                                </ul>
                            </div>
                            <div className="space-y-3 text-slate-700">
                                <h4 className="font-semibold text-slate-800 text-lg">Communication</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Send order confirmations & shipping updates</li>
                                    <li>• Provide technical support (application tips, safety)</li>
                                    <li>• Respond to shade matching inquiries</li>
                                    <li>• Notify about new industrial formulations</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* 4. Data Sharing & Security - Blue theme */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-r from-blue-50/80 to-blue-100/50 rounded-2xl border-l-4 border-blue-400 p-8 shadow-md"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">4</span>
                            Data Sharing & Security
                        </h2>
                        <div className="space-y-4 text-slate-700 leading-relaxed">
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-xl">
                                <h4 className="font-semibold text-blue-900 mb-2">✅ We NEVER sell your data</h4>
                                <p className="text-sm">Your industrial client information stays confidential.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <h5 className="font-semibold text-slate-800 mb-2">Shared Only With:</h5>
                                    <ul className="space-y-1">
                                        <li>• Shipping partners (delivery address only)</li>
                                        <li>• Payment processors (transaction data only)</li>
                                        <li>• Legal authorities (if required by law)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-slate-800 mb-2">Security Measures:</h5>
                                    <ul className="space-y-1">
                                        <li>• SSL encryption for all transmissions</li>
                                        <li>• Secure cloud storage (India-based servers)</li>
                                        <li>• Employee access limited by role</li>
                                        <li>• Regular security audits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* 5. Your Rights - Blue theme */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-blue-50/70 to-blue-100/50 rounded-2xl border-l-4 border-blue-500 p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">5</span>
                            Your Rights
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-3">Data Control</h4>
                                <ul className="space-y-2 text-slate-700">
                                    <li>• <strong>Access:</strong> Request copy of your data</li>
                                    <li>• <strong>Delete:</strong> Remove your information anytime</li>
                                    <li>• <strong>Correct:</strong> Update inaccurate details</li>
                                    <li>• <strong>Object:</strong> Stop marketing communications</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 mb-3">Contact Us</h4>
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                    <p className="font-semibold text-blue-900 mb-1">Email: privacy@can-coat.com</p>
                                    <p className="text-sm text-slate-700">Response within 48 hours for all data requests</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* 6. Legal - Blue theme */}
                    <motion.section
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-gradient-to-r from-blue-50/50 to-blue-100/30 backdrop-blur-sm rounded-2xl border-l-4 border-blue-400 p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">6</span>
                            Governing Law
                        </h2>
                        <div className="text-sm space-y-3">
                            <p className="text-slate-700"><strong>Jurisdiction:</strong> Governed by Indian DPDP Act 2023 & IT Act 2000</p>
                            <p className="text-slate-700"><strong>Scope:</strong> Applies to all Can-Coat website visitors & customers</p>
                            <p className="text-slate-700"><strong>Updates:</strong> We may update this policy. Continued use = acceptance</p>
                            <p className="text-xs text-slate-500 pt-4 border-t border-slate-200 mt-4">
                                Effective: January 22, 2026 | Chandigarh, India
                            </p>
                        </div>
                    </motion.section>
                </div>

                {/* Footer CTA - Blue theme */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center mt-20 p-8 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-sm rounded-2xl text-white shadow-2xl"
                >
                    <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
                    <p className="text-blue-100 mb-6">Contact our team for any data protection concerns</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="mailto:privacy@can-coat.com" className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg">
                            privacy@can-coat.com
                        </a>
                        <a href="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-200">
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
