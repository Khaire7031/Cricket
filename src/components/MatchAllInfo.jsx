import React, { useState } from 'react';
import Squad from './Squad';
import Commentary from './Commentary';
import { useParams } from 'react-router-dom';
import useCallApi from '../Hooks/useCallApi';
import BasicInfo from './BasicMatchInfo';
import data from './data';



export default function MatchAllInfo() {
    const { matchId } = useParams();

    const [selectedTab, setSelectedTab] = useState('squad');
    const { apiData, error, loading } = useCallApi(`match/${matchId}`);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
                <BasicInfo matchData={data} />

                <div className="mt-6 flex justify-center space-x-4">
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
            <div className=" p-4 border rounded-md shadow-md bg-white">
                {selectedTab === 'squad' && <Squad />}
                {selectedTab === 'commentary' && <Commentary />}
            </div>
        </div>
    );
}
