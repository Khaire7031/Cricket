import React from 'react'
import { newsData } from './data'

export default function News() {
    const news = newsData.data;
    return (
        <div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Latest News
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {news.map((newsItem, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            className="w-full h-48 object-cover"
                            src={newsItem.image}
                            alt={newsItem.title}
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">{newsItem.title}</h2>
                            <p className="text-sm text-gray-500 mt-2">{newsItem.pub_date}</p>
                            <p className="text-gray-700 mt-2">{newsItem.description}</p>
                            <button
                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"

                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
