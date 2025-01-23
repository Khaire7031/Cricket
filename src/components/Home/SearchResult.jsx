import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MatchData } from '../data';
import News from '../News/News';

const SearchResult = ({ render, searchInput }) => {
    const matches = useSelector((state) => state.liveMatches.data);

    useEffect(() => {
        console.log("SearchResult :", matches);
    }, [matches]);


    // const matches = MatchData;  For Testing
    const searchTerm = searchInput ? searchInput.toLowerCase() : '';

    // console.log("SearchResult : ", searchInput)
    if (!searchInput) {
        return null;
    }

    // console.log("SearchResult : ",matches)
    const filteredMatches = matches.filter(match =>
        match.team_a.toLowerCase().includes(searchTerm) ||
        match.team_b.toLowerCase().includes(searchTerm)
    );

    const uniqueMatches = filteredMatches.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.match_id === value.match_id
        ))
    );

    const updatedMatchData = { data: uniqueMatches };
    // console.log("Updated Match Data SearchResult : ", updatedMatchData);

    return (
        <div className=''>
            {/* <h2>Search Results</h2> */}
            <div>
                {render(updatedMatchData)}
            </div>
            <News searchInput={searchInput} />
        </div>
    );
}


export default React.memo(SearchResult);