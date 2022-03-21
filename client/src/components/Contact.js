import "./Contact.css";
import { useNavigate } from "react-router";
import TableCell from "./TableCell";

function Contact({ contact, onDelete }) {
  const navigate = useNavigate();

  const { last_name, first_name, email, phone_number, house, suite, mailbox_center, mailbox_number,
    class_year, city, state, contact_status, ptv_status, registration_status, stage_of_voting_process } =
    contact;

  const arr = [(<>{last_name}, {first_name}<br />{house}, {suite}</>),
  (<>{email}<br />{phone_number}</>),
  (<>{city}, {state}</>),
  (<>{mailbox_center} {mailbox_number}</>),
  (<>{contact_status}<br />{ptv_status}<br />{registration_status}<br />{stage_of_voting_process}</>)];

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
      {arr.map((field, index) => (
        // <td key={index} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{field}</td>
        <TableCell key={index}>{field}</TableCell>
      ))}
      <td className="py-3 pl-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <i
          className="fas fa-edit mr-1"
          onClick={() => {
            navigate("/edit-contact", { state: contact });
          }}
        />
        <i className="fas fa-trash" onClick={() => onDelete(contact.id)} />
      </td>
    </tr>
  );
}

export default Contact;
