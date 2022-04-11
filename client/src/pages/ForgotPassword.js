import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <div className="bg-gray-100 rounded py-2">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/testcivicengagement/files/about.jpg?m=1580952160&itok=gIWeSzE_")' }} />
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">

            <h3 className="px-6 pt-4 text-2xl font-semibold">Reset your password</h3>
            <p className="px-6 text-left mt-4 text-sm text-gray-500 dark:text-gray-400">
              Or <Link to="/signup" className="text-green-700 font-semibold">sign up here!</Link>
            </p>

            <div className="p-6">
              <form>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" onClick={onSubmit} className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">Send reset email</button>
              </form>
              <p className="text-left mt-4 text-sm text-gray-500 dark:text-gray-400">
                <Link to="/login" className="text-green-700 font-semibold">Back to login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;