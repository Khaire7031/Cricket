import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { seriesData } from '../data';

export default function Series({ searchInput }) {
    const data = seriesData.data;
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Filter series data based on search input
    const filteredData = searchInput
        ? data.filter((item) =>
            item.series_type.toLowerCase().includes(searchInput.toLowerCase())
        )
        : data;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Cricket Series</h1>

            {/* Conditionally render content based on filtered data */}
            {filteredData.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No series found.</p>
            ) : (
                <SeriesTable seriesList={filteredData} navigate={navigate} />
            )}
        </div>
    );
}

// Series Table Component
const SeriesTable = ({ seriesList, navigate }) => {
    // Handle click on a series to navigate
    const handleClick = (seriesId) => {
        navigate(`/series/${seriesId}`);
    };

    return (
        <div className="overflow-x-auto container mx-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white text-xs sm:text-sm">
                    <tr>
                        <th className="px-3 py-2 text-left font-semibold">Image</th>
                        <th className="px-3 py-2 text-left font-semibold">Series</th>
                        <th className="px-3 py-2 text-left font-semibold">Type</th>
                        <th className="px-3 py-2 text-left font-semibold">Matches</th>
                        <th className="px-3 py-2 text-left font-semibold">Month</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-xs sm:text-sm">
                    {seriesList.map((series, index) => (
                        <tr
                            key={series.series_id}
                            className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                            onClick={() => handleClick(series.series_id)} // Make row clickable
                            style={{ cursor: 'pointer' }}
                        >
                            <td className="px-3 py-2 border-b border-gray-300">
                                <img
                                    src={series.image}
                                    alt={series.series}
                                    className="w-24 h-14 sm:w-32 sm:h-20 object-cover rounded-md shadow-sm mx-auto"
                                />
                            </td>
                            <td className="px-3 py-2 border-b border-gray-300">{series.series}</td>
                            <td className="px-3 py-2 border-b border-gray-300">{series.series_type}</td>
                            <td className="px-3 py-2 border-b border-gray-300">{series.total_matches}</td>
                            <td className="px-3 py-2 border-b border-gray-300">{series.month_wise}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
