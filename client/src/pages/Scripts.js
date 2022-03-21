import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ScriptCard from "../components/ScriptCard";

function Scripts() {
    const [scripts, setScripts] = useState([]);

    // Get all scripts
    const getScripts = async () => {
        try {
            const response = await fetch("http://localhost:8000/scripts");
            const jsonData = await response.json();

            setScripts(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    // Delete script
    const deleteScript = async (id) => {
        if (window.confirm("Are you sure you want to delete this script?")) {
            try {
                const response = await fetch(`http://localhost:8000/scripts/${id}`, {
                    method: "DELETE"
                });

                setScripts(scripts.filter(script => script.id !== id));
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    // Order by time created
    const orderByTimeCreated = () => {
        console.log("hi");
    }

    useEffect(() => {
        getScripts();
    }, []);

    return (
        <>
            <div className="p-6 inline-flex items-center">
                <div className="flex relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    </div>
                    <input type="search" id="search" className="p-2 pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                </div>

                <div>
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800" type="button">Order By<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                    {/* Dropdown menu */}
                    <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                        <ul className="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <a href="" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Last Modified</a>
                            </li>
                            <li>
                                <button id="orderByTimeCreated" onClick={orderByTimeCreated} type="button" className="w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    <span className="inline-flex items-center">
                                        Time Created
                                        <svg className="w-5 h-5 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                    </span>
                                </button>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Alphabetical</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Link to="/scripts/create">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Script</button>
                </Link>
            </div>

            <div className="text-center">
                {scripts.map((script) => (
                    <ScriptCard key={script.id} script={script} onDelete={deleteScript} />
                ))}
            </div>
        </>
    );
}

export default Scripts;
