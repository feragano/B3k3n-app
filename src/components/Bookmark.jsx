import "./css/Table.css";
import $ from "jquery";
import "datatables.net-bs5";
import { useNavigate } from "react-router-dom";
$.DataTable = require("datatables.net");

export const Bookmark = ({ tableDataToBookmark }) => {
  let navigate = useNavigate();

  $(document).ready(function () {
    $("#bookmarkTable").DataTable({
      retrieve: true,
      pagingType: "full_numbers",
      deferRender: true,
    });
  });

  return (
    <>
      <div className="flex flex-col mx-12 my-12">
        <table id="bookmarkTable" className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Title</th>
              <th>Authors</th>
              <th>Description</th>
              <th>Audio Length</th>
            </tr>
          </thead>
          <tbody>
            {tableDataToBookmark.map((data, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.authors}</td>
                  <td>{data.description}</td>
                  <td>{data.audio_length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-center">
          Click{" "}
          <a
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            onClick={() => navigate("/")}
          >
            here
          </a>{" "}
          to go back to the form
        </p>
      </div>
    </>
  );
};
