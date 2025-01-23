import React, { useState } from 'react';
import Squad from './Squad';
import Commentary from './Commentary';
import { useParams } from 'react-router-dom';
import BasicInfo from './BasicMatchInfo';
import useCallApi from '../../Hooks/useCallApi';
import { data } from '../data';
import Loder from '../Loding';


export default function MatchAllInfo() {
    const { matchId } = useParams();

    const [selectedTab, setSelectedTab] = useState('squad');
    const { apiData, error, loading } = useCallApi(`match/${matchId}`);

    console.log("MatchAllInfo Api : ", apiData)
    if (loading) {
        return <Loder />;
    }

    if (error) {
        return;
    }

    return (
        <div className="container mx-auto p-4 max-w-[1000px]">
            <div className="bg-gray-100 p-4 rounded-md shadow-md ">
                {/* Match Information */}
                <BasicInfo matchData={apiData.data} />

                <div className="mt-6 flex justify-start space-x-4">
                    {['squad', 'commentary'].map((tab) => (
                        <a
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-2 cursor-pointer rounded-md ${selectedTab === tab ? 'bg-blue-600 text-white' : ''
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </a>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className=" p-1 mt-2 border rounded-md shadow-md">
                {selectedTab === 'squad' && <Squad matchId={matchId} />}
                {selectedTab === 'commentary' && <Commentary />}
            </div>
        </div>
    );
}
