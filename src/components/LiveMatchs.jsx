import React from 'react';
import useCallApi from '../Hooks/useCallApi';
import Match from './Match';

const data = {
    "max_rate": 1.29,
    "venue": "Basin Reserve, Wellington",
    "match_status": "Live",
    "s_ovr": "0",
    "venue_id": 78,
    "series": "Super Smash 2024-25",
    "batting_team": "117",
    "team_a_img": "https://cricketchampion.co.in/webroot/img/teams/2100746311_team.png",
    "toss": "Wellington have won the toss and have opted to field",
    "match_time": "08:55 AM",
    "match_type": "T20",
    "team_a_scores_over": {},
    "fav_team": "AUC",
    "team_b_id": 117,
    "team_b_score": {
        "1": {
            "ball": 115,
            "wicket": 3,
            "over": "19.1",
            "score": 209
        },
        "team_id": 117
    },
    "is_hundred": 1,
    "matchs": "20th Match",
    "series_type": "League",
    "s_min": "0",
    "team_b_scores_over": [
        {
            "over": "19.1",
            "score": "209-3"
        }
    ],
    "team_a_id": 116,
    "match_date": "20-Jan",
    "team_b_over": "19.1",
    "need_run_ball": "",
    "team_a_over": "",
    "min_rate": 1.28,
    "team_a": "Wellington",
    "team_a_scores": "",
    "balling_team": "116",
    "trail_lead": "",
    "team_b_short": "AUC",
    "team_b": "Auckland",
    "date_time": "2025-01-20 08:55:00",
    "team_b_scores": "209-3",
    "s_max": "0",
    "session": null,
    "team_a_short": "WEL",
    "match_id": 6266,
    "result": "",
    "series_id": 449,
    "team_b_img": "https://cricketchampion.co.in/webroot/img/teams/1395345241_team.png"
}

export default function LiveMatchs() {
    const { apiData, error, loading } = useCallApi('liveMatches');


    console.log("Api : ", apiData)
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return;
    // }

    return (
        <>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Live Matches
            </span>
            <div className="flex flex-row items-center justify-start gap-5 bg-black p-5  overflow-x-auto hide-scrollbar w-full mx-auto">

                {/* {apiData?.data?.map((match, index) => (
                    <Match key={index} match={match} />
                ))} */}
                <Match key={0} match={data} />
                <Match key={1} match={data} />
                <Match key={2} match={data} />
                <Match key={3} match={data} />
                <Match key={4} match={data} />
                <Match key={5} match={data} />
                <Match key={6} match={data} />
                <Match key={7} match={data} />
            </div>
        </>
    );
}
