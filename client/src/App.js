import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditContact from "./pages/EditContact";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Table />} />
        <Route path="/edit-contact" element={<EditContact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
