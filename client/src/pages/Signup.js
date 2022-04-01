import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup({ setAuthState }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);

    setAuthState(true);
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-100 rounded py-2">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://projects.iq.harvard.edu/files/styles/os_files_xxlarge/public/testcivicengagement/files/rsz_1mju40d2a.jpg?m=1580409680&itok=6jc_yqUj")' }} />
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">

            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl font-semibold">Create an Account</h3>
            </div>

            <div className="p-6">
              <form>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <p className="text-left mb-4 text-sm text-gray-500 dark:text-gray-400">
                  By signing up for an account, you agree to Votable's <Link to="/terms-of-service" className="underline">Terms of Service</Link> and <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
                </p>
                <button type="submit" onClick={onSubmit} className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">Sign up</button>
              </form>
              <p className="text-left mt-4 text-sm text-gray-500 dark:text-gray-400">
                Already have an account? <Link to="/login" className="text-green-700 font-semibold">Log in here!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;