import "./CSS/App.css";
import NavbarResponsive from "./components/Navbar/NavbarResponsive";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AccordionPage from "./pages/accordion/AccordionPage";
import EquipmentPage from "./pages/equipment/EquipmentPage";
import ContactPage from "./pages/contact/ContactPage";
import OpenStreetMapsPage from "./pages/maps/OpenStreetMapsPage";
import Footer from "./components/Footer/Footer";
import WorksPage from "./pages/works/WorksPage";
import FloatingButton from "./components/FloatingElements/FloatingButton/FloatingButton";
import EquipmentPageC from "./pages/equipment-c/EquipmentPageC";
import AboutPage from "./pages/about/AboutPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// import About from "./pages/about/About";

function App() {
  return (
    <>
      <NavbarResponsive />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accordion" element={<AccordionPage />} />

        {/* <Route path="/element-form" element={<ElementFormPage />} />
        <Route path="/mapping-templates" element={<MappingTemplateN1 />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/equipment-c" element={<EquipmentPageC />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/maps" element={<OpenStreetMapsPage />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>

      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
