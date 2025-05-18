// src/App.js
import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
