import React from 'react';

const BasicInfo = ({ matchData }) => {

    const isLive = matchData?.match_status === 3;

    return (
        <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='text-3xl font-bold text-gray-800 text-center mb-4'>
                {matchData?.matchs} - {matchData?.match_type}
            </div>

            <div className="flex justify-between items-center mb-6">
                {/* Team A */}
                <div className="flex items-center">
                    <img src={matchData?.team_a_img} alt={matchData?.team_a} className="w-16 h-16 rounded-full mr-4" />
                    <span className="text-xl font-semibold text-gray-700">{matchData?.team_a}</span>
                </div>

                {/* VS Separator */}
                <span className="text-xl font-bold text-gray-600">VS</span>

                {/* Team B */}
                <div className="flex items-center">
                    <img src={matchData?.team_b_img} alt={matchData?.team_b} className="w-16 h-16 rounded-full mr-4" />
                    <span className="text-xl font-semibold text-gray-700">{matchData?.team_b}</span>
                </div>
            </div>

            {/* Venue */}
            <div className="text-lg text-gray-600 mb-2">
                <strong>Venue:</strong> {matchData?.venue}
            </div>

            {/* Match Time */}
            <div className="text-lg text-gray-600 mb-2">
                <strong>Time:</strong> {matchData?.match_time}
            </div>

            {/* Weather Info */}
            <div className="flex items-center text-lg text-gray-600 mb-4">
                <img
                    src={matchData?.venue_weather?.weather_icon}
                    alt="Weather"
                    className="w-8 h-8 mr-2"
                />
                <span>{matchData?.venue_weather?.weather}</span>
                <span> | {matchData?.venue_weather?.temp_c}°C</span>
            </div>

            {/* Live Status */}
            <div className={`text-center font-semibold text-white py-2 px-4 rounded-md ${isLive ? 'bg-green-500' : 'bg-gray-500'}`}>
                {isLive ? 'LIVE' : 'Completed'}
            </div>
        </div>
    );
};

export default BasicInfo;
