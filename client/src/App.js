import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/homepage";
import Shop from "./pages/Shop/shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
