import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from '../components/Navbar'

function EditContact({ onSave }) {
  const navigate = useNavigate();
  const initialContact = useLocation().state;

  const [contact, setContact] = useState(initialContact);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await onSave(contact);

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={contact.firstName}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={contact.lastName}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={contact.email}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>House/Yard</label>
          <input
            type="text"
            placeholder="House/Yard"
            name="houseYard"
            value={contact.houseYard}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>Suite</label>
          <input
            type="text"
            placeholder="Suite"
            name="suite"
            value={contact.suite}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>Class Year</label>
          <input
            type="text"
            placeholder="Class Year"
            name="classYear"
            value={contact.classYear}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>Home City</label>
          <input
            type="text"
            placeholder="Home City"
            name="homeCity"
            value={contact.homeCity}
            onChange={inputChange}
          ></input>
        </div>
        <div className="form-control">
          <label>Home State</label>
          <input
            type="text"
            placeholder="Home State"
            name="homeState"
            value={contact.homeState}
            onChange={inputChange}
          ></input>
        </div>

        <div className="form-control">
          <label>Contact Status</label>
          <select
            name="contactStatus"
            value={contact.contactStatus}
            onChange={inputChange}
          >
            <option value="Contacted">Contacted</option>
            <option value="Contacted But No Response">
              Contacted But No Response
          </option>
            <option value="Not Contacted">Not Contacted</option>
          </select>
        </div>
        <div className="form-control">
          <label>PTE Status</label>
          <select
            name="pteStatus"
            value={contact.pteStatus}
            onChange={inputChange}
          >
            <option value="Full PTE Completed">Full PTE Completed</option>
            <option value="Only Short PTE Completed">
              Only Short PTE Completed
          </option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </div>
        <div className="form-control">
          <label>Registration Status</label>
          <select
            name="registrationStatus"
            value={contact.registrationStatus}
            onChange={inputChange}
          >
            <option value="Registered">Registered</option>
            <option value="Registration In Progress">
              Registration In Progress
          </option>
            <option value="Not Registered">Not Registered</option>
          </select>
        </div>
        <div className="form-control">
          <label>Stage of Voting Process</label>
          <select
            name="stageOfVotingProcess"
            value={contact.stageOfVotingProcess}
            onChange={inputChange}
          >
            <option value="Voted In Person">Voted In Person</option>
            <option value="Submitted Mail-in/Absentee Ballot">
              Submitted Mail-in/Absentee Ballot
          </option>
            <option value="Plan To Vote In Person">Plan To Vote In Person</option>
            <option value="Requested Mail-in/Absentee Ballot">
              Requested Mail-in/Absentee Ballot
          </option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        <div className="form-control">
          <label>Where Registered</label>
          <input
            type="text"
            placeholder="Where Registered"
            name="whereRegistered"
            value={contact.whereRegistered}
            onChange={inputChange}
          ></input>
        </div>

        <input type="submit" value="Save" className="btn btn-primary btn-block m-3" />
      </form>
    </>
  );
}

export default EditContact;
