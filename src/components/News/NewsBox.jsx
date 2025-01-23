import React from 'react';

export default function NewsBox({ newsItem }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src={newsItem.image}
                alt={newsItem.title}
            />
            <div className="p-4">
                <h2 className="text-lg font-bold">{newsItem.title}</h2>
                <p className="text-sm text-gray-500 mt-2">{newsItem.pub_date}</p>
                <p className="text-gray-700 mt-2">{newsItem.description}</p>
            </div>
        </div>
    );
}
