import { React, Fragment } from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Table from "../components/TeamTable";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

function TurfSheet() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [orderByField, setOrderByField] = useState("lastName");
  const [orderByOrdering, setOrderByOrdering] = useState(true); // true = down

  const handleOrderByOnClick = async (e) => {
    if (e.target.name == null) return;
    let field = e.target.name;
    if (orderByField === field) {
      setOrderByOrdering(!orderByOrdering);
    } else {
      setOrderByField(field);
      setOrderByOrdering(true);
    }
  };

  const chevDown = (
    <svg
      className="w-6 h-6 absolute right-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const chevUp = (
    <svg
      className="w-6 h-6 absolute right-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );

  return (
    <>
      <div className="inline-flex items-center">
        <SearchBar />

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
            Order By
            <svg
              className="ml-1 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
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
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm font-normal w-full inline-flex items-center"
                      )}
                      onClick={handleOrderByOnClick}
                      name="lastName"
                    >
                      Last Name
                      {orderByField === "lastName" ? (
                        <>{orderByOrdering ? <>{chevDown}</> : <>{chevUp}</>}</>
                      ) : (
                        <></>
                      )}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      role="button"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm font-normal w-full inline-flex items-center"
                      )}
                      onClick={handleOrderByOnClick}
                      name="firstName"
                    >
                      First Name
                      {orderByField === "firstName" ? (
                        <>{orderByOrdering ? <>{chevDown}</> : <>{chevUp}</>}</>
                      ) : (
                        <></>
                      )}
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link to="/team/add" className="absolute right-6">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700"
          >
            Add Team Member
          </button>
        </Link>
      </div>
      <Table />
    </>
  );
}

export default TurfSheet;
