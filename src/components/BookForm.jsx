import { useRef, useState } from "react";
import "./css/BookForm.css";
import { Table } from "./Table";

export const BookForm = () => {
  const [data, setData] = useState([]);
  const categoryIdRef = useRef();
  const pageRef = useRef();
  const sizeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryId = categoryIdRef.current.value;
    const page =
      !pageRef.current.value && sizeRef.current.value
        ? 0
        : pageRef.current.value;
    const size =
      !sizeRef.current.value && pageRef.current.value
        ? 10
        : sizeRef.current.value;

    const postURL = `https://limitless-scrubland-76131.herokuapp.com/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    (async () => {
      try {
        const response = await fetch(postURL, options);
        const result = await response.json();
        setData(result);
        console.log(data);
      } catch (err) {
        throw err;
      }
    })();
  };

  return (
    <>
      <div className="flex flex-col m-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="categoryId"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required-field"
            >
              Category ID
            </label>
            <input
              ref={categoryIdRef}
              type="number"
              id="categoryId"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type the category id here, digits only"
              inputMode="numeric"
              min={0}
              pattern="[0-9]*"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="page"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Page
            </label>
            <input
              ref={pageRef}
              type="number"
              id="page"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Starts from 0, negative input is invalid"
              inputMode="numeric"
              pattern="[0-9]*"
              min={0}
            />
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              Filters the selection based on the page where the books belong
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="size"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Size
            </label>
            <input
              ref={sizeRef}
              type="number"
              id="size"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Starts from 0, negative input is invalid"
              inputMode="numeric"
              pattern="[0-9]*"
              min={0}
            />
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              Determines the maximum number of books existing within a single
              page
            </p>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Table bookFormToTable={data} />
    </>
  );
};
