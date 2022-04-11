import { React, Fragment } from "react";
import { useState, useEffect } from "react";
import Contact from "./Contact";
import TableHeader from "./TableHeader";
import { Menu, Transition } from '@headlessui/react';

function Table() {
  const [contacts, setContacts] = useState([]);

  // const fields = ["Last Name", "First Name", "Email", "Phone Number", "House/Yard", "Suite",
  //   "Mailbox Center", "Mailbox Number", "Class Year", "Home City", "Home State",
  //   "Contact Status", "PTV Status", "Registration Status", "Stage of Voting Process", "Actions"];

  const fields = ["Student Information", "Contact", "Campus Location", "Hometown",
    "Status", ""];

  const [statuses, setStatuses] = useState([true, false, false, false]);

  const statusFields = ["contactStatus", "ptvStatus", "registrationStatus", "stageOfVotingProcess"];
  const statusText = ["Contact Status", "PTV Status", "Registration Status", "Stage of Voting Process"];

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

  const handleStatusOnClick = async (e) => {
    if (e.target.name == null) return;
    let index = statusFields.indexOf(e.target.name);
    let copy = statuses.slice();
    copy[index] = !copy[index];
    if (copy.every(field => !field)) return;
    setStatuses(copy);
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      {contacts.length > 0 ? (
        <div className="flex flex-col mx-6 mb-6 overflow-x-hidden">
          <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="w-full table-fixed">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      {fields.map((field) => field === "Status" ? (
                        <th key={field} scope="col">
                          <Menu as="div" className="relative inline-block text-left">
                            <div className="ml-4 w-64">
                              <Menu.Button className="inline-flex items-center py-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Status
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-left absolute left-4 w-60 mt-0.5 rounded-md shadow-lg bg-white ring-1 ring-white focus:outline-none">
                                <div className="py-1">
                                  {statusFields.map((field, index) =>
                                    <Menu.Item key={index}>
                                      <>
                                        <button
                                          role="button"
                                          className="block px-4 py-2 text-gray-700 text-sm font-normal w-full inline-flex items-center"
                                          onClick={handleStatusOnClick}
                                          name={field}
                                        >
                                          {statusText[index]}
                                          {statuses[index] ? <svg className="w-6 h-6 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg> : <></>}
                                        </button>
                                        {index === statusFields.length - 1 ? <></> : <br />}
                                      </>
                                    </Menu.Item>
                                  )}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </th>
                      ) : (
                        <TableHeader key={field} content={field} />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <Contact key={contact.id} contact={contact} statuses={statuses} onDelete={deleteContact} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
        // <h1 className="mx-6 text-xl font-semibold text-gray-500 dark:text-gray-400">No Contacts</h1>
      )
      }
    </>
  );
}

export default Table;
