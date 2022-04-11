import { useState } from "react";

function Contact() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <div className="w-full flex">
        <div className="w-5/12 h-auto bg-gray-100 text-left p-20">
          <h3 className="text-3xl mb-4 font-bold">Contact Us</h3>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Interested in supporting us, partnering with us, or learning more? Email us at:
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400 inline-flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <a href="mailto:voteschallenge@harvard.edu">voteschallenge@harvard.edu</a>
          </p>
          <p className="font-semibold text-gray-500 dark:text-gray-400 inline-flex items-center">
            You can also leave us a message here!
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </p>
        </div>
        <div className="w-7/12 h-auto bg-white p-12">
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
              <input type="text" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
              <textarea id="messageBody" type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..." required />
            </div>
            <button type="submit" onClick={onSubmit} className="w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
