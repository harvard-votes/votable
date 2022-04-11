import { useState, useEffect, Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ScriptCard from "../components/ScriptCard";
import { Menu, Transition } from '@headlessui/react';

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

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const [orderByField, setOrderByField] = useState("lastModified");
    const [orderByOrdering, setOrderByOrdering] = useState(true);   // true = down

    const handleOrderByOnClick = async (e) => {
        if (e.target.name == null) return;
        let field = e.target.name;
        if (orderByField === field) {
            setOrderByOrdering(!orderByOrdering);
        } else {
            setOrderByField(field);
            setOrderByOrdering(true);
        }
    }

    const chevDown = (
        <svg className="w-6 h-6 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
    );

    const chevUp = (
        <svg className="w-6 h-6 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" /></svg>
    );

    useEffect(() => {
        getScripts();
    }, []);

    return (
        <>
            <div className="inline-flex items-center">
                <SearchBar />



                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                        Order By
                        <svg className="ml-1 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute w-44 rounded-md shadow-lg bg-white focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            role="button"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm font-normal w-full inline-flex items-center'
                                            )}
                                            onClick={handleOrderByOnClick}
                                            name="lastModified"
                                        >
                                            Last Modified
                                            {orderByField === "lastModified" ? <>{orderByOrdering ? <>{chevDown}</> : <>{chevUp}</>}</> : <></>}
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            role="button"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm font-normal w-full inline-flex items-center'
                                            )}
                                            onClick={handleOrderByOnClick}
                                            name="timeCreated"
                                        >
                                            Time Created
                                            {orderByField === "timeCreated" ? <>{orderByOrdering ? <>{chevDown}</> : <>{chevUp}</>}</> : <></>}
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            role="button"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm font-normal w-full inline-flex items-center'
                                            )}
                                            onClick={handleOrderByOnClick}
                                            name="alphabetical"
                                        >
                                            Alphabetical
                                            {orderByField === "alphabetical" ? <>{orderByOrdering ? <>{chevDown}</> : <>{chevUp}</>}</> : <></>}
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>



                <Link to="/scripts/create" className="absolute right-6">
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">Create Script</button>
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
