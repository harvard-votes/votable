import "./Contact.css";
import { useNavigate } from "react-router";
import TableCell from "./TableCell";

function Contact({ contact, statuses, onDelete }) {
  const navigate = useNavigate();

  const { last_name, first_name, email, phone_number, house, suite, mailbox_center, mailbox_number,
    class_year, city, state, contact_status, ptv_status, registration_status, stage_of_voting_process } =
    contact;

  const arr = [(<>{last_name}, {first_name}<br />{class_year}</>),
  (<>{email}<br />{phone_number}</>),
  (<>{house}, {suite}<br />{mailbox_center} {mailbox_number}</>),
  (<>{city}, {state}</>)];

  const statusFields = [contact_status, ptv_status, registration_status, stage_of_voting_process];

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
      {arr.map((field, index) => (
        // <td key={index} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{field}</td>
        <TableCell key={index}>{field}</TableCell>
      ))}
      <TableCell>{statusFields.filter((_field, index) => statuses[index]).map((field, index) =>
        <div key={index}>{field}</div>)}
      </TableCell>
      <td className="text-center py-3 pr-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <a
          className="fas fa-edit mr-1"
          role="button"
          onClick={() => {
            navigate("/contacts/edit", { state: contact });
          }}
        />
        <a className="fas fa-trash" role="button" onClick={() => onDelete(contact.id)} />
      </td>
    </tr>
  );
}

export default Contact;
