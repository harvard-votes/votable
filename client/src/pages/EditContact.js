import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function EditContact() {
  const navigate = useNavigate();
  const initialContact = useLocation().state;

  const [contact, setContact] = useState(initialContact);

  // Update contact state on input change
  const inputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Update contact
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8000/edit-contact/${contact.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact)
        }
      );
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group m-3">
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={contact.last_name}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          value={contact.first_name}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          name="phone_number"
          value={contact.phone_number}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>House/Yard</label>
        <input
          type="text"
          placeholder="House/Yard"
          name="house"
          value={contact.house}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Suite</label>
        <input
          type="text"
          placeholder="Suite"
          name="suite"
          value={contact.suite}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Mailbox Center</label>
        <input
          type="text"
          placeholder="Mailbox Center"
          name="mailbox_center"
          value={contact.mailbox_center}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Mailbox Number</label>
        <input
          type="text"
          placeholder="Mailbox Number"
          name="mailbox_number"
          value={contact.mailbox_number}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Class Year</label>
        <select
          name="class_year"
          value={contact.class_year}
          onChange={inputChange}
          className="form-control"
        >
          <option value="First-Year">First-Year</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      <div className="form-group m-3">
        <label>Home City</label>
        <input
          type="text"
          placeholder="Home City"
          name="city"
          value={contact.city}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Home State</label>
        <input
          type="text"
          placeholder="Home State"
          name="state"
          value={contact.state}
          onChange={inputChange}
          className="form-control"
        ></input>
      </div>
      <div className="form-group m-3">
        <label>Should Contact</label>
        <select
          name="should_contact"
          value={contact.should_contact}
          onChange={inputChange}
          className="form-control"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="form-group m-3">
        <label>Contact Status</label>
        <select
          name="contact_status"
          value={contact.contact_status}
          onChange={inputChange}
          className="form-control"
        >
          <option value="Contacted">Contacted</option>
          <option value="Contacted But No Response">
            Contacted But No Response
          </option>
          <option value="Not Contacted">Not Contacted</option>
        </select>
      </div>
      <div className="form-group m-3">
        <label>PTE Status</label>
        <select
          name="pte_status"
          value={contact.pte_status}
          onChange={inputChange}
          className="form-control"
        >
          <option value="Full PTE Completed">Full PTE Completed</option>
          <option value="Only Short PTE Completed">
            Only Short PTE Completed
          </option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
      <div className="form-group m-3">
        <label>Registration Status</label>
        <select
          name="registration_status"
          value={contact.registration_status}
          onChange={inputChange}
          className="form-control"
        >
          <option value="Registered">Registered</option>
          <option value="Registration In Progress">
            Registration In Progress
          </option>
          <option value="Not Registered">Not Registered</option>
        </select>
      </div>
      <div className="form-group m-3">
        <label>Stage of Voting Process</label>
        <select
          name="stage_of_voting_process"
          value={contact.stage_of_voting_process}
          onChange={inputChange}
          className="form-control"
        >
          <option value="Voted In Person">Voted In Person</option>
          <option value="Submitted Mail-in/Absentee Ballot">
            Submitted Mail-In/Absentee Ballot
          </option>
          <option value="Plan To Vote In Person">Plan To Vote In Person</option>
          <option value="Requested Mail-in/Absentee Ballot">
            Requested Mail-In/Absentee Ballot
          </option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>

      <input type="submit" value="Save" className="ml-3 btn btn-outline-primary" />
    </form>
  );
}

export default EditContact;
