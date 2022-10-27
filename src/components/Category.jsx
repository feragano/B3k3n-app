import { useEffect, useState } from "react";

export const Category = () => {
  const [category, setCategory] = useState([]);

  const fetchURL =
    "https://limitless-scrubland-76131.herokuapp.com/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(fetchURL);
        console.log("test");
        const data = await response.json();
        console.log(data);
        setCategory(data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <>
      <div className="flex place-items-center flex-col py-4 w-full">
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here's the available category that you could select!
        </p>
      </div>
      <div className="h-56 grid grid-cols-5 gap-3 place-items-center mx-8">
        {category !== null &&
          category.map((item) => {
            return (
              <div
                key={item.id}
                className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};
