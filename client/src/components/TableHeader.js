import React from "react";

function TableHeader({ content }) {
    return (
        <th scope="col" className="py-3 pl-4 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
            {content}
        </th>
    );
}

export default TableHeader;
