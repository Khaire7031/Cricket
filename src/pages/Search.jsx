import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function Search({ setSearchInput }) {
    const handleSearchInput = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        // if (e.target.value.length >= 1) {
        // }
    };

    return (
        <div className="flex md:order-2 w-[200px] lg:w-[250px]">
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <BiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                    type="text"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search ..."
                    onChange={handleSearchInput}
                />
            </div>
        </div>
    );
}
