import { useEffect, useState } from "react";

export const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchURL =
      "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "plain/text",
        Accept: "plain/text",
        "Content-Encoding": "gzip",
      },
      cache: "default",
      mode: "no-cors",
    };

    // const fetchData = async () => {
    //   const response = await fetch(fetchURL, options);
    //   console.log(response);
    //   const data = await response.json();
    //   console.log(data);
    //   const result = data === "" ? [] : JSON.parse(data);
    //   console.log(result);
    //   return result;
    // };

    // fetchData().then((data) => {
    //   setCategory(data);
    //   console.log(data);
    // });

    // fetch("http://example.com/movies.json")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    const handleFetch = async () => {
      try {
        const response = await fetch(
          "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories",
          {
            mode: "no-cors",
          }
        );
        console.log("test");
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    handleFetch();
  }, []);

  return (
    <>
      <div className="flex place-items-center flex-col py-4 w-full">
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here's the available category that you could select!
        </p>
        {category !== null &&
          category.map((item) => {
            return (
              <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};