import { useCallback } from "react";
import "./SearchBar.css";

function SearchBar({ onContactsChange }) {

    // Use callbacks to update contacts on input change
    const inputChange = useCallback(async (e) => {
        const { value } = e.target;
        try {
            const response = await fetch(`http://localhost:8000/contacts/?query=${value}`);
            const parseResponse = await response.json();
            onContactsChange(parseResponse);
        } catch (error) {
            console.error(error.message);
        }
    }, [onContactsChange]);

    return (
        <>
            <input
                type="search"
                placeholder="Search"
                name="search"
                onChange={inputChange}
                className="form-control"
            />
        </>
    );
}

export default SearchBar;
