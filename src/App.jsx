import "./App.css";
import { BookForm } from "./components/BookForm";
import { Category } from "./components/Category";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header
        mainText="B3k3n App!"
        subText="Find your categorized book here!"
      />
      <Category titleText="Here's the available category that you could select!" />
      <BookForm />
    </>
  );
}

export default App;
