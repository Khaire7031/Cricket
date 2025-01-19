import React from 'react';
import useCallApi from '../Hooks/useCallApi';
import Match from './Match';

export default function LiveMatchs() {
    const { apiData, error, loading } = useCallApi('liveMatches');


    console.log("Api : ", apiData)
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return;
    }

    return (
        <>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Live Matches
            </span>
            <div className="flex flex-row items-start justify-center gap-5 bg-black p-3 px-40 overflow-x-scroll hide-scrollbar">
                {apiData?.data?.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>
        </>
    );
}
