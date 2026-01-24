import {
    ProductCard,
    HeroBanner,
    CategoryFilter,
    FAQSection,
    TestimonialsSection,
    StatsCounter,
} from "../components/AnimatedComponents";
import { ProductDetail } from "../components/ProductDetail";
import productImage from "../assets/product.png";

export default function Home() {
    const products = [
        {
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
            title: "Xylene Resistant Spray Paint",
            description: "Solvent-resistant coating for industrial applications. Perfect for harsh chemical environments.",
        },
        {
            image: "https://images.unsplash.com/photo-1583121274602-d5d32d7e6c8e?w=400&h=300&fit=crop",
            title: "Super Acrylic Spray Paint",
            description: "Premium 300g aerosol cans with superior coverage. Fast-drying with smooth metallic finish.",
        },
        {
            image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400&h=300&fit=crop",
            title: "Anti Corrosive Clear Coat",
            description: "Protective UV-resistant clear finish. Prevents corrosion on automotive and industrial surfaces.",
        },
        {
            image: "https://images.unsplash.com/photo-1581235724301-9e64c4b4e019?w=400&h=300&fit=crop",
            title: "Zinc Spray",
            description: "Cold galvanizing spray for metal protection. Provides sacrificial corrosion resistance.",
        },
        {
            image: "https://images.unsplash.com/photo-1606853045733-100d194e8f45?w=400&h=300&fit=crop",
            title: "Acrylic Spray Paint",
            description: "General purpose spray paint for multiple surfaces. Excellent adhesion and color retention.",
        },
    ];

    return (
        <main className="flex-1 pt-10">
            <HeroBanner
                title="Can-Coat Paints"
                subtitle="India's leading aerosol spray paint manufacturer. Computerized color matching with in-house R&D and automatic filling plants."
                ctaText="View Products"
                image="https://www.com-paint.com/wp-content/uploads/Com-Paint-2K-Can-Disection-web.jpg"
            />

            <StatsCounter />
            <FAQSection />
            <TestimonialsSection />

            <ProductDetail
                image={productImage}
                title="Xylene Resistant Spray Paint"
                description="Premium solvent-resistant aerosol spray paint designed for industrial applications. Perfect for harsh chemical environments and heavy-duty machinery protection. Fast-drying formula with superior adhesion and corrosion resistance."
            />

        </main>
    );
}
