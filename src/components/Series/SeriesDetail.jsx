import React from 'react'
import Squad from '../Home/Squad'
import { useParams } from 'react-router-dom'
import UpComingMatches from './UpComingMatches';

export default function SeriesDetail() {

    const matchId = useParams();

    console.log("SeriesDetail", matchId);

    return (
        <div>
            {/* <UpComingMatches matchId={matchId} /> */}
            <Squad matchId={matchId} />

        </div>
    )
}
