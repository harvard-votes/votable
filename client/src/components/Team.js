import "./Contact.css";
import { useNavigate } from "react-router";
import TableCell from "./TableCell";

function Contact({
  key,
  contact,
  statuses,
  onDelete,
  checked,
  handleCheckmarkChange,
}) {
  const navigate = useNavigate();
  // console.log(checked);
  const {
    id,
    first_name,
    last_name,
    email,
    phone_number,
    hy,
    state,
    role,
    organizing_lead,
    notes,
    house,
    year,
  } = contact;
  const fields = [
    "Select",
    "Student Information",
    "Year",
    "Organizing Lead",
    "Notes",
    "",
  ];

  const arr = [
    <>
      {last_name}, {first_name}
    </>,
    <>
      {email}
      <br />
      {phone_number}
    </>,
    <>{year}</>,
    <>{organizing_lead}</>,
    <>{notes}</>,
  ];

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
      <td class="py-2 pl-4 pr-6 text-sm text-gray-500 dark:text-gray-400">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-indigo-600"
          name={contact.id}
          checked={checked}
          onChange={handleCheckmarkChange}
        />
      </td>
      {arr.map((field, index) => (
        // <td key={index} className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{field}</td>
        <TableCell key={index}>{field}</TableCell>
      ))}

      <td className="text-center py-3 pr-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        <a
          className="fas fa-edit mr-1"
          role="button"
          onClick={() => {
            navigate("/contacts/edit", { state: contact });
          }}
        />
        <a
          className="fas fa-trash"
          role="button"
          onClick={() => onDelete(contact.id)}
        />
      </td>
    </tr>
  );
}

export default Contact;
