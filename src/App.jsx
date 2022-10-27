import React from "react";
import "./App.css";
import { Category } from "./components/Category";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header
        mainText="B3k3n App!"
        subText="Find your categorized book here!"
      />
      <Category />
    </>
  );
}

export default App;
