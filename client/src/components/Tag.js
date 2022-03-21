function Tag({ value, onDelete }) {
    return (
        <button type="button" onClick={() => onDelete(value)} className="mt-2 mr-2 inline-flex items-center bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {value}
        </button>
    );
}

export default Tag;
