import React, { useContext } from 'react'
import LiveMatchs from './LiveMatchs'
import MatchesList from './MatchesList';
import SearchResult from './SearchResult';

export default function Home({ searchInput }) {
    console.log("Search Input Home: ", searchInput)

    return (
        <div className='lg:px-16'>
            <SearchResult />
            {/* <MatchesList name={"Live Matches"} url={"liveMatches"} />
            <MatchesList name={"UpComing Matches"} url={"upcomingMatches"} /> */}
            <LiveMatchs />
        </div>
    )
}
