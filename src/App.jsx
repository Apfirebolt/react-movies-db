import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import MovieDetail from "./screens/MovieDetail";
import About from "./screens/About";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/about" element={<About/>} />
          <Route path="/movie/:id" element={<MovieDetail/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;