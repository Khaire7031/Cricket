import React, { useState } from 'react';
import { MdAutoDelete, MdDelete, MdOutlineSaveAlt } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'; // Import the useSelector hook
import { removeMatch } from '../../redux/slices/SavedMatches'

export default function Saved() {
    const [isOpen, setIsOpen] = useState(false);

    // Access the saved matches from Redux store
    const savedMatches = useSelector((state) => state.savedmatch.savedMatches); // Access the array of saved matches directly

    console.log("savedMatches : ", savedMatches);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
            >
                <MdOutlineSaveAlt className="text-3xl" />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-5 flex justify-between items-center border-b">
                    <h2 className="text-2xl font-semibold">Saved Items</h2>
                    <AiOutlineClose
                        onClick={() => setIsOpen(false)}
                        className="text-3xl text-red-500 cursor-pointer hover:text-red-700 transition"
                    />
                </div>
                <ul className="space-y-3 p-2">
                    {savedMatches && savedMatches.length > 0 ? (
                        savedMatches.map((match) => (
                            <MatchItem key={match.match_id} match={match} />
                        ))
                    ) : (
                        <li className="p-3 bg-gray-200 rounded-md text-gray-500">No saved matches</li>
                    )}
                </ul>
            </div>
        </>
    );
}


const MatchItem = ({ match }) => {
    const dispatch = useDispatch(); 

    const handleDelete = () => {
        dispatch(removeMatch(match.match_id)); 
    };

    return (
        <li key={match.match_id} className="bg-gray-100 p-4 rounded-md shadow-lg hover:shadow-xl transition-all">
            <div className='flex flex-row justify-between items-cente px-5'>
                <div className="font-semibold text-sm sm:text-xl">{match.match_date}</div>
                <div>
                    <MdDelete onClick={handleDelete} className="text-black-500 h-6 w-6 cursor-pointer hover:text-red-700 transition" />
                </div>
            </div>

            {/* Styled HR */}
            <hr className="my-2 border-t-2 border-gray-300 w-full" />

            <div className="flex flex-row justify-between sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
                <div className="flex flex-col items-center space-x-2">
                    <img
                        src={match.team_a_img}
                        alt={`${match.team_a} Logo`}
                        className="w-8 h-8 object-cover rounded-full border-2 border-blue-500"
                    />
                    <div className="font-medium">{match.team_a}</div>
                </div>

                <div className="font-medium text-xl">vs</div>

                <div className="flex flex-col items-center space-x-2">
                    <img
                        src={match.team_b_img}
                        alt={`${match.team_b} Logo`}
                        className="w-8 h-8 object-cover rounded-full border-2 border-red-500"
                    />
                    <div className="font-medium">{match.team_b}</div>
                </div>
            </div>
        </li>
    );
};
