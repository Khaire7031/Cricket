import React, { useContext } from 'react';
import Ball from '../assets/Ball.png';
import PhoneContext from '../Hooks/PhoneContext';
import Search from './Search';
import { CiTrophy } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';
import { PiRanking } from 'react-icons/pi';
import { useParams } from 'react-router-dom';



export default function Navbar({ setSearchInput }) {

    const { isPhone } = useContext(PhoneContext);

    return (
        <div className='sticky top-0 z-50 bg-white'>
            <nav className="bg-white border-gray-200 dark:bg-gray-900  top-0">
                <div className="max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Ball} className="h-8" alt="Cricket" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cricket</span>
                    </a>

                    {!isPhone && <Navigation isPhone={isPhone} />}

                    <Search setSearchInput={setSearchInput} />
                </div>
            </nav>

            <hr />

            {isPhone && <div className="">
                <Navigation isPhone={isPhone} />
            </div>}
        </div>
    );
}


const Navigation = ({ isPhone }) => {
    return (
        <div className="w-full md:w-auto md:order-1 px-2">
            <ul className='flex flex-row md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li className={`flex ${!isPhone ? 'flex-col' : 'flex-row'} items-center gap-0 justify-center `}>
                    <FaHome className='text-2xl h-5 w-5' />
                    <a
                        href="/"
                        className="block py-1 px-3 text-blue-500 rounded hover:text-blue-500  md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                        Home
                    </a>
                </li>
                <li className={`flex ${!isPhone ? 'flex-col' : 'flex-row'} items-center gap-0 justify-center `}>
                    <IoNewspaper className='text-2xl h-5 w-5' />
                    <a
                        href="/news"
                        className="block py-1 px-3 text-gray-900 rounded hover:text-blue-500 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                        News
                    </a>
                </li>
                <li className={`flex ${!isPhone ? 'flex-col' : 'flex-row'} items-center gap-0 justify-center `}>
                    <PiRanking className='text-2xl h-5 w-5' />
                    <a
                        href="/schedule"
                        className="block py-1 px-3 text-gray-900 rounded hover:text-blue-500 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                        Rankings
                    </a>
                </li>

                <li className={`flex ${!isPhone ? 'flex-col' : 'flex-row'} items-center gap-0 justify-center `}>
                    <CiTrophy className='text-2xl h-5 w-5' />
                    <a
                        href="/series"
                        className="block py-1 px-3 text-gray-900 rounded hover:text-blue-500 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                        Series
                    </a>
                </li>
            </ul>
        </div>
    );
};