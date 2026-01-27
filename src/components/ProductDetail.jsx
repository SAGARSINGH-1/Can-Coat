import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function ProductDetail({ image, title, description }) {
    const navigate = useNavigate();
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/30"
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Animated Product Image */}
                    <motion.div
                        initial={{ x: -50, scale: 0.9 }}
                        whileInView={{ x: 0, scale: 1 }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative group"
                    >
                        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400/10 via-blue-300/5 to-blue-500/10 p-4">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Floating animation badges */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                            className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                        >
                            New Arrival
                        </motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl"
                        />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-4">
                                {title}
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                            {description}
                        </p>

                        <div className="flex gap-4 pt-4">
                            <motion.button
                                onClick={() => navigate("/product")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                            >
                                View More →
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold text-lg rounded-2xl hover:bg-slate-50 transition-all"
                            >
                                Learn More
                            </motion.button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 pt-8">
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="font-medium text-slate-700">Fast Drying</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="font-medium text-slate-700">300g Can</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="font-medium text-slate-700">UV Resistant</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span className="font-medium text-slate-700">Easy Apply</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
