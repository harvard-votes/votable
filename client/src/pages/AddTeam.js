import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddContact() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  // console.log(step);
  const [contact, setContact] = useState({
    class_year: "First-Year",
    contact_status: "Not Contacted",
    ptv_status: "Not Completed",
    registration_status: "Not Registered",
    stage_of_voting_process: "Unknown",
  });

  // Update contact state on input change
  const inputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Add contact
  const onSubmit = async () => {
    // e.preventDefault();
    // if (!validate()) return;
    try {
      const response = await fetch("http://localhost:8000/team/add/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      navigate("/team");
    } catch (error) {
      console.error(error.message);
    }
  };

  const nextStep = () => {
    // alert(step)
    if (step < 2) {
      setStep(step + 1);
    } else {
      onSubmit();
    }
  };

  const Step0 = () => {
    if (step != 0) return null;
    return (
      <div class="mx-4 grid grid-cols-1 md:grid-cols-2">
        <div
          class="rounded-lg m-3 shadow-md"
          style={{ backgroundSize: "cover", backgroundPosition: "left" }}
        >
          <div className="p-6">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={contact.last_name || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={contact.first_name || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={contact.email || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                value={contact.phone_number || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                House/Yard
              </label>
              <input
                type="text"
                name="hy"
                value={contact.hy || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>
        <div
          class="rounded-lg m-3 shadow-md"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundImage:
              'url("https://projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/testcivicengagement/files/rsz_1mju40d2a.jpg?m=1580409680&itok=6jc_yqUj")',
          }}
        ></div>
      </div>
    );
  };

  const Step2 = () => {
    if (step != 2) return null;
    return (
      <div class="mx-4 grid grid-cols-1 md:grid-cols-2">
        <div
          class="rounded-lg m-3 shadow-md"
          style={{ backgroundSize: "cover", backgroundPosition: "left" }}
        >
          <div className="p-6">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                House / Yard
              </label>
              <select
                type="text"
                name="hy2"
                value={contact.hy2 || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option>Lowell</option>
                <option>Quincy</option>
                <option>Adams</option>
                <option>Cabot</option>
                <option>Pfono</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Year
              </label>
              <select
                type="text"
                name="year"
                value={contact.year || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="rounded-lg m-3 shadow-md"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundImage:
              'url("https://projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/testcivicengagement/files/rsz_1mju40d2a.jpg?m=1580409680&itok=6jc_yqUj")',
          }}
        ></div>
      </div>
    );
  };

  const Step1 = () => {
    if (step != 1) return null;
    return (
      <div class="mx-4 grid grid-cols-1 md:grid-cols-2">
        <div
          class="rounded-lg m-3 shadow-md"
          style={{ backgroundSize: "cover", backgroundPosition: "left" }}
        >
          <div className="p-6">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Role
              </label>
              <select
                type="text"
                name="role"
                value={contact.role || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option>Admin</option>
                <option>Organizing Fellow</option>
                <option>House Captain</option>
                <option>Volunteer</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Organizing Lead
              </label>
              <input
                type="text"
                name="organizing_lead"
                value={contact.organizing_lead || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Notes
              </label>
              <input
                type="email"
                name="notes"
                value={contact.notes || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>
        <div
          class="rounded-lg m-3 shadow-md"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundImage:
              'url("https://projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/testcivicengagement/files/rsz_1mju40d2a.jpg?m=1580409680&itok=6jc_yqUj")',
          }}
        ></div>
      </div>
    );
  };

  const Step3 = () => {
    if (step != 3) return null;
    return (
      <div class="mx-4 grid grid-cols-1 md:grid-cols-2">
        <div
          class="rounded-lg m-3 shadow-md"
          style={{ backgroundSize: "cover", backgroundPosition: "left" }}
        >
          <div className="p-6">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={contact.last_name || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={contact.first_name || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={contact.email || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone_number"
                value={contact.phone_number || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                House/Yard
              </label>
              <input
                type="text"
                name="house"
                value={contact.hy || ""}
                onChange={inputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>
        <div
          class="rounded-lg m-3 shadow-md"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundImage:
              'url("https://projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/testcivicengagement/files/rsz_1mju40d2a.jpg?m=1580409680&itok=6jc_yqUj")',
          }}
        ></div>
      </div>
    );
  };

  return (
    <>
      <div className="m-6 mb-0 bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800">
        <h5 className="m-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Add Team Member
        </h5>
      </div>
      {Step0()}
      {Step1()}
      {Step2()}
      {Step3()}

      <div className="pl-6 pb-6">
        <button
          type="button"
          onClick={nextStep}
          className="absolute right-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700"
        >
          {step == 2 ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}

export default AddContact;
