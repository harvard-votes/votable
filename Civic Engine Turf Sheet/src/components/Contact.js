import "./Contact.css";
import { useNavigate } from "react-router";

function Contact({ contact, onDelete }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <span className="ml-1">{contact.firstName}</span>
      </td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.houseYard}</td>
      <td>{contact.suite}</td>
      <td>{contact.classYear}</td>
      <td>{contact.homeCity}</td>
      <td>{contact.homeState}</td>
      <td>{contact.contactStatus}</td>
      <td>{contact.pteStatus}</td>
      <td>{contact.registrationStatus}</td>
      <td>{contact.stageOfVotingProcess}</td>
      <td>{contact.whereRegistered}</td>
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
