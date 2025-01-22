import React from 'react';
import { newsData } from '../data';

export default function News({ searchInput }) {
    const news = newsData.data;

    // Ensure searchInput is not undefined or null, fallback to empty string
    const searchTerm = searchInput ? searchInput.toLowerCase() : '';

    // Filter the news based on the search input (search by title and description)
    const filteredNews = news.filter(newsItem =>
        newsItem.title.toLowerCase().includes(searchTerm) ||
        newsItem.description.toLowerCase().includes(searchTerm)
    );

    // Sort the filtered or unfiltered news based on publication date
    const sortedNews = filteredNews.sort((a, b) => {
        return new Date(b.pub_date) - new Date(a.pub_date);
    });

    return (
        <div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Latest News
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {sortedNews.length > 0 ? (
                    sortedNews.map((newsItem, index) => (
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
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-4">No news found</p>
                )}
            </div>
        </div>
    );
}
