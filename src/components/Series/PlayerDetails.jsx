import React from 'react';
import { useParams } from 'react-router-dom';
import useCallApi from '../../Hooks/useCallApi';
import Loder from '../Loding';

export default function PlayerDetails() {
    const { playerId } = useParams();
    console.log("PlayerDetails : ", playerId);

    let { apiData, error, loading } = useCallApi(`player/${playerId}`);

    if (loading) {
        return <Loder />;
    }
    if (error) {
        return <p className="text-red-500 text-center">Something went wrong! Please try again.</p>;
    }

    const player = apiData?.data?.player;
    const battingStats = apiData?.data?.batting_career;
    const bowlingStats = apiData?.data?.bowling_career;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 shadow-md rounded-lg p-6">
                <img src={player?.image} alt={player?.name} className="w-48 h-48 rounded-full shadow-lg" />
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800">{player?.name}</h2>
                    <p className="text-gray-600 text-lg">{player?.play_role}</p>
                    <p className="text-gray-500 mt-2">Born: {player?.born} in {player?.birth_place}</p>
                    <p className="text-gray-500">Batting Style: {player?.style_bating}</p>
                    <p className="text-gray-500">Bowling Style: {player?.style_bowling}</p>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">Batting Career</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="border border-gray-200 px-4 py-2">Format</th>
                                <th className="border border-gray-200 px-4 py-2">Runs</th>
                                <th className="border border-gray-200 px-4 py-2">Average</th>
                                <th className="border border-gray-200 px-4 py-2">Strike Rate</th>
                                <th className="border border-gray-200 px-4 py-2">Hundreds</th>
                                <th className="border border-gray-200 px-4 py-2">Fifties</th>
                            </tr>
                        </thead>
                        <tbody>
                            {battingStats?.map((bat, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-200 px-4 py-2">{bat.match_type}</td>
                                    <td className="border border-gray-200 px-4 py-2">{bat.runs}</td>
                                    <td className="border border-gray-200 px-4 py-2">{bat.avg}</td>
                                    <td className="border border-gray-200 px-4 py-2">{bat.sr}</td>
                                    <td className="border border-gray-200 px-4 py-2">{bat.hundreds}</td>
                                    <td className="border border-gray-200 px-4 py-2">{bat.fifty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
