import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



// const headers = {
//     'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
//     'x-rapidapi-host': process.env.X_RAPIDAPI_HOST
// }
// Cricket Buzz
// const host = "https://cricbuzz-cricket.p.rapidapi.com";
// const headers = {
//     'x-rapidapi-key': '44fccb3027msh5cb272c5d09a6ddp1b09aejsn744658fb6df1',
//     'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
// }



// // Cricket Live Line Account 1
// const host = "https://cricket-live-line1.p.rapidapi.com";
// const headers = {
//     'x-rapidapi-key': '44fccb3027msh5cb272c5d09a6ddp1b09aejsn744658fb6df1',
//     'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
// }


// Cricket Live Line Account 2
const host = "https://cricket-live-line1.p.rapidapi.com";
const headers = {
    'x-rapidapi-key': '7daec3e5a5mshc901b92b6dc860cp1f78f6jsndab0af666e34 1',
    'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
}


// // Cricket Live Line Account 3
// const host = "https://cricket-live-line1.p.rapidapi.com";
// const headers = {
//     'x-rapidapi-key': '61be99bf57mshc52c1dae1e4f9e1p124842jsn460a8ae0de98',
//     'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
// }


const useCallApi = (url) => {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${host}/${url}`, { headers });
                console.log("response", response);
                setApiData(response.data);
            } catch (error) {
                setError(error.message || 'Error from API');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { apiData, error, loading };
}

export default useCallApi;
