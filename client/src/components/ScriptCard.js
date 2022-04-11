import { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';

function ScriptCard({ script, onDelete }) {
    const navigate = useNavigate();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div className="w-96 ml-6 mb-6 inline-block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="inline-flex items-center rounded-lg p-1">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
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
                        <Menu.Items className="origin-top-right absolute right-0 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            role="button"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm font-normal w-full inline-flex items-center'
                                            )}
                                            onClick={() => onDelete(script.id)}
                                            name="delete"
                                        >
                                            Delete
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <div className="flex flex-col items-center pb-10">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{script.title}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{script.description}</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                    <button onClick={() => {
                        navigate("/scripts/edit", { state: script });
                    }} type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700">Edit</button>
                    <button onClick={() => {
                        navigate("/script", { state: script });
                    }} type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 rounded-lg">Canvass
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScriptCard;
