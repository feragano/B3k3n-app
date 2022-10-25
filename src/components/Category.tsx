import axios from "axios";
import { useEffect, useState } from "react";

export const Category: React.FC = () => {

    const [category, setCategory] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories', { mode: 'no-cors' });
    //         const data = await response.json();
    //         console.log(data)
    //         setCategory(data);
    //     }
    //     fetchData().catch(console.error);;
    // }, [])

    // useEffect(() => {

    //     axios
    //         .get("https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories", { headers: { 'Access-Control-Allow-Origin': '*' } })
    //         .then((res) => {
    //             setCategory(res.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });



    // }, []);

    useEffect(() => {
        const fetchURL = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories';
        const options: object = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json'
            },
        };

        fetch(fetchURL, options)
            .then((res) => {
                console.log(res.json);
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setCategory(data);
            })
            .catch((error) => {
                console.error(error)
            });
    }, [])

    // useEffect(() => {
    //     const fetchData: Function = async () => {
    //         let res = await axios.get("https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories", {
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json',
    //             }
    //         });
    //         let data = await res.data;
    //         console.log(data)
    //         setCategory(data);
    //     };

    //     fetchData().catch(console.error);
    // }, [])

    return (
        <>
            <div className='flex place-items-center flex-col py-4 w-full'>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here's the available category that you could select!</p>
                {category !== null && category.map((item: any) => {
                    return (
                        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    )
                })}


            </div>
        </>
    );
};