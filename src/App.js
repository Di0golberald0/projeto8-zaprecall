import { useState } from "react";
import Iniciar from "./components/Iniciar.js";
import Questionario from "./components/Questionario.js";
import "./css/reset.css";
import "./css/style.css";

export default function App() {
    const [page, setPage] = useState("iniciar");
    return (
      <>{page === "iniciar" ? <Iniciar setPage={setPage} /> : <Questionario />}</>
    );
  }