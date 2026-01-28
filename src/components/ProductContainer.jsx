// ProductContainer.jsx - EXACTLY SAME STYLE (Can-Coat Products Only)
import { motion } from 'framer-motion';
import { Shield, Zap, Phone } from 'lucide-react';
import { useState } from 'react';
import product1 from '../assets/product.png'; // Premium Spray Paint
import product2 from '../assets/product.png'; // Xylene Resistant
import product3 from '../assets/product.png'; // Super Acrylic
import product4 from '../assets/product.png'; // Acrylic Spray
import product5 from '../assets/product.png'; // Anti Corrosive Clear

const products = [
    {
        id: 1,
        name: "Can-Coat Premium Spray Paint",
        subtitle: "Industrial Grade Touchup Spray",
        image: product1,
        color: "Premium Industrial",
        code: "CC-01",
        description: "High-performance, fast-drying industrial spray paint designed for smooth, durable finish on powder-coated and pre-painted metal surfaces.",
        features: ["Fast-Drying (5-10 mins)", "High Adhesion on Metal", "Rust & Scratch Resistant"]
    },
    {
        id: 2,
        name: "Xylene Resistant Spray Paint",
        subtitle: "Chemical Resistant Coating",
        image: product2,
        color: "Xylene Resistant",
        code: "CC-02",
        description: "Specialized spray paint with excellent resistance to xylene and industrial solvents for heavy-duty applications.",
        features: ["Xylene & Solvent Resistant", "Industrial Durability", "High Chemical Resistance"]
    },
    {
        id: 3,
        name: "Super Acrylic Spray Paint",
        subtitle: "Premium Acrylic Finish",
        image: product3,
        color: "Super Acrylic",
        code: "CC-03",
        description: "Superior acrylic formulation providing smooth, uniform finish with excellent adhesion and fast drying properties.",
        features: ["Smooth Uniform Finish", "Fast Drying Formula", "Excellent Adhesion"]
    },
    {
        id: 4,
        name: "Acrylic Spray Paint",
        subtitle: "Standard Acrylic Coating",
        image: product4,
        color: "Acrylic Standard",
        code: "CC-04",
        description: "High-quality acrylic spray paint for general industrial and automotive touch-up applications.",
        features: ["High Coverage Nozzle", "Custom Shade Matching", "Versatile Application"]
    },
    {
        id: 5,
        name: "Anti Corrosive Clear Coat",
        subtitle: "Rust Protection Clear",
        image: product5,
        color: "Clear Coat",
        code: "CC-05",
        description: "Transparent anti-corrosive clear coat providing long-lasting protection against rust and corrosion on metal surfaces.",
        features: ["Anti-Rust Protection", "Clear Transparent Finish", "UV Stabilizers"]
    }
];

const ProductContainer = () => {
    const [activeProduct, setActiveProduct] = useState(products[0]);

    return (
        <div className="max-w-6xl mx-auto py-16 px-4 bg-white">
            {/* Top Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center lg:justify-start">
                {products.map((product) => (
                    <motion.button
                        key={product.id}
                        onClick={() => setActiveProduct(product)}
                        className={`px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${activeProduct.id === product.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600 hover:shadow-md'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {activeProduct.id === product.id && (
                            <motion.div
                                className="w-2 h-2 bg-white rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        )}
                        {product.color}
                    </motion.button>
                ))}
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Product Image */}
                <motion.div
                    key={`image-${activeProduct.id}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-1 relative"
                >
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-gray-200 h-[500px] flex items-center justify-center">
                        <img
                            src={activeProduct.image}
                            alt={activeProduct.name}
                            className="w-full max-w-sm h-96 object-contain rounded-2xl shadow-2xl"
                        />
                    </div>
                </motion.div>

                {/* Middle: Product Info */}
                <motion.div
                    key={`info-${activeProduct.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 space-y-6"
                >
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            {activeProduct.name}
                        </h1>
                        <p className="text-2xl font-semibold text-blue-600 mt-2">
                            {activeProduct.subtitle}
                        </p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 pr-6 py-6 rounded-r-2xl">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {activeProduct.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Shield className="w-6 h-6 text-blue-600" />
                            Key Features
                        </h4>
                        <div className="space-y-3">
                            {activeProduct.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Action Panel - Updated Specs */}
                <motion.div
                    key={`action-${activeProduct.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 space-y-6"
                >
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Specs</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                                <span className="text-gray-600">Net Content</span>
                                <span className="font-bold text-gray-900">300g / 440ml</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                                <span className="text-gray-600">Coverage</span>
                                <span className="font-bold text-gray-900">1.2-1.5 sqm/can</span>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                                <span className="text-gray-600">Surface Dry</span>
                                <span className="font-bold text-gray-900">5 minutes</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="text-gray-600">Coats</span>
                                <span className="font-bold text-gray-900">2-3 light coats</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductContainer;
