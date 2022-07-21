import ReactDOM from "react-dom";
import { useState } from "react";
import Iniciar from "./Iniciar";
import Questionario from "./Questionario";
import "./reset.css";
import "./style.css";

function App() {
  const [page, setPage] = useState("iniciar");
  return (
    <>{page === "iniciar" ? <Iniciar setPage={setPage} /> : <Questionario />}</>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
