import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function SearchResult() {
    const matches = useSelector((state) => state.liveMatches.data);

    useEffect(() => {
        console.log("SearchResult :", matches);
    }, [matches]);

    return (
        <div>
            <h2>Search Results</h2>
        </div>
    );
}
