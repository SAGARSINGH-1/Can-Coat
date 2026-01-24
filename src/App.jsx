import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import TermsAndConditions from "./pages/Terms-and-Condition.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ProductPage from "./pages/ProductPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* same page */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />  {/* ✅ alias */}

        <Route path="about" element={<About />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="term-and-condition" element={<TermsAndConditions />} />  {/* ✅ alias */}
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

        {/* optional: redirect any unknown to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
