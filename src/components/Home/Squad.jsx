import React from 'react';
import { data1 } from '../data';
import { Link } from 'react-router-dom';
import Loder from '../Loding';
import useCallApi from '../../Hooks/useCallApi';

export default function Squad({ matchId }) {
    const { apiData, error, loading } = useCallApi(`match/${matchId}/squads`);

    if (loading) {
        return <Loder />;
    }

    if (error) {
        return;
    }
    const squadData = apiData.data;
    // const squadData = apiData.data;
    console.log("Squad", squadData);

    const teamA = squadData.team_a;
    const teamB = squadData.team_b;



    return (
        <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Team A Squad */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-bold p-2 text-gray-800 mb-4">{teamA?.name} Squad</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:p-4">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-1 py-3">Image</th>
                                    <th scope="col" className="px-1 py-3">Name</th>
                                    <th scope="col" className="px-1 py-3">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamA.player.map((player, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-1 py-4">
                                            <img className="w-10 h-10 rounded-full" src={player.image} alt={player.name} />
                                        </td>
                                        <td className="px-1 py-4 cursor-pointer">
                                            <Link to={`/player/${player?.player_id}`} className="text-blue-600 hover:underline">{player.name}</Link>
                                        </td>
                                        <td className="px-1 py-4">{player.play_role}</td>
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
                    <h2 className="text-xl font-bold p-2 text-gray-800 mb-4">{teamB.name} Squad</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:p-4 ">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-1 py-3">Image</th>
                                    <th scope="col" className="px-1 py-3">Name</th>
                                    <th scope="col" className="px-1 py-3">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamB.player.map((player, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-1 py-4">
                                            <img className="w-10 h-10 rounded-full" src={player.image} alt={player.name} />
                                        </td>
                                        <td className="px-1 py-4 cursor-pointer">
                                            <Link to={`/player/${player?.player_id}`} className="text-blue-600 hover:underline">{player.name}</Link>
                                        </td>
                                        <td className="px-1 py-4">{player.play_role}</td>
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
