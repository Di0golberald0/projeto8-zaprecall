import { useState } from "react";
import Iniciar from "./components/Iniciar.js";
import Questionario from "./components/Questionario.js";

export default function App() {
    const [page, setPage] = useState("iniciar");
    return (
      <>{page === "iniciar" ? <Iniciar setPage={setPage} /> : <Questionario />}</>
    );
  }