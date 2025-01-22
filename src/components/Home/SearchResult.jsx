import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MatchData } from '../data';
import News from '../News/News';

export default function SearchResult({ render, searchInput }) {
    // const matches = useSelector((state) => state.liveMatches.data);

    // useEffect(() => {
    //     console.log("SearchResult :", matches);
    // }, [matches]);

    const matches = MatchData;

    // Ensure searchInput is not undefined or null
    const searchTerm = searchInput ? searchInput.toLowerCase() : '';

    // Filter matches based on search in team_a or team_b
    const filteredMatches = matches.data.filter(match =>
        match.team_a.toLowerCase().includes(searchTerm) ||
        match.team_b.toLowerCase().includes(searchTerm)
    );

    // Return data in the same format as the original MatchData
    const updatedMatchData = { data: filteredMatches };

    console.log("Updated Match Data: ", updatedMatchData);

    return (
        <div>
            <h2>Search Results</h2>
            <div>
                {render(updatedMatchData)} {/* Pass the filtered data in the original structure */}
            </div>
            <News searchInput={searchInput} />
        </div>
    );
}
