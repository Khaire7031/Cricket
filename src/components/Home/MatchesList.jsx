import React, { useEffect } from 'react';
import useCallApi from '../../Hooks/useCallApi';
import Match from './Match';
import Loder from '../Loding';
import { useDispatch } from 'react-redux';
import { addToMatches } from '../../redux/slices/Matches';

export default function MatchesList({ name, url }) {
    let { apiData, error, loading } = useCallApi(url);

    console.log(`${name} : `, apiData?.data)
    const dispatch = useDispatch();

    useEffect(() => {
        if (apiData?.data) {
            dispatch(addToMatches(apiData.data));
        }
    }, [apiData, dispatch]);

    if (loading) {
        return <Loder />;
    }

    if (error) {
        return <div>Error occurred while fetching data</div>;
    }

    apiData.data = apiData.data.slice(0, 5).reverse()  // keep only 5

    return (
        <>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {name}
            </span>

            <div className="flex flex-row items-center justify-start gap-5 bg-black p-5 overflow-x-auto hide-scrollbar w-full mx-auto">
                {apiData?.data?.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>
        </>
    );
}
