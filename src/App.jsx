import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookForm } from "./components/BookForm";
import { Category } from "./components/Category";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Bookmark } from "./components/Bookmark";
import "./App.css";

function App({}) {
  const [bookFormToTableData, setBookFormToTableData] = useState([]);
  const [tableDataToBookmark, setTableDataToBookmark] = useState(() => {
    const saved = localStorage.getItem("tableDataToBookmark");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const childToParent = (data) => {
    setBookFormToTableData(data);
  };

  const childToParent2 = (data) => {
    setTableDataToBookmark(data);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  mainText="B3k3n App!"
                  subText="Find your categorized book here!"
                />
                <Category titleText="Here's the available category that you could select!" />
                <BookForm childToParent={childToParent} />
              </>
            }
          />
          <Route
            path="/table"
            element={
              <>
                <Header
                  mainText="B3k3n App!"
                  subText="Here's the result of your search, you can filter the result, for other records please go back to the form!"
                />
                <Table
                  bookFormToTableData={bookFormToTableData}
                  tableDataToBookmark={tableDataToBookmark}
                  childToParent2={childToParent2}
                />
              </>
            }
          />
          <Route
            path="/bookmark"
            element={
              <>
                <Header
                  mainText="B3k3n App!"
                  subText="Here's your personalized bookmark page, you can see your bookmarked books here!"
                />
                <Bookmark tableDataToBookmark={tableDataToBookmark} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
