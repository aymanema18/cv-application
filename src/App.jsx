import { useState } from "react";
import InitialPage from "../components/initial-page-code/Initial-page";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const createBtn = document.querySelector(".btn");

  // createBtn.addEventListener("click", () => {
  //   return <h1>hello there</h1>;
  // });

  return <InitialPage />;
}

export default App;
