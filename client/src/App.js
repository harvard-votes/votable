import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
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
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Dashboard from "./pages/Dashboard";

function App() {

  const [authed, setAuthed] = useState(false);

  const routes = (
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/login" element={<Login setAuthState={setAuthed} />} />
      <Route path="/signup" element={<Signup setAuthState={setAuthed} />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/contacts" exact element={<TurfSheet />} />
      <Route path="/contacts/add" element={<AddContact />} />
      <Route path="/contacts/edit" element={<EditContact />} />
      <Route path="/scripts" element={<Scripts />} />
      <Route path="/scripts/create" element={<CreateScript />} />
      <Route path="/scripts/edit" element={<EditScript />} />
      <Route path="/script" element={<Script />} />
    </Routes>
  );

  return (
    <Router>
      {authed ?
        <SidebarContainer setAuthState={setAuthed}>{routes}</SidebarContainer>
        :
        <>
          <Navbar />{routes}
          <Footer />
        </>
      }
    </Router>
  );
}

export default App;
