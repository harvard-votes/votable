import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import Scripts from "./pages/Scripts";
import Script from "./pages/Script";
import CreateScript from "./pages/CreateScript";
import EditScript from "./pages/EditScript";
import Footer from "./components/Footer";
import About from "./pages/About";
import SidebarContainer from "./pages/SidebarContainer";
import TurfSheet from "./pages/TurfSheet";

function App() {

  const routes = (
    <Routes>
      <Route path="/" exact element={<TurfSheet />} />
      <Route path="/dashboard" exact element={<TurfSheet />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/edit-contact" element={<EditContact />} />
      <Route path="/scripts" element={<Scripts />} />
      <Route path="/script" element={<Script />} />
      <Route path="/scripts/create" element={<CreateScript />} />
      <Route path="/scripts/edit" element={<EditScript />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );

  return (
    <Router>
      {/* <Navbar />{routes} */}
      <SidebarContainer>{routes}</SidebarContainer>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
