import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What makes Can-Coat Premium Spray Paint different from regular spray paint?",
            answer: "Can-Coat is specifically formulated for industrial touch-up applications on powder-coated and pre-painted metal surfaces. It offers OEM-grade shade matching, fast-drying (5-10 minutes touch-dry), superior adhesion, and industrial-grade durability with rust and scratch resistance.[file:11]"
        },
        {
            question: "How long does it take for Can-Coat to dry?",
            answer: "Surface dry in 5 minutes, hard dry in 20-30 minutes. You can apply 2-3 light coats with 5-minute intervals between coats for optimal results.[file:11]"
        },
        {
            question: "What surfaces can I use Can-Coat on?",
            answer: "Ideal for powder-coated metal items, industrial machinery, fabrication parts, metal furniture frames, automobile parts, gates, grills, cabinets, and production unit touch-ups.[file:11]"
        },
        {
            question: "Does Can-Coat offer custom color matching?",
            answer: "Yes! We provide OEM color matching for industrial touch-up needs. Contact us with your color specifications for perfect shade matching.[file:12]"
        },
        {
            question: "How much coverage does one 300g can provide?",
            answer: "Each 300g (440ml) can covers 1.2-1.5 square meters, depending on shade and spray method. Apply 2-3 light coats from 10-12 inches distance for best results.[file:12]"
        },
        {
            question: "What are the main ingredients in Can-Coat spray paint?",
            answer: "• **Resins**: Acrylic & Modified Alkyd (adhesion & durability)\n• **Pigments**: High-opacity industrial pigments\n• **Solvents**: Acetone, Toluene, Xylene (fast drying)\n• **Propellants**: LPG & DME\n• **Additives**: Anti-rust, UV stabilizers, flow agents[file:12]"
        },
        {
            question: "How do I properly apply Can-Coat spray paint?",
            answer: "1. Shake can vigorously for 60 seconds\n2. Clean surface (remove dust, oil, rust)\n3. Hold 10-12 inches away, use smooth even strokes\n4. Apply 2-3 light coats (5 min between coats)\n5. Turn upside down after use to clear nozzle[file:12]"
        },
        {
            question: "Is Can-Coat safe to use? What precautions should I take?",
            answer: "• Highly flammable - keep away from flames/sparks\n• Use in well-ventilated areas\n• Avoid skin/eye contact\n• Do not puncture/burn can\n• Store below 50°C\n• Keep away from children[file:11]"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            {/* Header */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-2 text-center"
            >
                Frequently Asked Questions
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-blue-800 text-xl text-center mb-16 font-medium"
            >
                Everything you need to know about Can-Coat Premium Spray Paint
            </motion.p>

            {/* FAQ Accordion */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full p-8 bg-gradient-to-r from-slate-50 to-blue-50/50 border border-blue-200/50 hover:border-blue-300 rounded-2xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm group-hover:bg-blue-50"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900 pr-4 flex-1 text-left">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                                </motion.div>
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-8 pb-8 pt-4">
                                        <div className="prose prose-slate max-w-none border-l-4 border-green-500 pl-6 bg-green-50/50 backdrop-blur-sm rounded-r-xl">
                                            <p className="text-lg leading-relaxed text-gray-700 mb-0">{faq.answer}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
