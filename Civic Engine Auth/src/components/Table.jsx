import React from "react";
import Contact from "./Contact";

export default function Table({ contacts, onDelete }) {
  return (
    <table className="table table-striped table-sm my-3">
      <thead>
        <tr>
          <th>
            <span className="ml-1">First Name</span>
          </th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>House/Yard</th>
          <th>Suite</th>
          <th>Class Year</th>
          <th>Home City</th>
          <th>Home State</th>
          <th>Contact Status</th>
          <th>PTE Status</th>
          <th>Registration Status</th>
          <th>Stage of Voting Process</th>
          <th>Where Registered</th>
          <th>
            <span className="mr-1">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}
