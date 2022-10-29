import "./css/Table.css";
import $ from "jquery";
import "datatables.net-bs5";
$.DataTable = require("datatables.net");

export const Table = ({ bookFormToTableData }) => {
  $(document).ready(function () {
    $("#bookTable").DataTable({
      retrieve: true,
      pagingType: "full_numbers",
    });
  });

  return (
    <>
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
            </tr>
          </thead>
          <tbody>
            {bookFormToTableData.map((data, i) => {
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
      </div>
    </>
  );
};
