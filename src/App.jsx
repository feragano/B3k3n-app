import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BookForm } from "./components/BookForm";
import { Category } from "./components/Category";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

function App({ data }) {
  const [bookFormToTableData, setBookFormToTableData] = useState([]);

  const childToParent = (data) => {
    setBookFormToTableData(data);
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
                <Table bookFormToTableData={bookFormToTableData} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
