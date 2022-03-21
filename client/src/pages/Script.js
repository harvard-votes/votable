import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Script.css';

function Script() {
    const navigate = useNavigate();
    const initialScript = useLocation().state;

    const [script, setScript] = useState(initialScript);
    const [contacts, setContacts] = useState([]);
    const [contactIndex, setContactIndex] = useState(0);
    const [replacedBody, setReplacedBody] = useState("");

    const contactFieldNames = ["First Name", "Last Name", "House/Yard", "Suite", "Class Year",
        "Home City", "Home State", "Contact Status", "PTV Status", "Registration Status", "Stage of Voting Process"];

    // Update contacts state on input change
    const inputChange = async (e) => {
        const { name, value } = e.target;
        let contactsCopy = [...contacts];
        contactsCopy[contactIndex][name] = value;
        await setContacts(contactsCopy);
        submit();
    };

    // Update contact
    const submit = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/edit-contact/${contacts[contactIndex].id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contacts[contactIndex])
                }
            );
        } catch (error) {
            console.error(error.message);
        }
    };

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

    // Update script body
    const updateBody = () => {
        var updatedBody = script.body;
        if (contacts[contactIndex] == null) return;
        const { first_name, last_name, house, suite, class_year, city, state,
            contact_status, ptv_status, registration_status, stage_of_voting_process } =
            contacts[contactIndex];
        const arr = [first_name, last_name, house, suite, class_year, city, state,
            contact_status, ptv_status, registration_status, stage_of_voting_process];
        const fieldValues = ["{first_name}", "{last_name}", "{house}", "{suite}", "{class_year}",
            "{city}", "{state}", "{contact_status}", "{ptv_status}", "{registration_status}", "{stage_of_voting_process}"];
        for (let i = 0; i < fieldValues.length; i++) {
            updatedBody = updatedBody.replaceAll(fieldValues[i], arr[i]);
        }
        setReplacedBody(updatedBody);
    };

    // Get information regarding current contact
    const getContactInfo = () => {
        if (contacts[contactIndex] == null) return [];
        const { first_name, last_name, house, suite, class_year, city, state,
            contact_status, ptv_status, registration_status, stage_of_voting_process } =
            contacts[contactIndex];
        const arr = [first_name, last_name, house, suite, class_year, city, state,
            contact_status, ptv_status, registration_status, stage_of_voting_process];
        return arr;
    }

    // Previous contact
    const prev = () => {
        if (contactIndex - 1 < 0) return;
        setContactIndex(contactIndex - 1);
    }

    // Next contact
    const next = () => {
        if (contactIndex + 1 >= contacts.length) return;
        setContactIndex(contactIndex + 1);
    };

    useEffect(() => {
        getContacts();
    }, []);

    useEffect(() => {
        updateBody();
    }, [contactIndex]);

    useEffect(() => {
        updateBody();
    }, [contacts]);

    return (
        <div className="p-6">
            <div className="inline-flex w-full">
                <div className="p-6 mr-6 w-full bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <p className="script text-lg">{replacedBody}</p>
                </div>
                <div className="p-6 w-fit whitespace-nowrap bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    {contactFieldNames.map((field, index) => (
                        <p key={field}>{field}: {getContactInfo()[index]}</p>
                    ))}
                </div>
            </div>
            <div className="p-6 my-6 w-full bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="contactStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Contact Status</label>
                <select name="contact_status" id="contactStatus" onChange={inputChange} value={contacts[contactIndex] == null ? "" : contacts[contactIndex].contact_status} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Contacted</option>
                    <option>No Response</option>
                    <option>Not Contacted</option>
                </select>
                <label htmlFor="ptvStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">PTV Status</label>
                <select name="ptv_status" id="ptvStatus" onChange={inputChange} value={contacts[contactIndex] == null ? "" : contacts[contactIndex].ptv_status} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Full PTV Completed</option>
                    <option>Short PTV Completed</option>
                    <option>Not Completed</option>
                </select>
                <label htmlFor="registrationStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Registration Status</label>
                <select name="registration_status" id="registrationStatus" onChange={inputChange} value={contacts[contactIndex] == null ? "" : contacts[contactIndex].registration_status} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Registered</option>
                    <option>In Progress</option>
                    <option>Not Registered</option>
                </select>
                <label htmlFor="stageOfVotingProcess" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Stage of Voting Process</label>
                <select name="stage_of_voting_process" id="stageOfVotingProcess" onChange={inputChange} value={contacts[contactIndex] == null ? "" : contacts[contactIndex].stage_of_voting_process} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Voted In Person</option>
                    <option>Submitted Absentee Ballot</option>
                    <option>Plan To Vote In Person</option>
                    <option>Requested Absentee Ballot</option>
                    <option>Unknown</option>
                </select>
            </div>

            <div className="inline-flex mb-6 items-center">
                <button type="button" onClick={prev} className="relative left-0 text-blue-700 inline-flex items-center hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm pl-1.5 pr-3.5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Previous
                </button>
                <p className="w-48 absolute left-64 right-0 mx-auto text-center">{contactIndex + 1} of {contacts.length}</p>
                <button type="button" onClick={next} className="absolute right-6 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm pl-4 pr-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    );
}

export default Script;
