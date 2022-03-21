import React from "react";
import { useState, useEffect } from "react";
import Contact from "./Contact";
import TableHeader from "./TableHeader";

function Table() {
  const [contacts, setContacts] = useState([]);

  // const fields = ["Last Name", "First Name", "Email", "Phone Number", "House/Yard", "Suite",
  //   "Mailbox Center", "Mailbox Number", "Class Year", "Home City", "Home State",
  //   "Contact Status", "PTV Status", "Registration Status", "Stage of Voting Process", "Actions"];

  const fields = ["Student Information", "Contact", "Hometown", "Mailbox",
    "Status", ""];

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

  // const showDropdown = true;

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      {contacts.length > 0 ? (
        <div className="flex flex-col m-6 overflow-x-hidden">
          <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      {fields.map((field) => field === "Status" ? (
                        <th key={field} scope="col" className="w-64 py-3 pl-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                          <a role="button" id="dropdownButton" className="inline-flex items-center">Status
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </a>
                          {/* {showDropdown ? (
                            <ul className="dropdown-menu mt-3 py-2 min-w-max absolute bg-white text-base z-50 float-left text-left rounded-lg shadow-lg mt-1" aria-labelledby="dropdownButton">
                              <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                              </li>
                              <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                              </li>
                            </ul>) : <></>} */}
                        </th>
                      ) : (
                        <TableHeader key={field} content={field} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <Contact key={contact.id} contact={contact} onDelete={deleteContact} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="m-3">No Contacts</h4>
      )
      }
    </>
  );
}

export default Table;
