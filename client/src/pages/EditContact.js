import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

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

  // Form validation
  const validate = () => {
    let required = [contact.last_name, contact.first_name, contact.email, contact.phone_number,
    contact.house, contact.suite, contact.mailbox_center, contact.mailbox_number,
    contact.city, contact.state, contact.class_year, contact.contact_status, contact.ptv_status,
    contact.registration_status, contact.stage_of_voting_process];
    for (const i of required) {
      if (i == null || i.length < 1) return false;
    }
    return true;
  };

  // Update contact
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const response = await fetch(
        `http://localhost:8000/contacts/edit/${contact.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact)
        }
      );
      navigate("/contacts");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form>
      <div className="m-6 mb-0 bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800">
        <h5 className="m-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Edit Contact</h5>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
          <input type="text" name="last_name" value={contact.last_name || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
          <input type="text" name="first_name" value={contact.first_name || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
          <input type="email" name="email" value={contact.email || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
          <input type="tel" name="phone_number" value={contact.phone_number || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">House/Yard</label>
          <input type="text" name="house" value={contact.house || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Suite</label>
          <input type="text" name="suite" value={contact.suite || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mailbox Center</label>
          <input type="text" name="mailbox_center" value={contact.mailbox_center || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mailbox Number</label>
          <input type="text" name="mailbox_number" value={contact.mailbox_number || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Home City</label>
          <input type="text" name="city" value={contact.city || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Home State</label>
          <input type="text" name="state" value={contact.state || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <label htmlFor="classYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Class Year</label>
        <select name="class_year" id="classYear" onChange={inputChange} value={contact == null ? "" : contact.class_year} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>First-Year</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
        </select>
        <label htmlFor="contactStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Contact Status</label>
        <select name="contact_status" id="contactStatus" onChange={inputChange} value={contact == null ? "" : contact.contact_status} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Contacted</option>
          <option>No Response</option>
          <option>Not Contacted</option>
        </select>
        <label htmlFor="ptvStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">PTV Status</label>
        <select name="ptv_status" id="ptvStatus" onChange={inputChange} value={contact == null ? "" : contact.ptv_status} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Full PTV Completed</option>
          <option>Short PTV Completed</option>
          <option>Not Completed</option>
        </select>
        <label htmlFor="registrationStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Registration Status</label>
        <select name="registration_status" id="registrationStatus" onChange={inputChange} value={contact == null ? "" : contact.registration_status} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Registered</option>
          <option>In Progress</option>
          <option>Not Registered</option>
        </select>
        <label htmlFor="stageOfVotingProcess" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Stage of Voting Process</label>
        <select name="stage_of_voting_process" id="stageOfVotingProcess" onChange={inputChange} value={contact == null ? "" : contact.stage_of_voting_process} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Voted In Person</option>
          <option>Submitted Absentee Ballot</option>
          <option>Plan To Vote In Person</option>
          <option>Requested Absentee Ballot</option>
          <option>Unknown</option>
        </select>
      </div>

      <div className="pl-6 pb-6">
        <button type="button" onClick={onSubmit} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">Save</button>
        <Link to="/contacts">
          <button type="reset" className="absolute right-6 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700">Cancel</button>
        </Link>
      </div>
    </form>
  );
}

export default EditContact;
