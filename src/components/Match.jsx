import React, { useContext } from 'react';
import PhoneContext from '../Hooks/PhoneContext';
import { useNavigate } from 'react-router-dom';

const Match = ({ match }) => {
    if (!match) {
        return null;
    }

    const {
        match_date = "TBD",
        match_status = "Upcoming",
        match_type = "N/A",
        series = "Unknown Series",
        team_a = "Team A",
        team_a_img = "/default-team.png",
        team_b = "Team B",
        team_b_img = "/default-team.png",
        team_a_scores = "N/A",
        team_b_scores = "N/A",
        venue = "Unknown Venue",
        match_id
    } = match;

    const { isPhone } = useContext(PhoneContext);
    const navigate = useNavigate();

    const handleNavigate = () => navigate(`/match/${match_id}`);

    return (
        <div
            className="min-w-[270px] min-h-[200px] mx-auto p-3 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between cursor-pointer"
            onClick={handleNavigate}
        >
            <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{series}</span>
                <div>
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">{match_status}</span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">| {match_type}</span>
                </div>
            </div>

            <hr className="my-1 border-gray-300 dark:border-gray-600" />

            <div className="flex justify-between items-center px-2">
                <div className="text-center">
                    <img className="h-10 w-10 mx-auto rounded-full" src={team_a_img} alt={team_a} />
                    <p className="text-xs font-bold mt-1 dark:text-gray-200">{team_a.split(' ')[0]}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{team_a_scores}</p>
                </div>

                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">vs</span>

                <div className="text-center">
                    <img className="h-10 w-10 mx-auto rounded-full" src={team_b_img} alt={team_b} />
                    <p className="text-xs font-bold mt-1 dark:text-gray-200">{team_b.split(' ')[0]}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{team_b_scores}</p>
                </div>
            </div>

            <hr className="my-1 border-gray-300 dark:border-gray-600" />

            <div className="text-xs text-gray-700 dark:text-gray-300 text-center">
                <p>{match_date} | {venue}</p>
            </div>
        </div>
    );
};

export default React.memo(Match);
