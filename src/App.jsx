import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./views/Contact";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import HomeComponent from "./views/Home";
import ContactComponent from "./views/Contact";
import NotFoundComponent from "./views/NotFound";
import Navigation from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
