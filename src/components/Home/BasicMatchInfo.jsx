import React from 'react';

const BasicInfo = ({ matchData }) => {
    console.log(matchData);

    const {
        result = "",
        series,
        team_b_img,
        team_a_img,
        team_b,
        team_a,
        head_to_head,
        match_type,
        man_of_match_player,
        match_date,
        place,
        toss
    } = matchData;

    return (
        <div className="flex flex-wrap border-b rounded-lg p-">
            {/* Left Section */}
            <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300 md:pr-6">
                <div className="border-b-2 border-gray-200 flex justify-between items-center pb-3">
                    <div className="text-base md:text-lg font-semibold text-gray-800">
                        {result !== "" ? result : series}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                        {match_type}
                    </div>
                </div>

                <div className="pt-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <img className="h-10 w-10 md:h-12 md:w-12 rounded-full" src={team_a_img} alt={team_a} />
                            <p className="text-base md:text-lg font-medium text-gray-700">{team_a}</p>
                        </div>
                        <div className="text-base md:text-lg font-semibold text-blue-600">
                            {head_to_head?.matches?.[0]?.team_a_score || '-'}
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <img className="h-10 w-10 md:h-12 md:w-12 rounded-full" src={team_b_img} alt={team_b} />
                            <p className="text-base md:text-lg font-medium text-gray-700">{team_b}</p>
                        </div>
                        <div className="text-base md:text-lg font-semibold text-blue-600">
                            {head_to_head?.matches?.[0]?.team_b_score || '-'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 md:pl-6 pt-4 md:pt-0">
                <div className="space-y-3 text-gray-700">
                    <div className="text-base md:text-lg font-medium">
                        <span className="font-semibold">Venue:</span> {place || "Unknown"}
                    </div>
                    <div className="text-base md:text-lg font-medium">
                        <span className="font-semibold">Date:</span> {match_date || "TBD"}
                    </div>
                    <div className="text-base md:text-lg font-medium">
                        <span className="font-semibold">Toss:</span> {toss || "TBD"}
                    </div>
                    {
                        man_of_match_player && <div className="text-base md:text-lg font-medium">
                            <span className="font-semibold">Man of the Match:</span> {man_of_match_player}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
