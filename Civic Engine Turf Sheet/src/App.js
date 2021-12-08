import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import EditContact from "./pages/EditContact";
import Footer from "./components/Footer";
import About from "./pages/About";
import { ref, set, onValue, remove } from "firebase/database";
import db from "./firebase";

function App() {
  const [contacts, setContacts] = useState([]);

  // Read Contacts
  useEffect(() => {
    onValue(ref(db, "contacts"), (snapshot) => {
      setContacts(snapshot.val() != null ? snapshot.val() : []);
    });
  }, []);

  // Save Contact
  const saveContact = (contact) => {
    set(ref(db, "contacts/" + contact.id), contact)
      .then(() => {
        console.log("Success!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Delete Contact
  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      remove(ref(db, "contacts/" + id))
        .then(() => {
          console.log("Success!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {contacts.length > 0 ? (
                <Table contacts={contacts} onDelete={deleteContact} />
              ) : (
                <h4 className="m-3">No Contacts</h4>
              )}
            </>
          }
        />
        <Route
          path="/edit-contact"
          element={<EditContact onSave={saveContact} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
