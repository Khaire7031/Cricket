import React, { useContext } from 'react'
import LiveMatchs from './LiveMatchs'
import MatchesList from './MatchesList';
import SearchResult from './SearchResult';
import Match from './Match';
import Saved from './Saved';
import { useSelector } from 'react-redux';
import CricketInfo from './CricketInfo';


export default function Home({ searchInput }) {
    // console.log("Search Input Home: ", searchInput)
    const savedMatches = useSelector((state) => state.savedmatch.savedMatches);

    return (
        <div className='lg:px-16'>
            <MatchesList render={render} name={"Live Matches"} url={"liveMatches"} />
            {/* <LiveMatchs /> For Testing */}
            {
                searchInput ? <SearchResult render={render} searchInput={searchInput} /> : <MatchesList render={render} name={"UpComing Matches"} url={"upcomingMatches"} />
            }
            {
                savedMatches.length > 0 && <Saved />
            }
            <CricketInfo />
        </div>
    )
}


// Render Prop Design Pattern
function render(matches) {
    return (
        <div className="flex flex-row items-center justify-start gap-1 rounded-lg bg-gray-300 p-1 overflow-x-auto hide-scrollbar w-full mx-auto">
            {/* <h1>{console.log("Render ", matches)}</h1> */}
            {matches ? (
                matches?.data?.map((match, index) => (
                    <Match key={index} match={match} />
                ))
            ) : (
                <p>No matches found</p>
            )}
        </div>
    );
}