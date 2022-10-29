import "./css/Table.css";
import $ from "jquery";
import "datatables.net-bs5";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
$.DataTable = require("datatables.net");

export const Table = ({
  bookFormToTableData,
  tableDataToBookmark,
  childToParent2,
}) => {
  useEffect(() => {
    localStorage.setItem(
      "tableDataToBookmark",
      JSON.stringify(tableDataToBookmark)
    );
  }, [tableDataToBookmark]);

  let navigate = useNavigate();

  $(document).ready(function () {
    $("#bookTable").DataTable({
      retrieve: true,
      pagingType: "full_numbers",
      deferRender: true,
    });
  });

  const handleBookmark = (e) => {
    childToParent2([...tableDataToBookmark, e]);
    alert("Bookmarked!");
  };

  return (
    <>
      {bookFormToTableData.length > 0 ? (
        <div className="flex flex-col mx-12 my-12">
          <table id="bookTable" className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Description</th>
                <th>Audio Length</th>
                <th>Bookmark this book?</th>
              </tr>
            </thead>
            <tbody>
              {bookFormToTableData.map((data, i) => {
                return (
                  <tr key={data.id}>
                    <td>{i + 1}</td>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.authors}</td>
                    <td>{data.description}</td>
                    <td>{data.audio_length}</td>
                    <td>
                      <div className="grid place-items-center items-center">
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          onClick={() => handleBookmark(data)}
                        >
                          Bookmark
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-12">
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Looks like your search didn't return any results, perhaps you could
            go back and try again?
          </p>
        </div>
      )}
      <div className="flex flex-col mx-12 my-12">
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-center">
          Click{" "}
          <a
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            onClick={() => navigate("/")}
          >
            here
          </a>{" "}
          to go the form page
        </p>
        <p className="text-gray-500 dark:text-gray-400  text-center">
          Click{" "}
          <a
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            onClick={() => navigate("/bookmark")}
          >
            here
          </a>{" "}
          to go to the bookmark page
        </p>
      </div>
    </>
  );
};
