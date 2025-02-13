import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./screens/Home";
import TestPage from "./screens/Test";
import About from "./screens/About";

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/test" element={<TestPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Navigate to="/test" />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;