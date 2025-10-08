import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeekendPlan from "./pages/WeekendPlan";
import SpaetiTour from "./pages/SpaetiTour";
import VintageTour from "./pages/VintageTour";
import Museums from "./pages/Museums";
import Cafes from "./pages/Cafes";
import BarHopping from "./pages/BarHopping";
import Clubbing from "./pages/Clubbing";
import Restaurants from "./pages/Restaurants";

export default function App() {
  return (
    <BrowserRouter basename="/berlin-weekend">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekend-plan" element={<WeekendPlan />} />
        <Route path="/spaeti-tour" element={<SpaetiTour />} />
        <Route path="/vintage-tour" element={<VintageTour />} />
        <Route path="/museums" element={<Museums />} />
        <Route path="/cafes" element={<Cafes />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/bar-hopping" element={<BarHopping />} />
        <Route path="/clubbing" element={<Clubbing />} />
      </Routes>
    </BrowserRouter>
  );
}


