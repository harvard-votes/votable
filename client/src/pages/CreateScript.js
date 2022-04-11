import { React } from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Tag from "../components/Tag";

function CreateScript() {
    const navigate = useNavigate();

    const [script, setScript] = useState({ "body": "" });
    const [tagsInput, setTagsInput] = useState("");
    const [tags, setTags] = useState([]);

    const fieldNames = ["First Name", "Last Name", "House", "Suite", "Class Year",
        "City", "State", "Contact Status", "PTV Status", "Registration Status", "Stage of Voting Process"];
    const fieldValues = ["{first_name}", "{last_name}", "{house}", "{suite}", "{class_year}",
        "{city}", "{state}", "{contact_status}", "{ptv_status}", "{registration_status}", "{stage_of_voting_process}"];

    // Update script state on input change
    const inputChange = (e) => {
        const { name, value } = e.target;
        setScript({
            ...script,
            [name]: value,
        });
    };

    // Handle field
    const handleField = async (e) => {
        const name = e.target.innerHTML;
        const scriptElement = document.getElementById("scriptBody");
        const start = scriptElement.selectionStart, end = scriptElement.selectionEnd;
        const value = fieldValues[fieldNames.indexOf(name)];

        const update = script.body.slice(0, start) + value + script.body.slice(end);

        await setScript({
            ...script,
            body: update,
        });

        updateCaret(end + value.length);
    };

    // Update caret position
    const updateCaret = (i) => {
        const scriptElement = document.getElementById("scriptBody");
        scriptElement.focus();
        scriptElement.setSelectionRange(i, i);
    };

    // Handle tags input change
    const tagsInputChange = (e) => {
        const { value } = e.target;
        setTagsInput(value);
    };

    // Handle enter key on tags
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const { value } = e.target;
            if (!tags.includes(value) && value.length > 0) {
                setTags([
                    ...tags, value
                ]);
                setTagsInput("");
            }
        }
    };

    // Delete tag
    const deleteTag = async (value) => {
        setTags(tags.filter(tag => tag !== value));
    };

    // Form validation
    const validate = () => {
        let required = [script.title, script.description, script.timeline, script.body];
        for (const i of required) {
            if (i == null || i.length < 1) return false;
        }
        return true;
    };

    // Create script
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        try {
            const response = await fetch(
                "http://localhost:8000/scripts/create/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(script)
                }
            );
            navigate("/scripts");
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        setScript({
            ...script,
            tags: tags,
        });
    }, [tags]);

    return (
        <form>
            <div className="m-6 mb-0 bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800">
                <h5 className="m-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Create Script</h5>
            </div>
            <div className="p-6">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input type="text" name="title" value={script.title || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <input type="text" name="description" value={script.description || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Timeline</label>
                    <input type="date" name="timeline" value={script.timeline || ""} onChange={inputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tags (optional)</label>
                    <input type="text" name="tags" value={tagsInput || ""} onChange={tagsInputChange} onKeyDown={handleKeyDown} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Click 'Enter' to add tags.</p>
                    {tags.map((tag) => (
                        <Tag key={tag} value={tag} onDelete={deleteTag} />
                    ))}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Script</label>
                    <textarea id="scriptBody" type="text" name="body" value={script.body} onChange={inputChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your script here..." required />
                </div>
                {fieldNames.map((field) => (
                    <button key={field} onClick={handleField} type="button" className="mt-2 mr-2 inline-flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">
                        {field}
                    </button>
                ))}
            </div>

            <div className="pl-6 pb-6">
                <button type="button" onClick={onSubmit} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700">Create</button>
                <Link to="/scripts">
                    <button type="reset" className="absolute right-6 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700">Discard</button>
                </Link>
            </div>
        </form>
    );
}

export default CreateScript;
