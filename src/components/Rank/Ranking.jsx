import React from 'react';
import { playerRankData, teamRankData } from '../data';

const TeamRanking = ({ url, type }) => {
    const apiData = teamRankData || {};  // Replace with your API response
    const displayedData = apiData?.data?.slice(0, 10);  // Show top 10 rankings

    return (
        <div className="w-full lg:w-1/3 p-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                    <h2 className="text-xl font-semibold text-center">{type} Rankings</h2>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-7 py-2">Image</th>
                            <th scope="col" className="px-2 py-2">Team</th>
                            <th scope="col" className="px-2 py-2">Rating</th>
                            <th scope="col" className="px-2 py-2">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData?.map((team, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <td className="px-2 py-2">
                                    <img src={team.flag} alt={team.team || "Team flag"} className="h-8 rounded-full w-8 sm:h-10 sm:w-10 mx-auto" />
                                </td>
                                <td className="px-2 py-2">{team.team}</td>
                                <td className="px-2 py-2">{team.rating}</td>
                                <td className="px-2 py-2">{team.point}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const PlayerRanking = ({ url, type }) => {
    const apiData = playerRankData || {};  // Replace with your API response
    const displayedData = apiData?.data?.slice(0, 10);  // Show top 10 rankings

    return (
        <div className="w-full lg:w-1/3 p-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                    <h2 className="text-xl font-semibold text-center">{type} Rankings</h2>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 py-2">Image</th>
                            <th scope="col" className="px-2 py-2">Rank</th>
                            <th scope="col" className="px-2 py-2">Player</th>
                            <th scope="col" className="px-2 py-2">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData?.map((player, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <td className="px-2 py-2">
                                    <img src={player.img} alt={player.name || "Player image"} className="h-8 w-8 rounded-full sm:h-10 sm:w-10 mx-auto" />
                                </td>
                                <td className="px-2 py-2">{player.rank}</td>
                                <td className="px-2 py-2">{player.name}</td>
                                <td className="px-2 py-2">{player.rating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function Ranking() {
    return (
        <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-semibold text-center">Ranking</h1>

            <div className="flex flex-wrap -mx-4">
                {/* Team Rankings */}
                <TeamRanking url={"teamRanking/1"} type="Women's T20 Allrounders" /> {/* T20 */}
                <TeamRanking url={"teamRanking/2"} type="Men's T20 Allrounders" /> {/* ODI */}
                <TeamRanking url={"teamRanking/3"} type="Women's Test Allrounders" /> {/* Test */}

                {/* Player Rankings */}
                <PlayerRanking url={"playerRanking/1"} type="Women's T20 Allrounders" />
                <PlayerRanking url={"playerRanking/2"} type="Men's T20 Allrounders" />
                <PlayerRanking url={"playerRanking/3"} type="Women's ODI Allrounders" />
                <PlayerRanking url={"playerRanking/4"} type="Men's ODI Allrounders" />
                <PlayerRanking url={"playerRanking/5"} type="Women's Test Allrounders" />
                <PlayerRanking url={"playerRanking/6"} type="Men's Test Allrounders" />
                {/* Add more PlayerRanking components as needed */}
            </div>
        </div>
    );
}
