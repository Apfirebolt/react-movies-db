
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import MovieDetail from "./screens/MovieDetail";

// lazy imports for code splitting
const About = lazy(() => import("./screens/About"));
const Test = lazy(() => import("./screens/Test"));
const Movie = lazy(() => import("./screens/Movie"));

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/about" element={<About/>} />
          <Route path="/movie" element={<Movie/>} />
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;