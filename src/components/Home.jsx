import React, { useContext } from 'react'
import LiveMatchs from './LiveMatchs'
import UpComingMatches from './UpComingMatches'
import Search from '../pages/Search'
import PhoneContext from '../Hooks/PhoneContext';

export default function Home({ searchInput }) {
    console.log("Search Input Home: ", searchInput)

    return (
        <div className='bg-gray-300 lg:px-16'>
            <LiveMatchs />
            <UpComingMatches />
        </div>
    )
}
