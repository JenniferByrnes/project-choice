
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/homepage";
import Shop from "./pages/Shop/shop";
import Contact from "./pages/Contact/contact";
function App() {
  return (
  
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
