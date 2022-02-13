import "./Contact.css";
import { useNavigate } from "react-router";

function Contact({ contact, onDelete }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <span className="ml-1">{contact.last_name}</span>
      </td>
      <td>{contact.first_name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
      <td>{contact.house}</td>
      <td>{contact.suite}</td>
      <td>{contact.mailbox_center}</td>
      <td>{contact.mailbox_number}</td>
      <td>{contact.class_year}</td>
      <td>{contact.city}</td>
      <td>{contact.state}</td>
      <td>{contact.should_contact ? "Yes" : "No"}</td>
      <td>{contact.contact_status}</td>
      <td>{contact.pte_status}</td>
      <td>{contact.registration_status}</td>
      <td>{contact.stage_of_voting_process}</td>
      <td>
        <i
          className="fas fa-edit mr-1"
          onClick={() => {
            navigate("/edit-contact", { state: contact });
          }}
        />
        <i className="fas fa-trash mr-1" onClick={() => onDelete(contact.id)} />
      </td>
    </tr>
  );
}

export default Contact;
