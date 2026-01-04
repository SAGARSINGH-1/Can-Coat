import {
    ProductCard,
    HeroBanner,
    CategoryFilter,
    FAQSection,
    TestimonialsSection,
} from "../components/AnimatedComponents";

export default function Home() {
    const products = [
        {
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
            title: "Scratch Solution Kit",
            description:
                "Complete 7-step repair system for automotive scratches. Includes color-matched spray paint, filler, and finishing compounds.",
        },
        {
            image:
                "https://images.unsplash.com/photo-1583121274602-d5d32d7e6c8e?w=400&h=300&fit=crop",
            title: "Premium Aerosol Spray",
            description:
                "Professional-grade 300g spray cans available in 200+ automotive colors. Fast-drying with smooth metallic finish.",
        },
        {
            image:
                "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400&h=300&fit=crop",
            title: "Industrial Coatings",
            description:
                "Heavy-duty protective coatings for machinery and equipment. Corrosion-resistant with superior adhesion.",
        },
    ];

    return (
        <main className="flex-1 pt-10">
            <HeroBanner
                title="Can-Coat Paints"
                subtitle="Computerized color matching for automotive, industrial, and specialty applications. Manufactured in Haryana with 3 factories across India."
                ctaText="Request Quote"
                image="https://www.com-paint.com/wp-content/uploads/Com-Paint-2K-Can-Disection-web.jpg"
            />

            <FAQSection />
            <TestimonialsSection />

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        <CategoryFilter active={true} label="Automotive" />
                        <CategoryFilter active={false} label="Industrial" />
                        <CategoryFilter active={false} label="Specialty" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
