import React, { useEffect } from 'react';
import useCallApi from '../../Hooks/useCallApi';
import Match from './Match';
import Loder from '../Loding';
import { useDispatch } from 'react-redux';
import { addToMatches } from '../../redux/slices/Matches';

export default function MatchesList({ render, name, url }) {
    let { apiData, error, loading } = useCallApi(url);

    console.log(`${name} :::: `, apiData?.data)
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
        return;
    }

    // apiData.data = apiData.data.slice(0, 5).reverse()

    return (
        <>

            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {name}
            </span> */}
            {apiData.data.length > 0 && render(apiData)}

            {/* <div className="flex flex-row items-center justify-start gap-5 bg-gray-300 p-5 overflow-x-auto hide-scrollbar w-full mx-auto">
                {apiData?.data?.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>  Testing */}
        </>
    );
}
