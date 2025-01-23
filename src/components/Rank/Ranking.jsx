import React, { useMemo } from 'react';
import { playerRankData, teamRankData } from '../data';
import Loder from '../Loding';
import useCallApi from '../../Hooks/useCallApi';
import { useNavigate } from 'react-router-dom';

const TeamRanking = ({ url }) => {
    const apiData = teamRankData || {};
    // let { apiData, error, loading } = useCallApi(url);
    // if (loading) {
    //     return <Loder />;
    // }
    // if (error) {
    //     return;
    // }
    const displayedData = apiData?.data?.slice(0, 10);

    return (
        <div className="w-full lg:w-1/3 p-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                    <h2 className="text-xl font-semibold text-center"> Rankings</h2>
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

const PlayerRanking = ({ url }) => {
    // const apiData = playerRankData || {};
    let { apiData, error, loading } = useCallApi(url);
    if (loading) {
        return <Loder />;
    }
    if (error) {
        return;
    }
    const navigate = useNavigate();
    const displayedData = apiData?.data?.slice(0, 10);

    return (
        <div className="w-full lg:w-1/3 p-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                    <h2 className="text-xl font-semibold text-center">{apiData.type} Rankings</h2>
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
                                <td className="px-2 py-2 cursor-pointer" onClick={() => navigate(`player/${player.player_id}`)}>{player.name}</td>
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
                <TeamRanking url={"teamRanking/1"} /> {/* T20 */}
                <TeamRanking url={"teamRanking/2"} /> {/* ODI */}
                <TeamRanking url={"teamRanking/3"} /> {/* Test */}

                {/* <PlayerRanking url={"playerRanking/1"} />
                <PlayerRanking url={"playerRanking/3"} /> */}
                {/* <PlayerRanking url={"playerRanking/2"} />
                <PlayerRanking url={"playerRanking/4"} />
                <PlayerRanking url={"playerRanking/5"} />
                <PlayerRanking url={"playerRanking/6"} />
                <PlayerRanking url={"playerRanking/7"} />
                <PlayerRanking url={"playerRanking/8"} />
                <PlayerRanking url={"playerRanking/9"} />
                <PlayerRanking url={"playerRanking/10"} />
                <PlayerRanking url={"playerRanking/11"} />
                <PlayerRanking url={"playerRanking/12"} />
                <PlayerRanking url={"playerRanking/13"} />
                <PlayerRanking url={"playerRanking/14"} />
                <PlayerRanking url={"playerRanking/15"} /> */}

            </div>
        </div>
    );
}
