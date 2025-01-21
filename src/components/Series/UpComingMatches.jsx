import React from 'react';
import useCallApi from '../../Hooks/useCallApi';
import Match from '../Home/Match';

export default function UpComingMatches({ matchId }) {

    const { apiData, error, loading } = useCallApi(`series/${matchId.id}/upcomingMatches`);
    // console.log("Api UpComingMatches : ", matchId.id)
    // console.log("Api UpComingMatches : ", apiData)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return;
    }
    const upcomingMatches = apiData?.data?.slice(0, 5).reverse()

    return (
        <>
            <span className="px-10 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Up Coming Matches
            </span>
            <div className="flex flex-row items-center justify-start gap-5 bg-black p-5  overflow-x-auto hide-scrollbar w-full mx-auto">
                {apiData?.data?.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>
        </>
    )
}
