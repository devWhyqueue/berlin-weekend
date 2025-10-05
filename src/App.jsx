import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpatiTour from "./pages/SpatiTour";
import VintageTour from "./pages/VintageTour";

export default function App() {
  return (
    <BrowserRouter basename="/berlin-weekend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/späti-tour" element={<SpatiTour />} />
        <Route path="/vintage-tour" element={<VintageTour />} />
      </Routes>
    </BrowserRouter>
  );
}


