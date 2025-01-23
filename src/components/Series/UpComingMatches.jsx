import React from 'react';
import useCallApi from '../../Hooks/useCallApi';
import Match from '../Home/Match';

export default function UpComingMatches({ seriesId }) {

    const { apiData, error, loading } = useCallApi(`series/${seriesId.id}/upcomingMatches`);
    // console.log("Api UpComingMatches : ", matchId.id)
    // console.log("Api UpComingMatches : ", apiData)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return;
    }

    return (
        <>
            <span className="px-3 p-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                UpComing Series Matches
            </span>
            <div className="flex flex-row items-center justify-start gap-5 bg-gray-100 p-1  overflow-x-auto hide-scrollbar w-full mx-auto">
                {apiData?.data?.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>
        </>
    )
}
