import { motion } from "framer-motion";
import Imglogo from "../assets/logo.png";

export default function About() {
    return (
        <div className="min-h-screen pt-14 md:pt-16 bg-slate-50">
            {/* Header */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <img
                            src={Imglogo}
                            alt="Can-Coat Premium Spray Paint"
                            className="h-auto w-24 object-contain mb-[-30px]"
                            loading="lazy"
                        />
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                            About Can-Coat
                        </h1>
                        <p className="text-slate-600 max-w-3xl text-sm md:text-base">
                            Can-Coat is focused on professional aerosol spray paint solutions
                            for automotive and industrial use. This page shares who we are,
                            what we stand for, and how we manufacture with consistency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Body */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-4 gap-10">
                {/* Left Menu (like screenshot) */}
                <aside className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-5">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                Sections
                            </p>
                        </div>
                        <div className="border-t border-slate-200">
                            {["About us", "Mission & Vision", "Infrastructure", "Video Gallery"].map(
                                (item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                                        className="block px-5 py-4 text-slate-800 hover:bg-slate-50 transition-colors text-sm"
                                    >
                                        {item}
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </aside>

                {/* Right Content */}
                <main className="lg:col-span-3 space-y-10">
                    {/* About us */}
                    <motion.section
                        id="about-us"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7"
                    >
                        <h2 className="text-xl font-bold text-slate-900">About us</h2>
                        <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                            We manufacture premium aerosol spray paints that provide a smooth finish, strong adhesion, and long-lasting protection. Our products are made for consistent results in both everyday and professional use.
                        </p>

                        <div className="mt-6 grid md:grid-cols-3 gap-4">
                            {[
                                { t: "Automotive", d: "Touch-up and refinishing solutions." },
                                { t: "Industrial", d: "Protective coatings for equipment." },
                                { t: "General", d: "Multi-purpose spray paint uses." },
                            ].map((x) => (
                                <div
                                    key={x.t}
                                    className="rounded-xl border border-slate-200 p-4 bg-slate-50"
                                >
                                    <p className="font-semibold text-slate-900 text-sm">{x.t}</p>
                                    <p className="text-slate-600 text-sm mt-1">{x.d}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Mission & Vision */}
                    <motion.section
                        id="mission-and-vision"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7"
                    >
                        <h2 className="text-xl font-bold text-slate-900">Mission & Vision</h2>

                        <div className="mt-5 grid md:grid-cols-2 gap-5">
                            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-5">
                                <p className="text-sm font-bold text-emerald-800">Mission</p>
                                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                    Provide high-quality aerosol coatings with dependable color,
                                    finish, and performance-backed by transparent guidance and
                                    customer support.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                                <p className="text-sm font-bold text-blue-800">Vision</p>
                                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                                    Become a trusted Indian brand for premium spray paints across
                                    automotive and industrial segments by focusing on innovation,
                                    consistency, and quality control.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Infrastructure */}
                    <motion.section
                        id="infrastructure"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7"
                    >
                        <h2 className="text-xl font-bold text-slate-900">Infrastructure</h2>
                        <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                            Our infrastructure supports consistent production output, uniform
                            filling, and controlled quality. We focus on safe handling,
                            streamlined operations, and clean packaging.
                        </p>

                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                            {[
                                "Automated aerosol filling line",
                                "Batch-based QC checks",
                                "Standardized packaging process",
                                "Material storage & safety handling",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
                                >
                                    <span className="text-emerald-500 mt-0.5">✔</span>
                                    <p className="text-sm text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Video Gallery */}
                    <motion.section
                        id="video-gallery"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7"
                    >
                        <h2 className="text-xl font-bold text-slate-900">Video Gallery</h2>
                        <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                            Watch product demos and application guides to understand the
                            process and expected finish.
                        </p>

                        <div className="mt-6 grid md:grid-cols-2 gap-5">
                            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Can-Coat video 1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-black">
                                <iframe
                                    className="w-full aspect-video"
                                    src="https://www.youtube.com/embed/ysz5S6PUM-U"
                                    title="Can-Coat video 2"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-slate-500">
                            Replace YouTube links with your official product videos.
                        </p>
                    </motion.section>
                </main>
            </section>
        </div>
    );
}
