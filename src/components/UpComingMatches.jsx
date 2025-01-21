import React from 'react';
import useCallApi from '../Hooks/useCallApi';
import Match from './Match';

export default function UpComingMatches() {
    const { apiData, error, loading } = useCallApi('upcomingMatches');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return;
    }
    const upcomingMatches = apiData.data.slice(0, 5).reverse()

    console.log("Api UpComingMatches : ", upcomingMatches)
    return (
        <>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
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
