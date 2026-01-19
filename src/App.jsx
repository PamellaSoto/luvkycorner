import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import Queue from "./pages/Queue.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}