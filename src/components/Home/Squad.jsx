import React from 'react';
import { data1 } from '../data';

export default function Squad({ matchId }) {
    const squadData = data1.data;
    console.log("Squad", squadData);

    const teamA = squadData.team_a;
    const teamB = squadData.team_b;

    // const { apiData, error, loading } = useCallApi(match/${matchId}/squads);

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Team A Squad */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">{teamA.name} Squad</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Image</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamA.player.map((player, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <img className="w-10 h-10 rounded-full" src={player.image} alt={player.name} />
                                        </td>
                                        <td className="px-6 py-4">{player.name}</td>
                                        <td className="px-6 py-4">{player.play_role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Divider for small screens */}
                <hr className="block md:hidden border-gray-300 my-6" />

                {/* Team B Squad */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">{teamB.name} Squad</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Image</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamB.player.map((player, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4">
                                            <img className="w-10 h-10 rounded-full" src={player.image} alt={player.name} />
                                        </td>
                                        <td className="px-6 py-4">{player.name}</td>
                                        <td className="px-6 py-4">{player.play_role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
