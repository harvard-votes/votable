import React from "react";
import { useState, useEffect } from "react";
import Contact from "./Contact";
import SearchBar from "./SearchBar";

function Table() {
  const [contacts, setContacts] = useState([]);

  // Get all contacts
  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:8000/contacts");
      const jsonData = await response.json();

      setContacts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const response = await fetch(`http://localhost:8000/contacts/${id}`, {
          method: "DELETE"
        });

        setContacts(contacts.filter(contact => contact.id !== id));
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <SearchBar onContactsChange={setContacts} />
      {contacts.length > 0 ? (
        <table className="table table-striped table-sm my-3">
          <thead>
            <tr>
              <th>
                <span className="ml-1">Last Name</span>
              </th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>House/Yard</th>
              <th>Suite</th>
              <th>Mailbox Center</th>
              <th>Mailbox Number</th>
              <th>Class Year</th>
              <th>Home City</th>
              <th>Home State</th>
              <th>Should Contact</th>
              <th>Contact Status</th>
              <th>PTE Status</th>
              <th>Registration Status</th>
              <th>Stage of Voting Process</th>
              <th>
                <span className="mr-1">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} onDelete={deleteContact} />
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="m-3">No Contacts</h4>
      )}
    </>
  );
}

export default Table;
