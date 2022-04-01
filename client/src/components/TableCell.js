import React from "react";

function TableCell(props) {
    return (
        <td className="truncate hover:text-clip hover:overflow-x-scroll py-3 pl-4 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{props.children}</td>
    );
}

export default TableCell;
