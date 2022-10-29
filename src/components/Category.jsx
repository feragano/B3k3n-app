import { useEffect, useState } from "react";

export const Category = ({ titleText }) => {
  const [category, setCategory] = useState(() => {
    const saved = localStorage.getItem("category");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const fetchURL =
    "https://limitless-scrubland-76131.herokuapp.com/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories";
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(fetchURL);

        const data = await response.json();

        setCategory(data);

        localStorage.setItem("category", JSON.stringify(data));
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <>
      <div className="flex place-items-center flex-col py-4 w-full">
        <p className="mx-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 text-center xl:px-48 dark:text-gray-400">
          {titleText}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  xl:flex xl:place-items-center xl:place-content-center  gap-5 content-evenly mx-8">
        {category !== null ? (
          category.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col place-items-center place-content-center p-6 w-full h-36 bg-red rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Category ID : {item.id}
                </p>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  {item.name}
                </h5>
              </div>
            );
          })
        ) : (
          <p>Sorry there's no category that you could select right now</p>
        )}
      </div>
    </>
  );
};
