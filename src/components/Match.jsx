import React, { useContext } from 'react';
import PhoneContext from '../Hooks/PhoneContext';

const Match = ({ match }) => {
    if (!match) {
        return null;
    }
    const { isPhone } = useContext(PhoneContext);

    // console.log("Is Phone : ", isPhone)

    const {
        match_date,
        match_status,
        match_type,
        match_time,
        series,
        team_a,
        team_a_img,
        team_b,
        team_b_img,
        team_a_scores = "N/A",
        team_b_scores = "N/A",
        venue,
    } = match;

    return (
        <div className="w-[250px] mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            {/* Match Header */}
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{series}</span>
                <div>
                    <span className="text-xs font-bold text-white bg-red-500 rounded-lg m-1 px-1">{match_status || "Upcoming"} </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">| {match_type}</span>
                </div>
            </div>

            <hr className="my-2 border-gray-300 dark:border-gray-600" />

            {/* Teams Section */}
            <div className="flex justify-between items-center mb-4 px-2">

                {/* Team A */}
                <div className="text-center">
                    <img className="h-8 w-8 mx-auto rounded-full" src={team_a_img} alt={team_a} />
                    <p className="text-sm font-bold mt-1 dark:text-gray-200">{team_a.split(' ')[0]}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{team_a_scores}</p>
                </div>

                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">vs</span>

                {/* Team B */}
                <div className="text-center">
                    <img className="h-8 w-8 mx-auto rounded-full" src={team_b_img} alt={team_b} />
                    <p className="text-sm font-bold mt-1 dark:text-gray-200">{team_b.split(' ')[0]}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{team_b_scores}</p>
                </div>
            </div>

            <hr className="my-2 border-gray-300 dark:border-gray-600" />

            {/* Match Details */}
            <div className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                    {match_date} | {venue}
                </p>

            </div>
        </div>
    );
}


// If props changes then only render this comp
export default React.memo(Match);