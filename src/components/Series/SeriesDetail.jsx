import React from 'react'
import Squad from '../Home/Squad'
import { useParams } from 'react-router-dom'
import UpComingMatches from './UpComingMatches';

export default function SeriesDetail() {

    const seriesId = useParams();

    console.log("SeriesDetail seriesId : ", seriesId);

    return (
        <div>
            <UpComingMatches seriesId={seriesId} />
            {/* <Squad matchId={matchId} /> */}
        </div>
    )
}
