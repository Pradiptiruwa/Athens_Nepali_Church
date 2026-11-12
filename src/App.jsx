
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Sermons from "./pages/Sermons";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
