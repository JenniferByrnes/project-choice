import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/homepage";
import Shop from "./pages/Shop/shop";
import Contact from "./pages/Contact/contact";
import About from "./pages/About/about";
import Nav from "./components/Nav/index";
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
      
      <Nav />
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
