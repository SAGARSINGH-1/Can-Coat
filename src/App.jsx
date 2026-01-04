import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* same page */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />  {/* ✅ alias */}

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* optional: redirect any unknown to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
