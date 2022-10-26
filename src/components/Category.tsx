
import { useEffect, useState } from "react";

type CategoryProps = {
    category: string;
    setCategory: (category: string) => void;
}

export const Category: React.FC = () => {

    const [category, setCategory] = useState<CategoryProps[]>([]);

    useEffect(() => {
        const fetchURL = 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories';
        const options: object = {
            method: 'GET',
            headers: {
                'Content-Type': 'plain/text',
                Accept: 'plain/text',
            },
            cache: 'default',
            mode: 'no-cors',
        };

        const fetchData = async () => {
            const response = await fetch(fetchURL, options);
            console.log(response)
            const data = await response.text();
            console.log(data)
            const result = data === '' ? [] : JSON.parse(data);
            console.log(result)
            return result
                ;
        }

        fetchData().then((data) => {
            setCategory(data);
            console.log(category);
        });

    }, []);



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