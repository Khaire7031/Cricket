import React from 'react';
import NewsBox from './NewsBox';

export default function NewsList({ news, hasMore, onLoadMore }) {
    return (
        <div>
            <span className="self-center text-2xl pl-2 font-semibold whitespace-nowrap dark:text-white">
                Latest News
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {news.length > 0 ? (
                    news.map((newsItem, index) => (
                        <NewsBox key={index} newsItem={newsItem} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-4">No news found</p>
                )}
            </div>
            {hasMore && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={onLoadMore}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
